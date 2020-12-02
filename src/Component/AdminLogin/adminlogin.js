import React from 'react'
import styles from './adminlogin.module.scss';

function adminlogin() {
    return (
        <div>
    <div className="container text-center" >
      <div className={`${styles.wrapCenter} row justify-content-center align-content-center`} >
        <div className="col ">
          <h3>Admin  Login</h3>
          <form>
            <input
              type="passowrd"
              className={`${styles.inputCenter} form-control`}
              placeholder="Enter Your Registration Number"
            />
            <input className="btn btn-primary" type="Verify" value="Verify" />
          </form>
        </div>
      </div>
    </div>  


        </div>
    )
}

export default adminlogin
