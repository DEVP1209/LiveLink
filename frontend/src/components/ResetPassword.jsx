import React, { useEffect, useRef, useState } from "react"
import { UserAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
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

export default function ResetPassword() {
    const[email,setEmail]=useState('')
    const {resetPassword,currentUser } = UserAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [resetSent, setResetSent] = useState(false);
    const navigate = useNavigate();
    
    const defaultTheme = createTheme();
  
    async function handleSubmit(e) {
      e.preventDefault()
      try {
        setError("")
        setLoading(true)
        await resetPassword(email);
        setResetSent(true);
      } catch (error) {
        setError("Failed to Send Reset Link")
      }
      setLoading(false)
    }
  
    useEffect(() => {
      if (currentUser) {
        navigate("/dashboard");
      }
    });
  
  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="s">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h2" style={{marginBottom:'50px',fontFamily: "Nunito Sans, sans-serif",}}><span style={{color:'#7289da'}}>Live</span>Link</Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Typography component="h1" variant="h6">
          {error}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={15}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  id="password"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                />
              </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/">
                Back to Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
      )
}
