// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { AuthContext } from "../contexts/AuthContext";
// import { Snackbar } from "@mui/material";

// const defaultTheme = createTheme();

// export default function Authentication() {
//     const [username, setUsername] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [name, setName] = React.useState("");
//     const [error, setError] = React.useState("");
//     const [message, setMessage] = React.useState("");
//     const [formState, setFormState] = React.useState(0);
//     const [open, setOpen] = React.useState(false);

//     const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     const handleAuth = async () => {
//         try {
//             if (formState === 0) {
//                 let result = await handleLogin(username, password);
//                 console.log(result);
//                 setError("");
//             } else if (formState === 1) {
//                 let result = await handleRegister(name, username, password);
//                 console.log(result);
//                 setUsername("");
//                 setPassword("");
//                 setName("");
//                 setMessage(result?.message || "Registration successful!");
//                 setOpen(true);
//                 setError("");
//                 setFormState(0);
//             }
//         } catch (err) {
//             console.error("Auth Error:", err);
//             setError(err.response?.data?.message || "Something went wrong");
//         }
//     };

//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <Grid container component="main" sx={{ height: "100vh" }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     sx={{
//                         backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
//                         backgroundRepeat: "no-repeat",
//                         backgroundColor: (t) =>
//                             t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                     }}
//                 />
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                             <LockOutlinedIcon />
//                         </Avatar>

//                         <div>
//                             <Button variant={formState === 0 ? "contained" : ""} onClick={() => setFormState(0)}>
//                                 Sign In
//                             </Button>
//                             <Button variant={formState === 1 ? "contained" : ""} onClick={() => setFormState(1)}>
//                                 Sign Up
//                             </Button>
//                         </div>

//                         <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={(e) => e.preventDefault()}>
//                             {formState === 1 && (
//                                 <TextField
//                                     margin="normal"
//                                     required
//                                     fullWidth
//                                     id="name"
//                                     label="Full Name"
//                                     name="name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                 />
//                             )}

//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Username"
//                                 name="username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 id="password"
//                             />

//                             <Typography color="error" sx={{ mt: 1 }}>
//                                 {error}
//                             </Typography>

//                             <Button
//                                 type="button"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                                 onClick={handleAuth}
//                             >
//                                 {formState === 0 ? "Login" : "Register"}
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Snackbar
//                 open={open}
//                 autoHideDuration={4000}
//                 message={message}
//                 onClose={() => {
//                     setOpen(false);
//                     setMessage(""); // Clear message when Snackbar closes
//                 }}
//             />
//         </ThemeProvider>
//     );
// }
  //SOMETHING GOOD
// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { AuthContext } from "../contexts/AuthContext";
// import { Snackbar, Slide } from "@mui/material";

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#FFA500", // Light Orange
//         },
//         secondary: {
//             main: "#121212", // Dark Black
//         },
//         background: {
//             default: "#121212", // Black Background
//         },
//         text: {
//             primary: "#ffffff", // White Text
//             secondary: "#FFA500", // Light Orange Text
//         },
//     },
//     typography: {
//         fontFamily: "'Poppins', sans-serif",
//     },
// });

// export default function Authentication() {
//     const [username, setUsername] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [name, setName] = React.useState("");
//     const [error, setError] = React.useState("");
//     const [message, setMessage] = React.useState("");
//     const [formState, setFormState] = React.useState(0);
//     const [open, setOpen] = React.useState(false);

//     const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     const handleAuth = async () => {
//         try {
//             if (formState === 0) {
//                 let result = await handleLogin(username, password);
//                 setError("");
//             } else {
//                 let result = await handleRegister(name, username, password);
//                 setUsername("");
//                 setPassword("");
//                 setName("");
//                 setMessage(result?.message || "Registration successful!");
//                 setOpen(true);
//                 setError("");
//                 setFormState(0);
//             }
//         } catch (err) {
//             setError(err.response?.data?.message || "Something went wrong");
//         }
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container component="main" sx={{ height: "100vh", backgroundColor: "background.default" }}>
//                 <CssBaseline />
//                 <Grid item xs={12} sm={8} md={6} component={Paper} elevation={10} sx={{ borderRadius: 5, p: 4, mx: "auto", mt: 5, bgcolor: "secondary.main", color: "text.primary" }}>
//                     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                         <Avatar sx={{ m: 2, bgcolor: "primary.main", width: 60, height: 60 }}>
//                             <LockOutlinedIcon fontSize="large" />
//                         </Avatar>
//                         <Typography component="h1" variant="h4" fontWeight="bold" sx={{ mb: 3, color: "text.primary" }}>
//                             {formState === 0 ? "Welcome Back!" : "Join Us"}
//                         </Typography>
//                         <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
//                             <Button variant={formState === 0 ? "contained" : "outlined"} onClick={() => setFormState(0)} size="large" sx={{ color: "text.primary", borderColor: "primary.main" }}>
//                                 Sign In
//                             </Button>
//                             <Button variant={formState === 1 ? "contained" : "outlined"} onClick={() => setFormState(1)} size="large" sx={{ color: "text.primary", borderColor: "primary.main" }}>
//                                 Sign Up
//                             </Button>
//                         </Box>
//                         <Box component="form" noValidate sx={{ width: "100%" }}>
//                             {formState === 1 && (
//                                 <TextField margin="normal" required fullWidth label="Full Name" value={name} onChange={(e) => setName(e.target.value)} InputLabelProps={{ style: { color: "text.secondary" } }} sx={{ input: { color: "text.primary" } }} />
//                             )}
//                             <TextField margin="normal" required fullWidth label="Username" value={username} onChange={(e) => setUsername(e.target.value)} InputLabelProps={{ style: { color: "text.secondary" } }} sx={{ input: { color: "text.primary" } }} />
//                             <TextField margin="normal" required fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} InputLabelProps={{ style: { color: "text.secondary" } }} sx={{ input: { color: "text.primary" } }} />
//                             {error && (
//                                 <Typography color="error" sx={{ mt: 1, fontSize: "0.9rem" }}>
//                                     {error}
//                                 </Typography>
//                             )}
//                             <Button fullWidth variant="contained" sx={{ mt: 3, py: 1.5, fontSize: "1rem", borderRadius: 3, bgcolor: "primary.main", color: "secondary.main" }} onClick={handleAuth}>
//                                 {formState === 0 ? "Login" : "Register"}
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>
//             <Snackbar open={open} autoHideDuration={4000} message={message} TransitionComponent={Slide} onClose={() => {
//                 setOpen(false);
//                 setMessage("");
//             }} />
//         </ThemeProvider>
//     );
// }

// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Snackbar } from "@mui/material";

// const darkTheme = createTheme({
//     palette: {
//         mode: "dark",
//         primary: {
//             main: "#FFA726", // Professional light orange shade
//         },
//         background: {
//             default: "#0D0D0D", // Deep black
//             paper: "#181818", // Slightly lighter black
//         },
//         text: {
//             primary: "#ffffff",
//             secondary: "#B0B0B0",
//         },
//     },
//     typography: {
//         fontFamily: "Inter, sans-serif",
//         h5: {
//             fontWeight: 600,
//             letterSpacing: "0.5px",
//         },
//     },
// });

// export default function Authentication() {
//     const [username, setUsername] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [name, setName] = React.useState("");
//     const [error, setError] = React.useState("");
//     const [message, setMessage] = React.useState("");
//     const [formState, setFormState] = React.useState(0);
//     const [open, setOpen] = React.useState(false);

//     const handleAuth = async () => {
//         try {
//             if (formState === 0) {
//                 console.log("Login successful");
//                 setError("");
//             } else if (formState === 1) {
//                 console.log("Registration successful");
//                 setMessage("Registration successful!");
//                 setOpen(true);
//                 setError("");
//                 setFormState(0);
//             }
//         } catch (err) {
//             setError("Something went wrong");
//         }
//     };

//     return (
//         <ThemeProvider theme={darkTheme}>
//             <Grid container component="main" sx={{ height: "100vh" }}>
//                 {/* Left Side - Background */}
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     sx={{
//                         background: "linear-gradient(to bottom, #0d0d0d, #1c1c1c)",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Typography
//                         variant="h3"
//                         sx={{
//                             fontWeight: "bold",
//                             color: "#FFA726",
//                             textAlign: "center",
//                             opacity: 0.9,
//                         }}
//                     >
//                         Welcome to MernMeet
//                     </Typography>
//                 </Grid>

//                 {/* Right Side - Form */}
//                 <Grid
//                     item
//                     xs={12}
//                     sm={8}
//                     md={5}
//                     component={Paper}
//                     elevation={8}
//                     sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         backgroundColor: "#181818",
//                         padding: "3rem",
//                         borderRadius: "10px",
//                         boxShadow: "0px 4px 10px rgba(255, 167, 38, 0.2)",
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: "#FFA726" }}>
//                         <LockOutlinedIcon />
//                     </Avatar>

//                     <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", mt: 1 }}>
//                         {formState === 0 ? "Sign In" : "Sign Up"}
//                     </Typography>

//                     <Box component="form" sx={{ mt: 3, width: "100%" }}>
//                         {formState === 1 && (
//                             <TextField
//                                 fullWidth
//                                 label="Full Name"
//                                 variant="outlined"
//                                 margin="normal"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 InputLabelProps={{ style: { color: "#B0B0B0" } }}
//                                 sx={{
//                                     "& .MuiOutlinedInput-root": {
//                                         "& fieldset": { borderColor: "#FFA726" },
//                                         "&:hover fieldset": { borderColor: "#FFA726" },
//                                     },
//                                     input: { color: "white" },
//                                 }}
//                             />
//                         )}

