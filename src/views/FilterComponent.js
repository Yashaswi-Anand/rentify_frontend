import React, { useState } from 'react';
import { Box, Button, MenuItem, TextField } from '@mui/material';


function FilterComponent({ setFilterValues }) {
    const [filter, setFilter] = useState({
        state: '',
        region: '',
        apartmentType: '',
        no_of_bedroom: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const onHandleAddFilter = () => {
        setFilterValues(filter);
    }

    const onHandleClearFilter = () => {
        setFilter({
            state: '',
            region: '',
            apartmentType: '',
            no_of_bedroom: '',
        });
        setFilterValues({});
    }

    return (
        <div>
            <Box>
                <TextField
                    fullWidth
                    select
                    margin="normal"
                    label="State"
                    name="state"
                    value={filter.state}
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
                    value={filter.region}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {/* Add your region options here */}
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
                    <MenuItem value="surat">Surat</MenuItem>
                    <MenuItem value="delhi">Delhi NCR</MenuItem>
                </TextField>
                <TextField
                    fullWidth
                    select
                    margin="normal"
                    label="Apartment Type"
                    name="apartmentType"
                    value={filter.apartmentType}
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
                    value={filter.no_of_bedroom}
                    onChange={handleChange}
                    variant="outlined"
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={onHandleAddFilter}
                    sx={{ mt: 2 }}
                >
                    Show
                </Button>
                <Button
                    variant="contained"
                    className='bg-red'
                    fullWidth
                    onClick={onHandleClearFilter}
                    sx={{ mt: 2 }}
                >
                    Clear
                </Button>
            </Box>
        </div>
    )
}

export default FilterComponent