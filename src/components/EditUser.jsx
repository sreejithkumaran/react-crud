import React, { useContext, useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNo: ""
  });

  const { users, editUser } = useContext(GlobalContext);
  
  const navigate = useNavigate();

  const currentUserId = useParams().id

  useEffect(() => {
    const userId = currentUserId
    console.log(users , currentUserId)
    const selectedUser = users.find(users => users.id === userId)
    setSelectedUser(selectedUser)
  },[currentUserId, users])

  const onSubmit = () => {
    editUser(selectedUser)
    navigate("/");
  };

  const onChange = (e) => {
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h5> Edit User Details </h5>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={selectedUser.firstName}
            onChange={onChange}
          ></input>
          {/* <span>{selectedUser.firstName}</span> */}
        </div>
        <p></p>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={selectedUser.lastName}
            onChange={onChange}
          ></input>
          {/* <span>{formError.lastName}</span> */}
        </div>
        <p></p>
        <div>
          <label>Email Id: </label>
          <input
            type="text"
            name="emailId"
            value={selectedUser.emailId}
            onChange={onChange}
          ></input>
          {/* <span>{formError.emailId}</span> */}
        </div>
        <p></p>
        <div>
          <label>Phone No: </label>
          <input
            type="text"
            name="phoneNo"
            value={selectedUser.phoneNo}
            onChange={onChange}
          ></input>
          {/* <span>{formError.phoneNo}</span> */}
        </div>
        <p></p>
        <div>
          <button type="submit">Edit</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
