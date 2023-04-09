import "./style/dashboard-info.css"

// Define a functional component called DashboardInfo that takes in a prop called test
const DashboardInfo = ({test}) => {
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
            { test.category.desc }
          </div>
        </div>
        <div className="info-table-container">
          <div className="info-subtitle">
            Components
          </div>
          <div className="info-table-wrapper">
            <table className="info-table">
              <colgroup>
                <col span="1" style={{width: "5%"}}/>
                <col span="1" style={{width: "5%"}}/>
                <col span="1" style={{width: "10%"}}/>
                <col span="1" style={{width: "10%"}}/>
                <col span="1" style={{width: "70%"}}/>
              </colgroup>

              <tr>
                <th> Test </th>
                <th> Name </th>
                <th> Unit </th>
                <th> Range </th>
                <th> Description </th>
              </tr>

              
              {
                // Loop through each result in the test results array and display its information in a row
                test.results.map((result) => {
                  return (
                    <tr>
                      <td> {result.components.name_short} </td>
                      <td> {result.components.name_long} </td>
                      <td> {result.components.unit_short} </td>
                      <td> {result.components.mean} ± {result.components.stdev * 2} </td>
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

export default DashboardInfo;