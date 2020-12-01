import React from "react";
import styles from "./register.module.scss";

const register = () => {
  return (
    <div className="container text-center">
      <div
        className={`${styles.wrapCenter} row justify-content-center align-content-center`}
      >
        <div className="col">
          <h3>Rigistration</h3>

          <form>
            <div class="form-group">
              <label className={`${styles.newform}`}>First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your firstname"
              />
            </div>
            <div class="form-group">
              <label className={`${styles.newform}`}>Lastname</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your Lastname"
              />
            </div>
            <div class="form-group">
              <label className={`${styles.newform}`}>Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email address"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label className={`${styles.newform}`}>Contact number</label>
              <input
                type="tel"
                class="form-control"
                placeholder="Enter your valied contact number"
              />
            </div>
            <div class="form-group">
              <label className={`${styles.newform}`}>Skills</label>
              <textarea
                class="form-control"
                placeholder="Eg-Graphic design,web developement,etc."
                rows="6"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
