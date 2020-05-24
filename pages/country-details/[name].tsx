import React from "react";
import axios from "axios";
import { NextPage, GetServerSideProps } from "next";
import { Country } from "interfaces/Country";
import { Container, Button, Typography } from "@material-ui/core";
import BaseLayout from "layouts/BaseLayout";
import Link from "next/link";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import styles from "styles/country-details/country-details.module.scss";

type CountryDetailsProps = {
  country: Country;
};

const CountryDetails: NextPage<CountryDetailsProps> = ({ country }) => {
    console.log("client side: " + country)
    if (country !== null)
    return (
        <BaseLayout>
        <main>
            <Container maxWidth="md">
            <Link href="/countries">
                <Button variant="contained" className="my-4">
                <KeyboardBackspaceIcon className="mr-2" /> Back
                </Button>
            </Link>
            <div className={`my-2 ${styles.countryInfoContainer}`}>
                <img
                src={country.flag}
                alt={`${country.name} flag`}
                height="260"
                width="320"
                />
                <div className="w-100 ml-4 d-flex flex-column justify-content-center">
                <Typography
                    gutterBottom
                    variant="h1"
                    className={styles.countryTitle}
                >
                    {country.name}
                </Typography>
                <div className={styles.listInfoContainer}>
                    <div>
                    <ul className={styles.listInfo}>
                        <li>
                        <span className="font-weight-bold">Native Name: </span>{" "}
                        {country.nativeName}
                        </li>
                        <li>
                        <span className="font-weight-bold">Population: </span>{" "}
                        {country.population}
                        </li>
                        <li>
                        <span className="font-weight-bold">Region: </span>{" "}
                        {country.region}
                        </li>
                        <li>
                        <span className="font-weight-bold">Sub Region: </span>{" "}
                        {country.subregion}
                        </li>
                        <li>
                        <span className="font-weight-bold">Capital: </span>{" "}
                        {country.capital}
                        </li>
                    </ul>
                    </div>
                    <div>
                    <ul className={styles.listInfo}>
                        <li>
                        <span className="font-weight-bold">
                            Top Level Domain:{" "}
                        </span>{" "}
                        {country.topLevelDomain}
                        </li>
                        <li>
                        <span className="font-weight-bold">Currencies: </span>{" "}
                        {country.currencies[0].name}
                        </li>
                        <li>
                        <span className="font-weight-bold">Languages: </span>{" "}
                        {country.languages[0].name}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </Container>
        </main>
        </BaseLayout>
    );
    else
        return (
            <BaseLayout>
                <main>
                    <h1>No country for you bro :D</h1>
                </main>
            </BaseLayout>
        )
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log("server side axios: " + context.query.name?.length);
  try {
    let res = await axios.get(
      "/name/" + context.query.name + "?fullText=true"
    );
    console.log(res);
    return {
      props: {
        country: res.data[0],
      },
    };
  } catch (e) {
      console.log(e);
  }
  return {
    props: {
      country: null,
    },
  };
};

export default CountryDetails;
