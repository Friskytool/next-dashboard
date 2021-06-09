import { applySession } from "next-session";
export default function Page({ userData }) {
  return <div>{JSON.stringify(userData, null, 2)}</div>;
}

export async function getServerSideProps({ req, res }) {
  await applySession(req, res);
  var data;
  if (req.session.userData) {
    let userData = req.session.userData;
    console.log(userData.headers);
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
