import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { GlobalContext } from "../context/GlobalState";

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  //const [name, setName] = useState()
  const [formValue, setFormValues] = useState({});

  console.log("Form Values : ", formValue);

  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkError = validationForm(formValue);
    setFormError(checkError);

    const error = Object.keys(checkError);

    if (error.length === 0) {
      const newUser = {
        id: uuid(),
        ...formValue,
      };
      addUser(newUser);
      navigate("/");
    }
  };

  const handleValidation = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const validationForm = (value) => {
    const errors = {};
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const alphabetPattern = /^[A-Za-z]+$/;
    const numberPattern = /^[0-9\b]+$/;

    if (!value.firstName) {
      errors.firstName = "Enter FirstName";
    } else if (!alphabetPattern.test(value.firstName)) {
      errors.firstName = "Enter only alphabets in FirstName";
    }

    if (!value.lastName) {
      errors.lastName = "Enter LastName";
    } else if (!alphabetPattern.test(value.lastName)) {
      errors.lastName = "Enter only alphabets in LastName";
    }

    if (!value.emailId) {
      errors.emailId = "Enter Email";
    } else if (!emailPattern.test(value.emailId)) {
      errors.emailId = "Enter Vaild Email";
    }

    if (!value.phoneNo) {
      errors.phoneNo = "Enter Phone No";
    } else if (!numberPattern.test(value.phoneNo)) {
      errors.phoneNo = "Enter Vaild Phone No";
    }

    return errors;
  };

  const cancelbtn = () => {
    navigate("/");
  };

  return (
    <div  class="container-md">
      <form onSubmit={handleSubmit}>
        <h5> Add Contact Details</h5>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formValue.firstName}
            onChange={handleValidation}
          ></input>
          <span>{formError.firstName}</span>
        </div>
        <p></p>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formValue.lastName}
            onChange={handleValidation}
          ></input>
          <span>{formError.lastName}</span>
        </div>
        <p></p>
        <div>
          <label>Email Id: </label>
          <input
            type="text"
            name="emailId"
            value={formValue.emailId}
            onChange={handleValidation}
          ></input>
          <span>{formError.emailId}</span>
        </div>
        <p></p>
        <div>
          <label>Phone No: </label>
          <input
            type="text"
            name="phoneNo"
            value={formValue.phoneNo}
            onChange={handleValidation}
          ></input>
          <span>{formError.phoneNo}</span>
        </div>
        <p></p>
        <div>
          <button type="submit" class="btn btn-primary btn-sm" >Add</button>
          <button type="submit" onClick={cancelbtn} class="btn btn-secondary btn-sm">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
