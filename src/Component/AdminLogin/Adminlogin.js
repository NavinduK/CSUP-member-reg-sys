import React from 'react'
import styles from './Adminlogin.module.scss';
import { useLocation } from "react-router-dom";

function Adminlogin() {
	const location = useLocation();
    const name = location.state.name;
	
    return (
        <div>
    <div className="container text-center" >
      <div className={`${styles.wrapCenter} row justify-content-center align-content-center`} >
        <div className="col ">
          <h3>Hello, {name}</h3>
          <form>
			<p>Enter your login passowrd to continue to the Admin Panel</p>
            <input
              type="passowrd"
              className={`${styles.inputCenter} form-control`}
              placeholder="Enter Your Login Password"
            />
            <input className="btn btn-primary" type="Verify" value="Verify" />
          </form>
        </div>
      </div>
    </div>  


        </div>
    )
}

export default Adminlogin
