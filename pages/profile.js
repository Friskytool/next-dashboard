import { applySession } from "next-session";

import Layout from "../components/layout";

export default function Page({ userData }) {
  return (
    <Layout>
      <div>{JSON.stringify(userData, null, 2)}</div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  await applySession(req, res);
  var data;
  if (req.session.userData) {
    let userData = req.session.userData;
    let fetchData = await fetch("https://discordapp.com/api/v8/users/@me", {
      headers: userData.headers,
    });
    data = await fetchData.json();
    return {
      props: { userData: data },
    };
  } else {
    req.session.location = req.url;
    res.writeHead(302, { Location: "/api/login" }).end();

    return {
      props: {},
    };
  }
}
