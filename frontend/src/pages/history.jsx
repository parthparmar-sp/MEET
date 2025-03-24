// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../contexts/AuthContext'
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import HomeIcon from '@mui/icons-material/Home';

// import { IconButton } from '@mui/material';
// export default function History() {


//     const { getHistoryOfUser } = useContext(AuthContext);

//     const [meetings, setMeetings] = useState([])


//     const routeTo = useNavigate();

//     useEffect(() => {
//         const fetchHistory = async () => {
//             try {
//                 const history = await getHistoryOfUser();
//                 setMeetings(history);
//             } catch {
//                 // IMPLEMENT SNACKBAR
//             }
//         }

//         fetchHistory();
//     }, [])

//     let formatDate = (dateString) => {

//         const date = new Date(dateString);
//         const day = date.getDate().toString().padStart(2, "0");
//         const month = (date.getMonth() + 1).toString().padStart(2, "0")
//         const year = date.getFullYear();

//         return `${day}/${month}/${year}`

//     }

//     return (
//         <div>

//             <IconButton onClick={() => {
//                 routeTo("/home")
//             }}>
//                 <HomeIcon />
//             </IconButton >
//             {
//                 (meetings.length !== 0) ? meetings.map((e, i) => {
//                     return (

//                         <>


//                             <Card key={i} variant="outlined">


//                                 <CardContent>
//                                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                         Code: {e.meetingCode}
//                                     </Typography>

//                                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                                         Date: {formatDate(e.date)}
//                                     </Typography>

//                                 </CardContent>


//                             </Card>


//                         </>
//                     )
//                 }) : <></>

//             }

//         </div>
//     )
// }
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                console.log("Fetched History:", history); // Debugging
                if (history && Array.isArray(history)) {
                    setMeetings(history);
                } else {
                    console.error("Error: History is not an array.");
                }
            } catch (error) {
                console.error("Failed to fetch history:", error);
            }
        };

        fetchHistory();
    }, [getHistoryOfUser]); // Ensures it updates when context changes

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div style={{ padding: "20px" }}>
            {/* Home Button */}
            <IconButton onClick={() => routeTo("/home")} sx={{ marginBottom: "20px" }}>
                <HomeIcon sx={{ fontSize: 30, color: "#FF9839" }} />
            </IconButton>

            {/* Meeting History Cards */}
            {meetings?.length > 0 ? (
                <Grid container spacing={3}>
                    {meetings.map((e, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Card 
                                variant="outlined" 
                                sx={{ padding: "15px", backgroundColor: "#222", color: "#fff", boxShadow: 3 }}
                            >
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: "bold", color: "#FF9839" }}>
                                        Meeting Code: {e.meetingCode}
                                    </Typography>
                                    <Typography sx={{ mt: 1, color: "lightgray" }}>
                                        Date: {formatDate(e.date)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography sx={{ textAlign: "center", marginTop: 3, color: "gray", fontSize: "18px" }}>
                    No meeting history found.
                </Typography>
            )}
        </div>
    );
}

