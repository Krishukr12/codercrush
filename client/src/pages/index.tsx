import { fetchCategories } from "@/http";
import { GetServerSideProps } from "next";

import Head from "next/head";
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>HomePage</title>
        </Head>
        <h1 className="text-primary">Krishan Kumar </h1>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Categories

  const { categories } = fetchCategories();

  return {
    props: {
      categories: {
        items: [],
      },
    },
  };
};
