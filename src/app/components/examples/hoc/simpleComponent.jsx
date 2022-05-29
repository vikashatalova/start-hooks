import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-secondary" onClick={onLogOut}>
            Выйти из системы
        </button>
    ) : (
        <button className="btn btn-primary" onClick={onLogin}>
            Войти
        </button>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};

export default SimpleComponent;

// const LoginOut = () => {
    //     return (
    //         <>
    //             <h1>Content</h1>
    //             <button className="btn btn-secondary" onClick={onLogOut}>Выйти из системы</button>
    //         </>
    //     );
    // };
    // const Login = () => {
    //     return (
    //         <>
    //             <h1>Systems</h1>
    //             <button className="btn btn-primary" onClick={onLogin}>Войти</button>
    //         </>
    //     );
    // };
    // return (
    //     <>
    //         {!isAuth ? <Login/> : <LoginOut/>}
    //     </>
    // );
