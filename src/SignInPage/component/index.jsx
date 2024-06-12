
import './index.css'
import {useFormik} from "formik";
import axios from "axios";
import {Bounce, toast, ToastContainer} from "react-toastify";

const SignIn = () => {

    const validate = values =>{
        const errors = {}
        if (!values.username){
            errors.username = 'Required'
        }
        if (!values.password){
            errors.password = 'Required'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            username : '',
            password : ''
        },
        validate,
        onSubmit: async values => {
            const payload ={
                'username': values.username,
                'password': values.password
            }

            try{
                const response = await axios.post("http://localhost:8080/login",payload)

                if (response.data.successful){
                    toast.success('Sign up successful!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    
                }
            }catch (error){

                toast.error(`${error.response.data.response}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }

        }
    })
    return(
        <>
            <div className={"container"}>
                <img src='/SignInPageImg.svg' className={"signUpImage"} alt={"signup"}/>
                <div className={"login-box"}>

                    <h1>Welcome Back!</h1>
                    <p>Login to your dashboard</p>
                    <form onSubmit={formik.handleSubmit}>
                        <input type={"text"} placeholder={"Username"} name={"username"} className={"fields"} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username}/>
                        {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
                        <input type={"password"} placeholder={"Password"} name={"password"} className={"fields"} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
                        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        <p><input type={"checkbox"}/>Remember me</p>
                        <p><a>Forgot Password</a></p>
                        <button type={"submit"}>Login</button>

                        <p>Dont have an account?<a href={"/sign_up"}>Sign Up</a></p>

                    </form>


                </div>
                <ToastContainer/>

            </div>

        </>
    )
}

export default SignIn