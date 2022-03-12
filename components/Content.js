import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { Children } from "react";
import Header from "./Header/_index";
import Footer from "./Footer";
const Content = ({ className, children }) => {
  return (
    <div className={`${className} layout`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Content;
