import React, { useEffect, useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { UserAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function ResetPassword() {
    const emailRef = useRef()
    const {resetPassword,currentUser } = UserAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [resetSent, setResetSent] = useState(false);
    const navigate = useNavigate();
    
  
    async function handleSubmit(e) {
      e.preventDefault()
      try {
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value);
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
        <>
          <Card>
            <Card.Body>
            {resetSent ? 
        <p>Password reset email sent. Check your email.</p>
       : <p></p>}
              <h2 className="text-center mb-4">Reset Password</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                
                <Button disabled={loading} className="w-100" type="submit">
                  Send Link
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
             <Link to="/signup">Log In</Link>
          </div>
        </>
      )
}
