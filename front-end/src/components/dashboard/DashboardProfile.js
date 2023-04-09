import "./style/dashboard-profile.css"

// Define a functional component called DashboardProfile that takes in props
const DashboardProfile = (props) => {

  return (
    <div>
      <div className="profile-header">  {/* Header section of the profile */}
        <div className="profile-header-image"> {/* Profile image container */}
          <svg viewBox="0 0 10 10">
            <circle cx="50%" cy="50%" r="4" fill="#F7F5FD"/>
          </svg>
        </div>
        <div className="profile-header-name">
          {(props.first_name + " " + props.last_name).replace('"', "'")}
        </div>
        <div className="profile-header-location">
          {props.address}
        </div>
      </div>
      <div className="profile-content"> {/* Main content section of the profile */}
        <div className="profile-content-title">
          <span style={{borderBottom: "solid 1px #E2E2E2"}}> General </span>
        </div>
        <table className="profile-content-grid">
          <tr>
            <td> Name </td>
            <td className="profile-content-grid-value"> {(props.first_name + " " + props.last_name).replace('"', "'")} </td>
          </tr>
          <tr>
            <td> Date of Birth </td>
            <td className="profile-content-grid-value"> {props.date_of_birth} </td>
          </tr>
          <tr>
            <td> Weight </td>
            <td className="profile-content-grid-value"> {props.weight}kg </td>
          </tr>
          <tr>
            <td> Height </td>
            <td className="profile-content-grid-value"> {props.height}cm </td>
          </tr>
          <tr>
            <td> Blood Type </td>
            <td className="profile-content-grid-value"> {props.blood_type} </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default DashboardProfile;