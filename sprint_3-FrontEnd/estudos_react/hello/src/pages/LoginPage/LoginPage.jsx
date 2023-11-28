import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';

const LoginPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <>
            <h1>Login Page</h1>
            <span>{theme}</span>
        </>
    );
};

export default LoginPage;