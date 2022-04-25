import { createContext,useState } from "react";
export const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
 const [isAuth,setIsAuth]=useState({});

 const handleAuth=(state)=>{
     setIsAuth(state)
 }
 return (
     <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
 )
}