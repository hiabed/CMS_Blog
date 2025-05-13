import React from 'react';
import { TextField, Button, Card, CardContent, Typography, Link } from '@mui/material';

function LoginForm({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
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

export default LoginForm;