import React, { useEffect } from "react";
import { getDataByUsername } from "../utils/req";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { u } = context.query;
  const data = await getDataByUsername(typeof u === "string" ? u : "limistah");
  return { props: { ...data } };
};

interface HomepageProps {
  data: {
    data: {
      user:
        | {
            avatarUrl: string;
            bio: string;
            login: string;
            organization: {
              nodes: [
                {
                  defaultBranchRef: { name: string };
                  isPrivate: boolean;
                  name: string;
                  owner: { login: string };
                  url: string;
                }
              ];
            };
          }
        | Object;
    };
  };
  error: Boolean;
}

const HomePage = (props: HomepageProps) => {
  return <div>Update to the homepage</div>;
};

export default HomePage;
