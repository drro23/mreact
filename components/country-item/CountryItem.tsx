import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./country-item.module.scss";
import Link from "next/link";
import { Country } from "interfaces/Country";

type CountryItemProps = {
  country: Country;
};

export default function CountryItem({ country }: CountryItemProps) {
  return (
    <Card className={styles.root + ' w-100'}>
      <Link href="/country-details/[name]" as={`/country-details/${country.name}`}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            image={country.flag}
            title="Country flag"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {country.name}
            </Typography>
            <ul className={styles.countryInfo}>
              <li>
                <span className="font-weight-bold">Population: </span>
                {country.population}
              </li>
              <li>
                <span className="font-weight-bold">Region: </span>
                {country.region}
              </li>
              <li>
                <span className="font-weight-bold">Capital: </span>
                {country.capital}
              </li>
            </ul>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
