
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
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div style={{
            backgroundColor: '#121212',
            color: '#fff',
            minHeight: '100vh',
            fontFamily: 'Segoe UI, sans-serif',
            padding: '0 2rem',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 0',
                borderBottom: '1px solid #333'
            }}>
                <h2 style={{ color: '#FF9839', fontSize: '1.8rem', fontWeight: 'bold' }}>MERN-MEET</h2>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <p onClick={() => router("/aljk23")} style={{ cursor: 'pointer' }}>Join as Guest</p>
                    <p onClick={() => router("/auth")} style={{ cursor: 'pointer' }}>Register</p>
                    <div
                        onClick={() => router("/auth")}
                        role='button'
                        style={{
                            backgroundColor: '#FF9839',
                            borderRadius: '8px',
                            padding: '0.4rem 1rem',
                            cursor: 'pointer'
                        }}
                    >
                        <p style={{ margin: 0, color: '#000', fontWeight: 'bold' }}>Login</p>
                    </div>
                </div>
            </nav>

            <div style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '3rem 0',
                gap: '3rem',
                flexWrap: 'wrap'
            }}>
                <div style={{ maxWidth: '500px' }}>
                    <h1 style={{ fontSize: '3rem', lineHeight: '1.3' }}>
                        <span style={{ color: '#FF9839' }}>Connect</span> with your loved Ones
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2rem' }}>
                        Cover a distance with MERN-MEET
                    </p>
                    <Link to={"/auth"} style={{
                        backgroundColor: '#FF9839',
                        color: '#000',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}>
                        Get Started
                    </Link>
                </div>

                <div>
                    <img
                        src="/mobile.png"
                        alt="App Preview"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            animation: 'float 6s ease-in-out infinite'
                        }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 2rem !important;
                    }

                    .text-content {
                        text-align: center;
                    }

                    img {
                        margin: 0 auto;
                    }
                }
            `}</style>
        </div>
    );
}
