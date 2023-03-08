import "./style/DataBlock.css"

const DataBlock = (props) => {
  return (
    <div className="data-block-wrapper">
      <div className="data-block-title">
        { props.title }
      </div>
      <div className="data-block-main">
        { props.children }
      </div>
    </div>
  )
}

export default DataBlock;