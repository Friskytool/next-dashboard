import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <div className="h-screen w-full flex items-center px-6 lg:px-32 bg-primary text-black">
        <section className="w-full">
          <span className="font-bold uppercase tracking-widest">
            Introducing
          </span>
          <h1
            className="text-3xl lg:text-5xl w-96 h-16 font-bold cursor-pointer select-none title-gradient"
            id="title"
          >
            Friskytool
          </h1>
          <p className="font-bold">
            The integration hub for your discord server
          </p>
          <p className="sm:w-96">
            Boost your servers activity with <strong>quick</strong> and{" "}
            <strong>easy</strong>
            giveaways
          </p>

          <div className="mt-2 items-stretch block">
            <a href="/login" className="btn bg-grey hover:bg-darkgrey">
              Get Started
            </a>
            <a href="#features" className="btn bg-grey hover:bg-darkgrey">
              Features
            </a>
          </div>
        </section>

        <footer className="absolute items-stretch right-4 bottom-36 block sm:hidden">
          <a href="/login" className="btn bg-grey hover:bg-darkgrey">
            Invite
          </a>
          <a href="#features" className="btn bg-grey hover:bg-darkgrey">
            Features
          </a>
        </footer>
        <svg
          className="absolute bottom-0 left-0 text-white"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            className="wavePath-haxJK1"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div
        className="min-h-screen w-full flex items-center px-6 lg:px-32 bg-white text-black"
        id="features"
      >
        <section className="container mx-auto px-6 p-10">
          <h2 className="mb-4 text-4xl font-bold text-center text-black">
            Features
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 px-2 py-2 gap-3">
            <div
              className="rounded h-48 shadow-lg text-white flex items-center justify-center p-2"
              style={{
                background:
                  "linear-gradient(142.53 deg,#00a295,#26e8f4 98.75%)",
              }}
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold uppercase">Giveaways</h2>
                <div>Easy to use giveaways with multiple requirements.</div>
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

          <h2 className="text-2xl font-bold text-center text-black mt-16">
            What are you waiting for?
            <br />
            <a
              href="/login"
              style={{
                background:
                  "linear-gradient(321.73deg,#ffcd4b -1.09%,#ee6315 100.65%);",
              }}
              className="btn bg-grey hover:bg-darkgrey"
            >
              Invite Now!
            </a>
          </h2>
        </section>
      </div>
    </Layout>
  );
}
