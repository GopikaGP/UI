import {useState, useEffect, useContext, createContext} from 'react'
import axios from 'axios';

const AuthContext = createContext();
const AuthProvider = ({children}) => {
     
    const[auth,setAuth] = useState({
        user:null,
        tokken:"",
    });

    axios.defaults.headers.common["Authorization"] = auth?.token;
  console.log(
    "Authorization header:",
    axios.defaults.headers.common["Authorization"]);

    useEffect(()=>{
      const data = localStorage.getItem("auth");
      console.log("localStorage data:",data);

      if(data){
        const parseData = json.parse(data);
        setAuth({
          ...auth,
          user:parseData.user,
          token: parseData.token,
        });
      }
    }, []);
    return (
      <AuthContext.Provider value={[auth,setAuth]}>
        {children}
      </AuthContext.Provider>
    )
    
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};