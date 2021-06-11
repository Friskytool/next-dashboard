import Head from "next/head";
import Header from "./header";
import styles from "./styles/header.module.css";

export default function Layout({ children, ...props }) {
  return (
    <div className={`${styles.container} ${styles.background}`}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "**Friskytool** Dashboard"
          )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg&widths=auto`}
        />
        <meta name="og:title" content={"Friskytool Dashboard"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header {...props} />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}
