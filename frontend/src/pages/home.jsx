// import React, { useContext, useState } from 'react'
// import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../contexts/AuthContext';

// function HomeComponent() {


//     let navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");


//     const {addToUserHistory} = useContext(AuthContext);
//     let handleJoinVideoCall = async () => {
//         await addToUserHistory(meetingCode)
//         navigate(`/${meetingCode}`)
//     }

//     return (
//         <>

//             <div className="navBar">

//                 <div style={{ display: "flex", alignItems: "center" }}>

//                     <h2>MERN_MEET</h2>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () => {
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>

//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
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

//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }


// export default withAuth(HomeComponent)


import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
  Grid,
  TextField,
} from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { AuthContext } from '../contexts/AuthContext'

// Dark theme with orange accents
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff8c00' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
})

function HomeComponent() {
  const navigate = useNavigate()
  const [meetingCode, setMeetingCode] = useState('')
  const { addToUserHistory } = useContext(AuthContext)

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode)
    navigate(`/${meetingCode}`)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top Navigation */}
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ px: 3, py: 2 }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            
        <Typography variant="h6"><a href='/'style={{
            textDecoration: 'none',
            color: 'inherit',
             }}>MERN-MEET</a></Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                onClick={() => navigate('/history')}
              >
                <RestoreIcon />
              </IconButton>
              <Typography sx={{ ml: 1 }}>
            <a href="/History" 
            style={{
            textDecoration: 'none',
            color: 'inherit',
             }}
            >
                History
            </a>
        </Typography>

              <Button
                variant="outlined"
                color="primary"
                sx={{ ml: 2 }}
                onClick={() => {
                  localStorage.removeItem('token')
                  navigate('/auth')
                }}
              >
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 6 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Panel */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Providing Quality Video Calls,
                <br />
                Just Like Quality Education
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <TextField
                  fullWidth
                  placeholder="Enter Meeting Code"
                  value={meetingCode}
                  onChange={(e) => setMeetingCode(e.target.value)}
                  InputProps={{
                    sx: {
                      backgroundColor: 'background.paper',
                      borderRadius: 1,
                      color: '#fff',
                    },
                  }}
                  InputLabelProps={{ sx: { color: '#aaa' } }}
                />
                <Button
                  variant="contained"
                  onClick={handleJoinVideoCall}
                  sx={{
                    px: 4,
                    background: 'linear-gradient(to right, #ff8c00, #ff6f00)',
                    fontWeight: 'bold',
                    '&:hover': {
                      background: 'linear-gradient(to right, #ff6f00, #ff8c00)',
                    },
                  }}
                >
                  Join
                </Button>
              </Box>
            </Grid>

            {/* Right Panel */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/logo3.png"
                alt="MERN Meet Logo"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  borderRadius: 2,
                  boxShadow: 3,
                  mx: 'auto',
                  display: 'block',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default withAuth(HomeComponent)
