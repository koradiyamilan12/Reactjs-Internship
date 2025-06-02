import "./UserDetails.css";
import { FaUser } from "react-icons/fa6";

const UserDetails = ({ formData, deleteHandler, setEditUserId }) => {
  return (
    <div className="tabel-container">
      <h2 className="table-heading">User Details</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Address</th>
              <th>Birth Place</th>
              <th>Mobile Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item) => (
              <tr key={item.id}>
                <td className="user-icon">
                  <FaUser />
                </td>
                <td>{`${item.fname} ${item.lname}`}</td>
                <td>{item.birthdate}</td>
                <td>{`${item.address1}, ${item.address2}`}</td>
                <td>{item.birthplace}</td>
                <td>{item.pnumber}</td>
                <td className="button-wrapper">
                  <button
                    className="table-edit-btn"
                    onClick={() => setEditUserId(item.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="button-wrapper">
                  <button
                    className="table-delete-btn"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
