import React from "react";
import styles from "./Register.module.scss";
import {useHistory} from 'react-router-dom';

const Register = () => {

  const history = useHistory();

const routeChange = () =>{ 
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

          <form>
            <div className="form-group">
              <label className={`${styles.newform}`}>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your firstname"
              />
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Lastname</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Lastname"
              />
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Contact number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your valied contact number"
              />
            </div>
            <div className="form-group">
              <label className={`${styles.newform}`}>Skills</label>
              <textarea
                className="form-control"
                placeholder="Eg-Graphic design,web developement,etc."
                rows="6"
              ></textarea>
            </div>

            
          </form>
          <div>
            <button type="submit" style={{minWidth:'6rem'}} className= {`${styles.inner} btn btn-primary mr-4`} onClick={routeChange}>
              Back
            </button>
            <button type="submit" style={{minWidth:'6rem'}} className= {`${styles.inner} btn btn-primary`} >
              Submit
            </button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
