import React from "react";
import My from "./test1";
import Img from "./zoro 2.jpg";
class MyClass extends React.Component
{
    render()
    {
        return<h2>KING OF THE HELL</h2>
    }
}
function Name() {
    return(
        <h2>MUGIWARA NOU KAIZOKU </h2>
    )
}
function Kk() {
    return(
        <>
        <h3>NOTHING HAPPENDED !!!!!!!!!!!!!!!!!!!!</h3>
        <img src="./" alt="" />
        <img src={Img} className="App-logo" alt="logo" />
        </>
    )
}
export {MyClass,Name,Kk};