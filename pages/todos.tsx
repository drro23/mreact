import Head from "next/head";
import BaseLayout from "../layouts/BaseLayout";
import { Container } from "@material-ui/core";

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Next Todos</title>
      </Head>
      <BaseLayout>
        <main>
          <Container maxWidth="md">
            <h1>Todos app</h1>
          </Container>
        </main>
      </BaseLayout>
    </div>
  );
}
