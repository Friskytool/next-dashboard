import Layout from "../../components/layout";
import Dashboard from "../../components/dashboard";

export default function Page({ guild }) {
  return (
    <Layout>
      <base href={`/dashboard/${guild.id}`} />
      <Dashboard />
    </Layout>
  );
}

export async function getServerSideProps(req, res) {
  return { props: { guild: { id: 1 } } };
}
