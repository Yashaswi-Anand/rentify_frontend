import React, { useState } from 'react';
import { Box, Button, MenuItem, Modal, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

function AddNewProperties({ openModal, setOpenModal }) {
  const [formValues, setFormValues] = useState({
    state: '',
    region: '',
    apartmentType: '',
    likes: '',
    nearby: '',
    price: '',
  });

  const handleClose = () => setOpenModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

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
          Add New Property
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            select
            margin="normal"
            label="State"
            name="state"
            value={formValues.state}
            onChange={handleChange}
            variant="outlined"
          >
            {/* Add your state options here */}
            <MenuItem value="California">California</MenuItem>
            <MenuItem value="Texas">Texas</MenuItem>
            <MenuItem value="New York">New York</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            margin="normal"
            label="Region"
            name="region"
            value={formValues.region}
            onChange={handleChange}
            variant="outlined"
          >
            {/* Add your region options here */}
            <MenuItem value="North">North</MenuItem>
            <MenuItem value="South">South</MenuItem>
            <MenuItem value="East">East</MenuItem>
            <MenuItem value="West">West</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            margin="normal"
            label="Apartment Type"
            name="apartmentType"
            value={formValues.apartmentType}
            onChange={handleChange}
            variant="outlined"
          >
            {/* Add your apartment type options here */}
            <MenuItem value="Studio">Studio</MenuItem>
            <MenuItem value="1 Bedroom">1 Bedroom</MenuItem>
            <MenuItem value="2 Bedroom">2 Bedroom</MenuItem>
            <MenuItem value="3 Bedroom">3 Bedroom</MenuItem>
          </TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Nearby"
            name="nearby"
            value={formValues.nearby}
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Price"
            name="price"
            type="number"
            value={formValues.price}
            onChange={handleChange}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Add Property
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
export default AddNewProperties