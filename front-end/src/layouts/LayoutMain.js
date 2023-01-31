import Header from "../components/layout/Header";

const LayoutMain = ({page}) => {
  return (
    <div>
      <Header/>
      <div className="layout-body">{page}</div>
    </div>
  )
}

export default LayoutMain;