import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Layout from "../components/layout";
import Link from "next/link";
import withSession from "../utils/session";

export default function Home({ profileData }) {
  return (
    <Layout profileData={profileData}>
      <div className="h-screen">
        <div className="w-full flex items-center px-10 lg:px-32 bg-primary text-black">
          <section className="w-full">
            <span className="font-bold uppercase tracking-widest text-white">
              Introducing
            </span>
            <h1
              className="text-6xl lg:text-10xl mb-3 mt-1 w-96 h-16 font-bold bg-clip-text"
              id="title"
              style={{
                overflow: "visible",
                background:
                  "linear-gradient(110.46deg,#3e72ff 1.48%,#9a48ff 98.75%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Friskytool
            </h1>
            <p className="font-bold text-white text-lg">
              The integration hub for your discord server
            </p>

            <div className="mt-6 items-stretch block">
              <Link href="/dashboard">
                <a className="font-bold text-white border-solid border-2 border-white rounded-full py-3 px-6 mr-3 hover:text-gray-400 hover:border-gray-400">
                  Dashboard
                </a>
              </Link>
              <Link href="#features">
                <a className="font-bold text-white border-solid border-2 border-white rounded-full py-3 px-6 hover:text-gray-400 hover:border-gray-400">
                  Features
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div
        className="min-h-screen w-full flex items-center px-6 lg:px-32 text-white"
        id="features"
      >
        <section className="container mx-auto px-6 p-10">
          <h2 className="mb-4 text-4xl font-bold text-center text-white">
            Features
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 px-2 py-2 gap-3">
            <div
              className="rounded h-48 shadow-lg text-white flex items-center justify-center p-2"
              style={{
                background:
                  "linear-gradient(110.46deg,#3e72ff 1.48%,#9a48ff 98.75%)",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">Giveaways</h2>
                <div>Easy to use manage and use giveaways</div>
              </div>
            </div>

            <div
              className="rounded h-48 shadow-lg text-white flex items-center justify-center p-2"
              style={{
                background:
                  "linear-gradient(138.46deg,#3e70ff 1.48%,#9a98ff 98.75%)",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">
                  Dank Memer Utilities
                </h2>
                <div>Watch for scams, log trades, and more!</div>
              </div>
            </div>
            <div
              className="rounded h-48 shadow-lg text-white flex items-center justify-center p-2"
              style={{
                background:
                  "linear-gradient(321.73deg,#4bb7ff -1.09%,#6200ff 100.65%)",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">Timers</h2>
                <div>Set timers and mass notify members for server events.</div>
              </div>
            </div>
            <div
              className="rounded h-48 shadow-lg text-white flex items-center justify-center p-2"
              style={{
                background: "linear-gradient(141.85deg,#7e7bff,#ff73fa)",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">Math Utilities</h2>
                <div>Solve math problems without having to leave the app</div>
              </div>
            </div>
            <div
              className="rounded h-48 shadow-lg text-white flex items-center justify-center p-2"
              style={{
                background: "linear-gradient(141.48deg,#f837ee 1.35%,#ffcd4b)",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">Notifications</h2>
                <div>
                  Send messages to channels when people join or leave the
                  server.
                </div>
              </div>
            </div>

            <div
              className="rounded h-48 shadow-lg text-white flex items-center justify-center p-2"
              style={{
                background:
                  "linear-gradient(321.82deg,#d321ff,#ff41a0 59.22%,#ff4492 98.02%),#ff71b8",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">Great Support</h2>
                <div>
                  Join{" "}
                  <a href="https://discord.gg/TMu242J" className="underline">
                    our support server
                  </a>{" "}
                  and get support from our 24/7 support team!
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold btn btn-round text-center text-white mt-16">
            What are you waiting for?
            <br />
            <Link href="/dashboard">
              <a
                style={{
                  background:
                    "linear-gradient(321.73deg,#ffcd4b -1.09%,#ee6315 100.65%)",
                  color: "transparent",
                  backgroundClip: "text",
                }}
              >
                Invite Now!
              </a>
            </Link>
          </h2>
        </section>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withSession(async ({ req, res }) => {
  return { props: { profileData: req.session.profileData || null } };
});
