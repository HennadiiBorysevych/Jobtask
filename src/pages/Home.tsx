import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <Outlet />
    </>
  );
};

export default Home;
