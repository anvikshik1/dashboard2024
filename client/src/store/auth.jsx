import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]= useState("");
    const [services,setServices]= useState("");
    

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token",serverToken)
    }

    let isLoggerIn = !token;

    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem("token")
    }
    // JWT authentication - to get logged in user data
    const useAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
            method:"GET",
            headers:{
                Authorization: `Bearer ${token}`,
            },
        });
        if(response.ok){
            const data = await response.json();
            console.log("get data",data.userData);
            setUser(data.userData);
        }
        } catch (error) {
            console.log(error);
        }
    }

    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service",{
            method:"GET",
        });
        if(response.ok){
            const data = await response.json();
            setServices(data.response);
        }
        } catch (error) {
            console.log(`services frontend errors: ${error}`);
        }
    }

    useEffect(()=>{
        getServices();
        useAuthentication();
    },[])

    return <AuthContext.Provider value={{isLoggerIn,storetokenInLS,LogoutUser,user,services}}>
        {children}
        </AuthContext.Provider>
}

export const useAuth = () => {
    const useAuthContext =  useContext(AuthContext);
    if(!useAuthContext){
        throw new Error("useAuth use outside of the privider")
    }
    return useAuthContext;
}