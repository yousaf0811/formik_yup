import {useFormik} from "formik";

const BasicForm = ()=>{
    const formik = useFormik({
        initialvalues:{
            email : "",
            age : "",
            password : "",
            confirmPassword : "",
        },
    });
    console.log(formik)
    return(
        <div>
        <form autoComplete="off" >
            <label htmlfor="email" >Email</label>
            <input
             value={formik.values.email}
             onChange={formik.handleChange}
             id="email" type="email" placeholder="Enter Email"
             onBlur={formik.handleBlur} />
            <label htmlfor="email" >Age</label>
            <input
             value={formik.values.age}
             onChange={formik.handleChange} 
             id="age" type="number" placeholder="Enter Age"
             onBlur={formik.handleBlur} />
            <label htmlfor="email" >Password</label>
            <input
             value={formik.values.password}
             onChange={formik.handleChange} 
             id="password" type="password" placeholder="Enter Password"
             onBlur={formik.handleBlur} />
            <label htmlfor="email" > Confoirm Password</label>
            <input
             value={formik.values.confirmPassword}
             onChange={formik.handleChange} 
             id="confirmPassword" type="confirmPassword" placeholder="Enter Again Password"
             onBlur={formik.handleBlur} /> 
             <button type="submit">Submit</button>
        </form>
        </div>

    )
}
export default BasicForm