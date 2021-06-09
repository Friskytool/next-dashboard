import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <div id={styles.homeMainContentContainer}>
        <div id={styles.leftMainContainer}></div>
      </div>
    </Layout>
  );
}
