import React, { useContext, useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId
    const selectedUser = users.find(users => userId.id === userId)
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
        <labl>Name : </labl>
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
