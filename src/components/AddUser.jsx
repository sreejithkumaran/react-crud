import React,{ useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {v4 as uuid} from'uuid'


import { GlobalContext } from "../context/GlobalState";


const AddUser = () => {
    const {addUser} = useContext(GlobalContext)
    const navigate = useNavigate()
    const [name, setName] = useState()

    const onSubmit = () => {
        const newUser ={
            id: uuid(),
            name
        }
        addUser(newUser)
        navigate('/')
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    return(
        <div>
           <form onSubmit={onSubmit}>
            <labl>Name : </labl>
            <input text='text' placeholder="Enter Name" name='name' value={name} onChange={onChange}/>
            <button type='submit'>Submit</button>
            <Link to='/'>Cancel</Link>
           </form>
        </div>
    )
}

export default AddUser