import React from "react";

const Navbar = () => {
	const name = JSON.parse(localStorage.getItem('token')).name;
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container justify-content-between">
                    <h4 className="mb-0 navbar-brand">Admin Dashboard</h4>
                    <div>
                        <p className="mb-0 navbar-brand">{name}</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
