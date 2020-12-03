import React from 'react'
import styles from "./thankyou.module.scss";



function thankyou() {
    return (
        <div className="container text-center" >
        <div className={`${styles.wrapCenter} row justify-content-center align-content-center`} >
          <div className="col ">
            <h1>THANKYOU FOR BEING WITH CSUP</h1>
            <h3>Your request reviewing by Admin</h3>
              <form className ={`${styles.innerclass}`}>
                  <h4 className ={`${styles.innertext}`}>To update your details click the Update button .....</h4>
              <input className="btn btn-primary" type="Submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
    )
}

export default thankyou;
