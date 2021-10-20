import TheHeader from "../components/TheHeader";

const Layout = ({ children }: any): any => {
  return (
    <>
      <div className="main">
        <TheHeader />
        <div>{children}</div>
      </div>
    </>
  );
};
export default Layout;
