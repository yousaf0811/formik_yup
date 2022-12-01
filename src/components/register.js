import { useState } from "react"

import {useFormik} from "formik"

const initialValues = {
    name: "",
    email:"",
    password:"",
}

const Register = (props)=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(email)
        console.log(pass)
    }
    const Registration = ()=>{
      const formik1 = useFormik({
            initialValues:initialValues,
            onSubmit:(values)=>{
                console.log(

                    values
                )
                console.log("helo"+ formik1);                               
            }
        })
    }
    return(
        <>
        <div className="form">
        <form className="register-form" onSubmit={handlesubmit}>
            <h2>Register</h2>
            <label>Full Name</label>
            <input type="name" id="name" name="name" placeholder="Full Name" ></input>
            <label for="email" >Enter the Email : </label>
            <input type='email' placeholder="Email" id="email" name="email" ></input>
            <label for="password" >Enter the Password : </label>
            <input type='password' placeholder="********" id="password" name="password" ></input>
            <button type="submit" >Log In</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('login')} >Already have Account? Then Log in Here.</button>
        </div>
        </>
    )
}
export default Register