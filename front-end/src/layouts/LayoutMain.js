import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";

const LayoutMain = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default LayoutMain;