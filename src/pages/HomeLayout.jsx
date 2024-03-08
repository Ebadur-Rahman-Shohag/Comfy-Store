import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

function HomeLayout() {
  return (
    <>
      <nav className="text-4xl text-primary">
        <Header/>
        <NavBar/>
        <section className="align-element py-20">
          <Outlet />
        </section>
      </nav>
    </>
  );
}

export default HomeLayout;
