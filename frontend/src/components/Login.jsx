import React, { useEffect, useRef, useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Login() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const { login, currentUser } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("Failed to log in");
    }
  }

  const defaultTheme = createTheme();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  // console.log(emailRef.current.value)
  // console.log(passwordRef.current.value)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Typography component="h1" variant="h2" style={{marginBottom:'80px',fontFamily: "Nunito Sans, sans-serif",}}><span style={{color:'#7289da'}}>Live</span>Link</Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              autoFocus
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='forgot-password' >Forgot Password?</Link>
              </Grid>
              <Grid item>
                <Link to='/signup'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
