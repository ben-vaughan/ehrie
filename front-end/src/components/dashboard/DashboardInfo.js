import "./style/dashboard-info.css"

const DashboardCharts = ({test}) => {
  console.log(test)
  return (
    <div className="info-outer">
      <div className="info-inner">
        <div className="info-content-container">
          <div className="info-title">
            { test.category.name }
          </div>
          <div className="info-subtitle">
            About
          </div>
          <div className="info-description">
            The full blood count (FBC) is one of the most commonly requested tests and provides important information about the kinds and numbers of cells in the blood: red blood cells, white blood cells and 
            platelets. Abnormalities in any of these types of cells can indicate the presence of important medical disorders.
          </div>
        </div>
        <div className="info-table-container">
          <div className="info-subtitle">
            Components
          </div>
          <div className="info-table-wrapper">
            <table className="info-table">
              <colgroup>
                <col span="1" style={{width: "10%"}}/>
                <col span="1" style={{width: "20%"}}/>
                <col span="1" style={{width: "70%"}}/>
              </colgroup>


              <tr>
                <th> Test </th>
                <th> Name </th>
                <th> Description </th>
              </tr>

              {
                test.results.map((result) => {
                  return (
                    <tr>
                      <td> {result.components.name_short} </td>
                      <td> {result.components.name_long} </td>
                      <td> May be increased with infections, inflammation, cancer, leukaemia; decreased with some medications, some autoimmune conditions, some viral or severe infections, bone marrow failure, enlarged spleen, liver disease, alcohol excess and congenital marrow aplasia.  </td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCharts;