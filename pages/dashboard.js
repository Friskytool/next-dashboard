import { applySession } from "next-session";
import Layout from "../components/layout";
import Loader from "../components/loading";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import styles from "../styles/dashboard.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Dashboard({ profileData }) {
  const { data, error } = useSWR("/api/guilds", fetcher);
  if (error) {
    console.log("error:" + error);
    return (
      <div>
        There was an error with Discord's servers, please try again later
      </div>
    );
  } else if (!data?.data) {
    return (
      <Layout profileData={profileData}>
        <Loader />
      </Layout>
    );
  } else {
    let items = [];
    let entry;
    for (var i = 0; i < data.data.length; i++) {
      entry = data.data[i];

      if ((entry.permissions & 0x20) == 0x20) {
        items.push(
          <Link href={`/dashboard/${entry.id}`}>
            <div
              className={`cursor-pointer button shadow-lg rounded-md p-4 max-w-sm w-screen mx-auto mb-4 bg-black transform transition duration-200 hover:scale-110 transition ease-out duration-700 hover:shadow-xl ${styles.guildcontainer}`}
            >
              <div className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-10">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={`https://cdn.discordapp.com/icons/${entry.id}/${entry.icon}.webp?size=256`}
                      alt="Server Image"
                      width="256"
                      height="256"
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-medium relative truncate text-white">
                      {entry.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      }
    }
    console.log(data);
    return (
      <Layout profileData={profileData}>
        <div className="w-auto h-screen flex flex-col items-center">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="sm:rounded-lg">
                <div className="min-w-full divide-y divide-gray-200">
                  <div className="divide-y divide-gray-200">{items}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export async function getServerSideProps({ req, res }) {
  await applySession(req, res);
  if (!req.session.userData) {
    req.session.location = req.url;
    return res.writeHead(302, { Location: "/api/login" }).end();
  }
  return { props: { profileData: req.session.profileData } };
}
