import SideBar from "./dashboardnav";

export default function Dashboard({ children, ...props }) {
  return (
    <>
      <SideBar {...props?.sidebar} />
      <div className="h-screen w-auto">{children}</div>
    </>
  );
}
