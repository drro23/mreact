import Head from "next/head";
import styles from "../styles/home/home.module.scss";
import BaseLayout from "../layouts/BaseLayout";
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <>
      <BaseLayout title="Next app + typescript">
        <main>
          <Container maxWidth="md">
            <h1 className={styles.test}>Next App + Typescript</h1>
          </Container>
        </main>
      </BaseLayout>
    </>
  );
}
