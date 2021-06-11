import useUser from "../utils/useUser";
import Layout from "../components/layout";

export default function Page() {
  const { user } = useUser({ redirectTo: "/api/login" });
  return (
    <Layout>
      <div>{JSON.stringify(user, null, 2)}</div>
    </Layout>
  );
}
