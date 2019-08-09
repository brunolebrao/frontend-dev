import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import './Login.css';
import logo from '../../assets/logo.svg';
import api from '../../serves/api';

const schema = yup.object ().shape ({
  username: yup.string ().required ('Favor informar o usuário'),
});

export default function Login({history}) {
  return (
    <div className="login-container">
      <Formik
        initialValues={{username: ''}}
        validationSchema={schema}
        onSubmit={async (values, actions) => {
          const {username} = values;
          const response = await api.post ('/devs', {
            username,
          });
          console.log ('TCL: Login -> response', response);
          if (response.data._id) {
            history.push (`/dev/${response.data._id}`);
          }
        }}
        render={({
          isValid,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <img src={logo} alt="TinDev" />
            <input
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Digite seu usuário do GitHub"
              name="username"
            />
            {errors.username && <div className="error">{errors.username}</div>}
            <button type="submit" disabled={!isValid}>Enviar</button>
          </form>
        )}
      />
    </div>
  );
}