//                         <TextField
//                             fullWidth
//                             label="Username"
//                             variant="outlined"
//                             margin="normal"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             InputLabelProps={{ style: { color: "#B0B0B0" } }}
//                             sx={{
//                                 "& .MuiOutlinedInput-root": {
//                                     "& fieldset": { borderColor: "#FFA726" },
//                                     "&:hover fieldset": { borderColor: "#FFA726" },
//                                 },
//                                 input: { color: "white" },
//                             }}
//                         />
//                         <TextField
//                             fullWidth
//                             label="Password"
//                             variant="outlined"
//                             type="password"
//                             margin="normal"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             InputLabelProps={{ style: { color: "#B0B0B0" } }}
//                             sx={{
//                                 "& .MuiOutlinedInput-root": {
//                                     "& fieldset": { borderColor: "#FFA726" },
//                                     "&:hover fieldset": { borderColor: "#FFA726" },
//                                 },
//                                 input: { color: "white" },
//                             }}
//                         />

//                         {error && (
//                             <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
//                                 {error}
//                             </Typography>
//                         )}

//                         <Button
//                             fullWidth
//                             variant="contained"
//                             sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 backgroundColor: "#FFA726",
//                                 "&:hover": { backgroundColor: "#e68900" },
//                                 fontWeight: "bold",
//                                 borderRadius: "6px",
//                                 textTransform: "none",
//                             }}
//                             onClick={handleAuth}
//                         >
//                             {formState === 0 ? "Login" : "Register"}
//                         </Button>

//                         <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//                             <Button
//                                 onClick={() => setFormState(0)}
//                                 sx={{
//                                     color: formState === 0 ? "#FFA726" : "#B0B0B0",
//                                     fontWeight: "bold",
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Sign In
//                             </Button>
//                             <Button
//                                 onClick={() => setFormState(1)}
//                                 sx={{
//                                     color: formState === 1 ? "#FFA726" : "#B0B0B0",
//                                     fontWeight: "bold",
//                                     textTransform: "none",
//                                 }}
//                             >
//                                 Sign Up
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Snackbar
//                 open={open}
//                 autoHideDuration={3000}
//                 message={message}
//                 onClose={() => {
//                     setOpen(false);
//                     setMessage("");
//                 }}
//             />
//         </ThemeProvider>
//     );
// }

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#FFA726" },
        background: { default: "#0D0D0D", paper: "#181818" },
        text: { primary: "#FFFFFF", secondary: "#B0B0B0" },
    },
    typography: { fontFamily: "Inter, sans-serif", h5: { fontWeight: 600, letterSpacing: "0.5px" } },
});

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    const handleAuth = async () => {
        if (formState === 1) { // Registration
            if (!name || !username || !password) {
                setError("All fields are required");
                return;
            }
        } else { // Login
            if (!username || !password) {
                setError("All fields are required");
                return;
            }
        }

        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);
                console.log(result);
                setError("");
            } else if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setPassword("");
                setName("");
                setMessage(result?.message || "Registration successful!");
                setOpen(true);
                setError("");
                setFormState(0);
            }
        } catch (err) {
            console.error("Auth Error:", err);
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                {/* Left Side - Branding */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        background: "linear-gradient(to bottom, #0D0D0D, #1C1C1C)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold", color: "#FFA726", textAlign: "center" }}>
                        Welcome to MernMeet
                    </Typography>
                </Grid>

                {/* Right Side - Form */}
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#181818",
                        padding: "3rem",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(255, 167, 38, 0.2)",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "#FFA726" }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", mt: 1 }}>
                        {formState === 0 ? "Sign In" : "Sign Up"}
                    </Typography>

                    <Box component="form" sx={{ mt: 3, width: "100%" }}>
                        {formState === 1 && (
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputLabelProps={{ style: { color: "#B0B0B0" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: "#FFA726" },
                                        "&:hover fieldset": { borderColor: "#FFA726" },
                                    },
                                    input: { color: "white" },
                                }}
                            />
                        )}

                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            InputLabelProps={{ style: { color: "#B0B0B0" } }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#FFA726" },
                                    "&:hover fieldset": { borderColor: "#FFA726" },
                                },
                                input: { color: "white" },
                            }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputLabelProps={{ style: { color: "#B0B0B0" } }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "#FFA726" },
                                    "&:hover fieldset": { borderColor: "#FFA726" },
                                },
                                input: { color: "white" },
                            }}
                        />

                        {error && (
                            <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
                                {error}
                            </Typography>
                        )}

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: "#FFA726",
                                "&:hover": { backgroundColor: "#e68900" },
                                fontWeight: "bold",
                                borderRadius: "6px",
                                textTransform: "none",
                            }}
                            onClick={handleAuth}
                        >
                            {formState === 0 ? "Login" : "Register"}
                        </Button>

                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <Button
                                onClick={() => setFormState(0)}
                                sx={{
                                    color: formState === 0 ? "#FFA726" : "#B0B0B0",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                }}
                            >
                                Sign In
                            </Button>
                            <Button
                                onClick={() => setFormState(1)}
                                sx={{
                                    color: formState === 1 ? "#FFA726" : "#B0B0B0",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                message={message}
                onClose={() => {
                    setOpen(false);
                    setMessage("");
                }}
            />
        </ThemeProvider>
    );
}
