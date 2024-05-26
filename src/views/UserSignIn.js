import { Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { userLogin } from '../utils/api';
import { successMessage } from '../Toast';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid aliceblue',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

function UserSignIn({ openModal, setOpenModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password
    }
    try {
      const user_response = await userLogin(payload);
      if (user_response?.status === 200) {
        localStorage.setItem('user_role', user_response.data.data.role);
        localStorage.setItem('user_id', user_response.data.data.id);
        successMessage('Login Successful');
      }
      handleClose()
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    clear();
  }

  const clear = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" component="h2">
          Sign In
        </Typography>

        <form onSubmit={onHandleLogin}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default UserSignIn;