// import React from 'react'
// import "../App.css"
// import { Link, useNavigate } from 'react-router-dom'
// export default function LandingPage() {


//     const router = useNavigate();

//     return (
//         <div className='landingPageContainer'>
//             <nav>
//                 <div className='navHeader'>
//                     <h2>MERN-MEET</h2>
//                 </div>
//                 <div className='navlist'>
//                     <p onClick={() => {
//                         router("/aljk23")
//                     }}>Join as Guest</p>
//                     <p onClick={() => {
//                         router("/auth")

//                     }}>Register</p>
//                     <div onClick={() => {
//                         router("/auth")

//                     }} role='button'>
//                         <p>Login</p>
//                     </div>
//                 </div>
//             </nav>


//             <div className="landingMainContainer">
//                 <div>
//                     <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

//                     <p>Cover a distance by MERN-MEET</p>
//                     <div role='button'>
//                         <Link to={"/auth"}>Get Started</Link>
//                     </div>
//                 </div>
//                 <div>

//                     <img src="/mobile.png" alt="" />

//                 </div>
//             </div>



//         </div>
//     )
// }
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className="landingPageContainer">
            {/* Navbar */}
            <nav className="navBar">
                <div className="navHeader">
                    <h2>MERN-MEET</h2>
                </div>
                <div className="navList">
                    <button className="navButton" onClick={() => router("/aljk23")}>Join as Guest</button>
                    <button className="navButton" onClick={() => router("/auth")}>Register</button>
                    <button className="navButton primaryBtn" onClick={() => router("/auth")}>Login</button>
                </div>
            </nav>

            {/* Main Section */}
            <div className="landingMainContainer">
                <div className="landingText">
                    <h1>
                        <span className="highlight">Connect</span> with your loved Ones
                    </h1>
                    <p>Cover a distance with MERN-MEET</p>
                    <Link to="/auth" className="getStartedBtn">Get Started</Link>
                </div>
                <div className="landingImage">
                    <img src="/mobile.png" alt="MERN-MEET Preview" />
                </div>
            </div>
        </div>
    );
}
