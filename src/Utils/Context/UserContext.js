import React, { createContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import './ReactToastify.css';


const UserContext = createContext({
    setIsLoader: (con) => { },
    messageAlert: (message, type) => { },
    setIsAuth : (status) => { },
    isAuth:String,
    
});

export const UserProvider = ({ children }) => {
    const [isLoader, setIsLoader] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const messageAlert = (message, type = "success") => {
        toast[type](message);
    }
    return <UserContext.Provider value={{
        setIsLoader: setIsLoader,
        messageAlert: messageAlert,
        setIsAuth: setIsAuth,
        isAuth:isAuth
    }} >

        <Backdrop
            sx={{ color: '#fff', zIndex: 9999 }}
            open={isLoader}
        >
            <CircularProgress color="inherit" />

        </Backdrop>
        <ToastContainer />
        {children}
    </UserContext.Provider>



}

export default UserContext;