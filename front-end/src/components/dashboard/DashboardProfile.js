import "./style/dashboard-profile.css"

const DashboardProfile = (props) => {
  return (
    <div>
      <div className="profile-header">
        <div className="profile-header-image">
          <svg viewBox="0 0 10 10">
            <circle cx="50%" cy="50%" r="4" fill="#F7F5FD"/>
          </svg>
        </div>
        <div className="profile-header-name">
          {props.name}
        </div>
        <div className="profile-header-location">
          {props.location}
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content-title">
          <span style={{borderBottom: "solid 1px #E2E2E2"}}> General </span>
        </div>
        <table className="profile-content-grid">
          <tr>
            <td> Name </td>
            <td className="profile-content-grid-value"> {props.name} </td>
          </tr>
          <tr>
            <td> Date of Birth </td>
            <td className="profile-content-grid-value"> {props.dateOfBirth} </td>
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
            <td className="profile-content-grid-value"> {props.bloodType} </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default DashboardProfile;