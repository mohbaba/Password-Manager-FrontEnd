import './index.css'
import {Bounce, toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup';
import {Formik, useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import async from "async";

const SignUp = () => {
    const navigate = useNavigate();
    const validate = values =>{
        const errors = {}
        if (!values.username){
            errors.username = 'Required';
        }
        if (!values.password){
            errors.password = 'Required';
        }
        if (!values.confirmPassword){
            errors.confirmPassword = 'Required';
        }else if (values.password !== values.confirmPassword){
            errors.confirmPassword = "The passwords don't match!";
        }

        return errors;
    }



    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: async values => {
            const payload = {
                username: formik.values.username,
                password: formik.values.password
            };
            try {
                const response = await axios.post("http://localhost:8080/register", payload)
                console.log(response)
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
                    navigate('/sign_in')

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


        },
    });

    // const validationSchema = Yup.object({
    //         username: Yup.string().required('Required'),
    //         password: Yup.string().required('Required'),
    //         confirmPassword: Yup.string()
    //             .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //             .required('Required'),
    //         // confirmPassword:Yup.string.password.matches(password)
    // })

    return(
      <>
          {/*<Formik initialValues={{username: '', password: '', confirmPassword: '',}} onSubmit={values => {}} validationSchema={validationSchema}*/}
          <div className={"container"}>
          <img src='/signin.png' className={"signUpImage"} alt={"signup"}/>
              <div className={"login-box"}>

                  <h1>Welcome!</h1>
                  <p>Sign up by entering the information below</p>
                  <form onSubmit={formik.handleSubmit}>
                      <input name={"username"} type={"username"} placeholder={"Username"} className={"fields"} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}/>
                      {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
                      <input name={"password"} type={"password"} placeholder={"Password"} className={"fields"} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                      <input name={"confirmPassword"} type={"password"} placeholder={"Confirm password"} className={"fields"} onChange={formik.handleChange}  value={formik.values.confirmPassword}/>
                      {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}


                      <div className={"links"}>
                          <p>Already have an account?<a href={"/sign_in"}>Login</a></p>
                      </div>
                      <button type={"submit"}  >Sign Up</button>
                  </form>

              </div>
            <ToastContainer/>
          </div>



      </>
  )
}

export default SignUp