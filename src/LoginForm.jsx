import React from 'react';
import { TextField, Button, Card, CardContent, Typography, Link } from '@mui/material';

function LoginForm({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add real validation/auth logic here
    onLogin(); // 🔐 this will trigger navigation to /home
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 10, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign In
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Link href="/register" underline="hover">
            Create one
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

// const mainStyle = {
//   width: "100%",
//   height: "1022px",
//   backgroundColor: "#D7D7D7",
//   position: "relative",
//   overflow: "hidden",
// }

// const myPic = {
//   width: "60%",
//   height: 1374,
//   backgroundColor: "black",
//   position: "absolute",
//   right: -90,
//   transform: "rotate(9.67deg)",
//   top: -90,
//   zIndex: 0,
// }

// const app = {
//   width: "100vw",
//   display: "flex",
//   backgroundColor: "#D7D7D7",
//   flexDirection: "column",
//   alignItems: "center",
// }

// const contact = {
//   height: 46,
//   width: 147,
//   borderRadius: 23,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "black",
//   backgroundColor: "white",
//   fontSize: 15,
// }


export default LoginForm;