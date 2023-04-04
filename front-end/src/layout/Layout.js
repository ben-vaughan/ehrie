import "./style/layout.css";

import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout;