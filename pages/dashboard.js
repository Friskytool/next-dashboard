import { applySession } from "next-session";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Dashboard() {
  const { data, error } = useSWR("/api/mutual-guilds", fetcher);
  if (error) {
    console.log("error:" + error);
    return (
      <div>
        There was an error with Discord's servers, please try again later
      </div>
    );
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    let rows = [];
    for (var i = 0; i < data.data.length; i++) {
      rows.push(
        <tr>
          <th>{data.data[i]["name"]}</th>
          <th>{data.data[i]["id"]}</th>
        </tr>
      );
    }
    return <table>{rows}</table>;
  }
}

export async function getServerSideProps({ req, res }) {
  await applySession(req, res);
  if (!req.session.userData) {
    req.session.location = req.url;
    res.writeHead(302, { Location: "/api/login" }).end();
  }
  return { props: {} };
}
