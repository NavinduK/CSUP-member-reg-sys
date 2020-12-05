import React, { useState } from "react";
import styles from "./Adminlogin.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "use-http";
import { useForm } from "react-hook-form";

function Adminlogin() {
    const location = useLocation();
    const name = location.state.name;
    const regNo = location.state.regNo;
	const [display, setDisplay] = useState('');

    const { post, response } = useFetch(process.env.REACT_APP_SERVER_BASE_URL);
    const history = useHistory();

    let value = {
        regNo: regNo,
        password:""
    };

    const { handleSubmit, register, errors } = useForm({
        mode: "onBlur",
        defaultValues: value,
    });

    const submitRegNo = async (event) => {
		let event2 = {
			regNo: regNo,
			password: event.password
		};
        console.log(event2);
        await post("/login/admin", event2)
            .then((result) => {
				if (response.ok) {
					if (result.res==="valid") {
						console.log('valid');
						let token = {
							regNo: regNo,
							name: name
						};
						localStorage.setItem('token',JSON.stringify(token));
						history.push('/dashboard');
					}else{
						console.log('not valid')
						setDisplay('show');
					}
				}
            })
            .catch((err) => {
                console.log("error", err);
            });
    };

    return (
        <div>
            <div className="container text-center">
                <div
                    className={`${styles.wrapCenter} row justify-content-center align-content-center`}>
                    <div className="col ">
                        <h3>Hello, {name}</h3>
                        <form onSubmit={handleSubmit(submitRegNo)}>
                            <p>
                                Enter your login password to continue to the
                                Admin Panel
                            </p>
                            <input
                                type="password"
                                name="password"
                                className={`${styles.inputCenter} form-control`}
                                placeholder="Enter Your Login password"
                                aria-invalid={errors.email ? "true" : "false"}
                                ref={register({
                                required: "password is required"
                                })}
                            />
							<input
                                className="btn btn-primary"
                                type="submit"
                                value="Verify"
                            />
							<div className={`row justify-content-center align-content-center`}>
								<div style={{position:'absolute'}} className={`${display} mt-3 alert alert-warning alert-dismissible fade`} role="alert">
								  Login credentials invalid. Try again!
								  <button type="button" className="close" onClick={()=>{setDisplay('')}}>
									<span aria-hidden="true">&times;</span>
								  </button>
								</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adminlogin;
