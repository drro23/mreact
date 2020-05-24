import React from "react";
import Head from "next/head";
import Header from "../components/app-header/header";

type BaseLayoutProps = {
  title?: string;
  description?: string;
};

const BaseLayout: React.FunctionComponent<BaseLayoutProps> = ({
  children,
  description,
  title = "Base Layout title",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={description ? description : "Next app description"}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;
