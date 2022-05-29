import React, { useState } from "react";
// import SimpleComponent from "./simpleComponent";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    // const isAuth = !!localStorage.getItem("user");
    const handleLogin = () => {
        localStorage.setItem("user", "token");
        setIsAuth(prevState => !prevState);
    };
    console.log(handleLogin);
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuth(prevState => !prevState);
    };
    console.log(handleLogout);
    return (
        <CardWrapper>
            <Component onLogin={handleLogin} onLogOut={handleLogout} isAuth={isAuth} {...props}/>
        </CardWrapper>
    );
};

export default withFunctions;

// const onLogin = () => {
    //     localStorage.setItem("auth", "auth");
    // };
    // const onLogOut = () => {
    //     localStorage.removeItem("auth");
    // };
