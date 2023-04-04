import "./style/Block.css"

const Block = (props) => {
  return (
    <div>
      <div className="data-block-title">
        { props.title }
      </div>
      <div className="data-block-main">
        { props.children }
      </div>
    </div>
  )
}

export default Block;