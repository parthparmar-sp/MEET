// import React, { useContext, useState } from 'react';
// import withAuth from '../utils/withAuth';
// import { useNavigate } from 'react-router-dom';
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../contexts/AuthContext';

// function HomeComponent() {
//     let navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");
//     const [error, setError] = useState(null);

//     const { addToUserHistory } = useContext(AuthContext);
    
//     let handleJoinVideoCall = async () => {
//         if (!meetingCode.trim()) {
//             setError("Please enter a valid meeting code.");
//             return;
//         }
//         setError(null);
        
//         try {
//             await addToUserHistory(meetingCode);
//             navigate(`/${meetingCode}`);
//         } catch (err) {
//             console.error("Error joining meeting:", err);
//             setError("Failed to join the meeting. Please try again.");
//         }
//     };

//     return (
//         <>
//             <div className="navBar"> 
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <h2>MERN-MEET</h2>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={() => navigate("/history")}>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>
//                     <Button onClick={() => {
//                         localStorage.removeItem("token");
//                         navigate("/auth");
//                     }}>
//                         Logout
//                     </Button>
//                 </div>
//             </div>

//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call Just Like Quality Education</h2>
//                         <div style={{ display: 'flex', gap: "10px" }}>
//                             <TextField 
//                                 onChange={e => setMeetingCode(e.target.value)} 
//                                 id="outlined-basic" 
//                                 label="Meeting Code" 
//                                 variant="outlined" 
//                                 error={!!error} 
//                                 helperText={error || ""} 
//                             />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default withAuth(HomeComponent);
import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import HomeIcon from "@mui/icons-material/Home";  // ✅ Import Home Icon
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const [error, setError] = useState(null);

    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        if (!meetingCode.trim()) {
            setError("Please enter a valid meeting code.");
            return;
        }
        setError(null);

        try {
            await addToUserHistory(meetingCode);
            navigate(`/${meetingCode}`);
        } catch (err) {
            console.error("Error joining meeting:", err);
            setError("Failed to join the meeting. Please try again.");
        }
    };

    return (
        <>
            {/* ✅ Navbar */}
            <div className="navBar" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                backgroundColor: "#111", // Dark background for sleek look
                boxShadow: "0px 2px 10px rgba(255, 152, 57, 0.3)"
            }}>
                {/* ✅ Logo (Navigates to Home) */}
                <h2 style={{ color: "#FF9839", fontWeight: "bold", cursor: "pointer" }} onClick={() => navigate("/home")}>
                    MERN-MEET
                </h2>

                {/* ✅ Right Section (Home, History, Logout) */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    
                    {/* ✅ Home Icon (Navigates to Landing Page) */}
                    <IconButton onClick={() => navigate("/")} sx={{ color: "#FF9839", transition: "0.3s", ":hover": { color: "#e68530" } }}>
                        <HomeIcon />
                    </IconButton>

                    {/* ✅ History Button */}
                    <div 
                        style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            cursor: "pointer", 
                            padding: "8px 12px", 
                            borderRadius: "8px", 
                            backgroundColor: "#222", 
                            transition: "0.3s"
                        }} 
                        onClick={() => navigate("/history")}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#333"}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#222"}
                    >
                        <IconButton sx={{ color: "#FF9839" }}>
                            <RestoreIcon />
                        </IconButton>
                        <p style={{ color: "#FF9839", fontSize: "16px", fontWeight: "500", marginLeft: "5px" }}>History</p>
                    </div>

                    {/* ✅ Logout Button */}
                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                        variant="contained"
                        sx={{ 
                            backgroundColor: "#FF9839", 
                            color: "#000", 
                            fontWeight: "bold",
                            padding: "8px 15px",
                            borderRadius: "8px",
                            ":hover": { backgroundColor: "#e68530" } 
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </div>


            {/* ✅ Main Content */}
            <div className="meetContainer" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                padding: "0 5%",
                flexWrap: "wrap"
            }}>
                
                {/* ✅ Left Panel */}
                <div className="leftPanel" style={{
                    flex: "1",
                    maxWidth: "600px",
                    minWidth: "300px",
                    textAlign: "left",
                    marginBottom: "20px",
                    padding: "10px"
                }}>
                    {/* ✅ Updated Sentence Alignment */}
                    <h2 style={{
                        color: "#fff",
                        fontSize: "26px",
                        fontWeight: "bold",
                        lineHeight: "1.4",
                        wordWrap: "break-word",
                        textAlign: "left",
                        marginBottom: "15px"
                    }}>
                        Seamless Video Communication, Just Like a Face-to-Face Experience.
                    </h2>

                    <div style={{
                        display: 'flex',
                        flexDirection: "column",
                        gap: "15px",
                        width: "100%",
                        alignItems: "center"
                    }}>
                        <TextField
                            onChange={(e) => setMeetingCode(e.target.value)}
                            id="outlined-basic"
                            label="Meeting Code"
                            variant="outlined"
                            error={!!error}
                            helperText={error || ""}
                            fullWidth
                            sx={{
                                backgroundColor: "#222",
                                input: { color: "#fff" },
                                label: { color: "#ccc" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#FF9839" },
                                    "&:hover fieldset": { borderColor: "#e68530" },
                                    "&.Mui-focused fieldset": { borderColor: "#FF9839" },
                                },
                            }}
                        />
                        <Button 
                            onClick={handleJoinVideoCall} 
                            variant="contained" 
                            sx={{ backgroundColor: "#FF9839", ":hover": { backgroundColor: "#e68530" } }}
                            fullWidth
                        >
                            Join Meeting
                        </Button>
                    </div>
                </div>

                {/* ✅ Right Panel (Image) */}
                <div className="rightPanel" style={{
                    flex: "1",
                    display: "flex",
                    justifyContent: "center",
                    minWidth: "300px"
                }}>
                    <img src="/logo3.png" alt="MERN-Meet Logo" style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain"
                    }} />
                </div>
            </div>
        </>
    );
}

export default withAuth(HomeComponent);
