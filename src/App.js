// import logo from './logo.svg';
import './App.css';
import SignUp from "./SignUpPage/component";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import SignIn from "./SignInPage/component";
import {toast} from "react-toastify";
// toast.configure()


function App() {
  return (
      <div>
          {/*<SignUp></SignUp>*/}

          <BrowserRouter>
              <Routes>
                  <Route>
                      <Route element={<SignUp/>} path={"/sign_up"}/>
                      <Route element={<SignIn/>} path={"/sign_in"}/>

                  </Route>
              </Routes>
          </BrowserRouter>
        {/*<ToastContainer/>*/}
      </div>
  );
}

export default App;

// import React, {useState} from 'react';
// import {Formik, Form, Field} from 'formik';
// import * as Yup from 'yup';
// import style from './index.module.css';
// import {toast, ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import {Icon} from '@iconify/react';
// import loadingLoop from '@iconify/icons-line-md/loading-loop';
//
// const SignUp = () => {
//     const [isLoading, setIsLoading] = useState(false);
//
//     const validationSchema = Yup.object().shape({
//         fullName: Yup.string()
//             .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
//             .required('Full Name is required'),
//         email: Yup.string()
//             .email('Invalid email address')
//             .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Must be a valid email Address')
//             .required('Email Address is required'),
//     });
//
//     const handleSubscribe = async (values, {resetForm}) => {
//         setIsLoading(true);
//         try {
//             const payload = {
//                 email_address: values.email,
//                 status: 'subscribed',
//                 merge_fields: {
//                     FNAME: values.fullName,
//                     LNAME: 'name',
//                 },
//             };
//             const response = await axios.post("", payload);
//
//             if (response.data.success) {
//                 toast.success(Hi ${values.fullName}, You are now a citizen, {
//                     position: 'top-right',
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                 });
//                 resetForm();
//             } else {
//                 toast.error('Subscription failed. Please try again', {
//                     position: 'top-right',
//                     autoClose: 3000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                 });
//             }
//         } catch (error) {
//             console.error('Error during subscription:', error);
//             toast.error('Subscription failed. Please try again', {
//                 position: 'top-right',
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//         } finally {
//             setIsLoading(false);
//         }
//     };
//
//     return (
//         <div>
//             <Formik
//                 initialValues={{fullName: '', email: ''}}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubscribe}
//             >
//                 {({values, errors, touched, handleChange, handleBlur}) => (
//                     <Form>
//                         <div className={style.subCont}>
//                             <div className={style.innerCont}>
//                                 <div className={style.contentCont}>
//                                     <div className={style.contentSection}>
//                                         <p className={style.topic}>Hear From Our Town Crier</p>
//                                         <p className={style.text}>
//                                             Subscribe to our newsletter to stay connected to our activities, get
//                                             insights<br/> and updates on what's happening in our community!
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className={style.inputSection}>
//                                     <div>
//                                         <Field
//                                             type="text"
//                                             name="fullName"
//                                             placeholder="Enter Full Name"
//                                             value={values.fullName}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             style={{
//                                                 borderColor: errors.fullName && touched.fullName ? 'red' : 'inherit',
//                                             }}
//                                         />
//                                         {errors.fullName && touched.fullName &&
//                                             <div className={style.error}>{errors.fullName}</div>}
//                                     </div>
//                                     <div>
//                                         <Field
//                                             type="email"
//                                             name="email"
//                                             placeholder="Enter Email Address"
//                                             value={values.email}
//                                             onChange={handleChange}
//                                             onBlur={handleBlur}
//                                             style={{
//                                                 borderColor: errors.email && touched.email ? 'red' : 'inherit',
//                                             }}
//                                         />
//                                         {errors.email && touched.email &&
//                                             <div className={style.error}>{errors.email}</div>}
//                                     </div>
//                                     <div className={style.btn}>
//                                         <button type="submit" className={style.btn}>
//                                             {isLoading ? (
//                                                 <div className="flex items-center justify-center">
//                                                     <Icon width={24} height={24} icon={loadingLoop}/>
//                                                 </div>
//                                             ) : (
//                                                 'Subscribe'
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//             <ToastContainer/>
//         </div>
//     );
// };
//
// export default SignUp;