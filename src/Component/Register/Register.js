import React, { useState } from "react";
import styles from "./Register.module.scss";
import { useHistory, useLocation } from 'react-router-dom';
import { useFetch } from 'use-http';
import { useForm } from "react-hook-form";

const Register = () => {
  const { post, get, response } = useFetch(process.env.REACT_APP_SERVER_BASE_URL);

  const history = useHistory();
  const location = useLocation();
  const regNo = location.state.regNo;

  const [updateValues, setUpdateValues] = useState(location.state.update);

  const { handleSubmit, register, errors } = useForm({
    mode: "onBlur",
    defaultValues: updateValues
  });

  const submitRegistration = async (event) => {
    console.log(event.lname)
    const nameE = `${event.fname} ${event.lname}`;
    await
      post('/pending/add', event).then(result => {
        if (response.ok) {
          console.log('Done')
		  sessionStorage.setItem('formSubmit',JSON.stringify(event));
          history.push('/done', { name: nameE, regNo: event.regNo });
        } else {
          console.log('Invalid')
        }

      }).catch(err => {
        console.log('error', err);
      })
  }

  const routeChange = () => {
    let path = "/";
    history.push(path);
  }

  return (
    <div className="container text-center">
      <div
        className={`${styles.wrapCenter} row justify-content-center align-content-center`}
      >
        <div className="col">
          <h3>Rigistration</h3>

          <form onSubmit={handleSubmit(submitRegistration)}>
            <input
              name="regNo"
              type="hidden"
              className={`${styles.inputCenter} form-control`}
              value={regNo}
              aria-invalid={errors.email ? "true" : "false"}
              ref={register({
                required: "email is required"
              })}
            />
            <div className="form-group">
              <label className={`${styles.newform}`}>First Name</label>
              <input
                name="fname"
                type="text"
                className={`${styles.inputCenter} form-control`}
                placeholder="Enter your firstname"
                aria-invalid={errors.email ? "true" : "false"}
                ref={register({
                  required: "email is required"
                })}
              />
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Lastname</label>
              <input
                name="lname"
                type="text"
                className={`${styles.inputCenter} form-control`}
                placeholder="Enter your Lastname"
                aria-invalid={errors.email ? "true" : "false"}
                ref={register({
                  required: "email is required"
                })}
              />
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Email address</label>
              <input
                name="email"
                type="email"
                className={`${styles.inputCenter} form-control`}
                placeholder="Enter your email address"
                aria-invalid={errors.email ? "true" : "false"}
                ref={register({
                  required: "email is required"
                })}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Contact number</label>
              <input
                name="phone"
                type="tel"
                className={`${styles.inputCenter} form-control`}
                placeholder="Enter your valied contact number"
                aria-invalid={errors.email ? "true" : "false"}
                ref={register({
                  required: "email is required"
                })}
              />
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Skills</label>
              <textarea
                name="skills"
                className={`${styles.inputCenter} form-control`}
                placeholder="Eg-Graphic design,web developement,etc."
                rows="6"
                aria-invalid={errors.email ? "true" : "false"}
                ref={register({
                  required: "email is required"
                })}
              ></textarea>
            </div>
            <div>
              <button style={{ minWidth: '6rem' }} className={`${styles.inner} btn btn-primary mr-4`} onClick={routeChange}>
                Back
				</button>
              <input type="submit" style={{ minWidth: '6rem' }} className={`${styles.inner} btn btn-primary`} value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
