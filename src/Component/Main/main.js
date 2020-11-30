import React from "react";
import styles from './main.module.scss';

const main = () => {
  return (
    <div className="container text-center" >
      <div className={`${styles.wrapCenter} row justify-content-center align-content-center`} >
        <div className="col ">
          <h3>Login</h3>
          <form>
            <input
              type="text"
              className={`${styles.inputCenter} form-control`}
              placeholder="Enter Your Registration Number"
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default main;
