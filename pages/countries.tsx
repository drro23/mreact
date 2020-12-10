import BaseLayout from "../layouts/BaseLayout";
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import CountryItem from "../components/country-item/CountryItem";
import axios from "axios";
import styles from "../styles/countries/countries.module.scss";
import { GetStaticProps, GetServerSideProps } from "next";
import { Country } from "../interfaces/Country";
import React, { useState, useEffect } from "react";

type CountriesProps = {
  countries: Country[];
};

export default function Countries({ countries }: CountriesProps) {
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryItems, setCountryItems] = useState(
    countries.map((country) => {
      return <CountryItem key={country.name} country={country} />;
    })
  );

  async function getCountriesByRegion(region: string) {
    const res = await axios.get(
        `/region/${region}`
      );
      setCountryItems(
        res.data?.map((country: Country) => {
          return <CountryItem key={country.name} country={country} />;
        })
      );
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string);
    getCountriesByRegion(event.target.value as string);
  };

  async function getCountriesByName(name: string) {
    const res = await axios.get(
      `/name/${name}`
    );
    setCountryItems(
      res.data?.map((country: Country) => {
        return <CountryItem key={country.name} country={country} />;
      })
    );
  }

  const handleSearchCountry = async (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCountryName(event.target.value as string);
    if (countryName !== "" && countryName.length >= 1)
      getCountriesByName(countryName);
    else {
      let res = await getInitialData();
      setCountryItems(
        res.props.countries?.map((country : Country) => {
          return <CountryItem key={country.name} country={country} />;
        })
      );
    }
  };

  return (
    <>
      <BaseLayout>
        <main>
          <Container maxWidth="md">
            <div className="d-flex justify-content-between my-4">
              <TextField
                label="Search country"
                type="search"
                className={styles.searchField}
                value={countryName}
                onChange={handleSearchCountry}
              />
              <FormControl className={styles.filterRegion}>
                <InputLabel id="demo-simple-select-label">
                  Filter Region
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={region}
                  onChange={handleChange}
                >
                  <MenuItem value="Africa">Africa</MenuItem>
                  <MenuItem value="Americas">Americas</MenuItem>
                  <MenuItem value="Asia">Asia</MenuItem>
                  <MenuItem value="Europe">Europe</MenuItem>
                  <MenuItem value="Oceania">Oceania</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.gridCountries}>{countryItems}</div>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
}

async function getInitialData() {
  const res = await axios.get("/all");
  return {
    props: {
      countries: res.data,
    },
  };
}

export const getServerSideProps: GetServerSideProps = getInitialData;
