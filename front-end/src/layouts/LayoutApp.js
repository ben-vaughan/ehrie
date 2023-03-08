import HeaderApp from "../components/layout/HeaderApp";
import { Outlet } from "react-router-dom";

const LayoutApp = () => {
  return (
    <div>
      <HeaderApp/>
      <Outlet/>
    </div>
  )
}

export default LayoutApp;