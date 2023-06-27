import React, { useContext, useState,useEffect } from "react";
import { Link, useNavigate, useMatch, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContext);
  
  const navigate = useNavigate();
  //const currentUserId = props.match.params.id;
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
      <h2>Edit Form</h2>
      <form onSubmit={onSubmit}>
        <label>Name : </label>
        <input
          text="text"
          placeholder="Enter Name"
          name="name"
          value={selectedUser.name}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export default EditUser;
