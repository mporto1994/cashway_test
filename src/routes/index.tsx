import { useEffect, useState } from "react"
import { render } from "react-dom";
import {  Switch, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

function Routes () {
    // const [auth, setAuth] = useState(false)
    
    // useEffect(()=>{
    //     const token:string = JSON.parse(localStorage.getItem("@CashWay") ||"") || ""
    //     if(!!token){
    //         return (setAuth(true));
    //     }
    // }, [auth])
    return(
        <Switch>
            <Route exact path = "/">
                <Login/>
            </Route>
            <Route exact path = "/user">
                <Dashboard/>
            </Route>
        </Switch>
    )
}
export default Routes;