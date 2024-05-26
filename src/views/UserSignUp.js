import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { userRegister } from '../utils/api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid aliceblue',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

function UserSignUp({ openModal, setOpenModal }) {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    phoneNo: '',
    email: '',
    password: '',
    role: '',
  });

  const handleClose = () => {
    setOpenModal(false);
    clear();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const payload = {
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      email: formValues.email,
      phone: formValues.phoneNo,
      role: formValues.role,
      password: formValues.password
    }
    try {
      const response = await userRegister(payload);
      if (response.status === 200) {
        const response = await userRegister(payload);
        if (response.status === 200) {

        }
        handleClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clear = () => {
    setFormValues({
      firstName: '',
      lastName: '',
      phoneNo: '',
      email: '',
      password: '',
      role: '',
    })
  }

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
    >
      <Box sx={style}>
        <div>
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
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone No"
              name="phoneNo"
              value={formValues.phoneNo}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              select
              margin="normal"
              label="Role"
              name="role"
              value={formValues.role}
              onChange={handleChange}
              variant="outlined"
              required
            >
              <MenuItem value="seller">Seller</MenuItem>
              <MenuItem value="buyer">Buyer</MenuItem>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default UserSignUp;