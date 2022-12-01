import { useState } from "react"


const Login = (props)=>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(email)
        console.log(pass)
    }
    return(
        <>
        <div className="form">
        <form className="login-form" onSubmit={handlesubmit}>
            <h2>Login</h2>
            <label for="email" >Enter the Email : </label>
            <input type='email' placeholder="Email" id="email" name="email" ></input>
            <label for="password" >Enter the Password : </label>
            <input type='password' placeholder="********" id="password" name="password" ></input>
            <button type="submit" >Log In</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('register')} >Don't have any Account? Reguister?</button>
        </div>
        </>
    )
}
export default Login