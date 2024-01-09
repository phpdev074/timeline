// LoginForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { WEBSITE_NAME ,COMPANY_LOGO} from '../utils/constants';

const LoginForm = ({ formType, onToggle }) => {
  const loginInitialValues = {
    email: '',
    password: '',
  };

  const loginValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const navigate = useNavigate(); 

  const onSubmit = async (values) => {
    try {
      let url = 'http://localhost:5005/api/admin/login'||'https://timeline-backend-tau.vercel.app/login';
      const response = await axios.post(url, values);
      if (response.status === 200) {
        const token = response?.data?.token;
        localStorage.setItem('jwtToken', token);
        navigate('/dashboard');

        toast.success(`${formType === 'signup' ? 'User registered' : 'User logged in'} successfully!`);
      }
    } catch (error) {
      console.error('An error occurred during the API request:', error);

      if (error.response) {
        if (error.response.status === 400) {
          const errorMessage = error?.response?.data?.error;
          toast.error(errorMessage);
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } else if (error.request) {
        console.error('No response received from the server:', error.request);
        toast.error('An error occurred. Please try again.');
      } else {
        console.error('Error during request setup:', error.message);
        toast.error('An error occurred. Please try again.');
      }
    }
  };
  const textStyle = {
    fontFamily: "'Playfair Display', serif",
  };
  return (
    <>
      <h1 style={textStyle}>{WEBSITE_NAME}</h1>
      <Formik
        initialValues={ loginInitialValues}
        validationSchema={formType === 'login'&& loginValidationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <Field type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
               Login
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
