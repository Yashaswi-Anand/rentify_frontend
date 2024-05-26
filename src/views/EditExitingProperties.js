import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, Modal, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { UpdateProperties } from '../utils/api';
import { errorMessage, successMessage } from '../Toast';

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

function EditExitingProperties({ item, openModal, setOpenModal }) {
    const [formValues, setFormValues] = useState({
        state: '',
        region: '',
        apartmentType: '',
        nearby: '',
        price: '',
        no_of_bedroom: '',
        description: '',
    });

    console.log(item);

    useEffect(() => {
        setFormValues({
            state: item.state,
            region: item.region,
            apartmentType: item.apartment,
            nearby: item.nearby,
            price: item.price,
            no_of_bedroom: item.no_of_bedroom,
            description: item.description,
        });
    }, [item]);

    const handleClose = () => setOpenModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                state: formValues.state,
                region: formValues.region,
                nearby: formValues.nearby,
                apartment: formValues.apartmentType,
                no_of_bedroom: formValues.no_of_bedroom,
                price: formValues.price,
                description: formValues.description,
                seller_id: localStorage.getItem('user_id'),
            }
            const response = await UpdateProperties(item.id, payload)
            if (response.status === 200) {
                handleClose();
                successMessage('Property Updated Successfully');
                window.location.reload();
            }
        } catch (error) {
            errorMessage(error.response.data.message);
        }
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
                    Edit Existing Property
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
                        <MenuItem value="Gujarat">Gujarat</MenuItem>
                        <MenuItem value="Delhi">Delhi</MenuItem>
                        <MenuItem value="Harayana">Haryana</MenuItem>
                        <MenuItem value="Rajasthan">Rajasthan</MenuItem>
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
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
                        <MenuItem value="vatva">Vatva</MenuItem>
                        <MenuItem value="surat">Surat</MenuItem>
                        <MenuItem value="delhi">Delhi NCR</MenuItem>
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
                        <MenuItem value="room">Room</MenuItem>
                        <MenuItem value="flat">Flat</MenuItem>
                        <MenuItem value="house">House</MenuItem>
                    </TextField>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Number Of Bedroom"
                        name="no_of_bedroom"
                        type="number"
                        value={formValues.no_of_bedroom}
                        onChange={handleChange}
                        variant="outlined"
                    />
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
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Discription"
                        name="description"
                        type="text"
                        value={formValues.description}
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
                        Update Property
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}

export default EditExitingProperties