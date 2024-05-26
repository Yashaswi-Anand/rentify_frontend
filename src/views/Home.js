import React, { useState } from 'react';
import { Box, Grid, Card, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import CardContentItem from '../widget/CardContentItem';

const items = [
    { id: 1, title: 'Card 1', description: 'This is card number 1' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    { id: 2, title: 'Card 2', description: 'This is card number 2' },
    // Add more cards as needed
];

const Home = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{
                    borderRight: '1px solid gray',
                    paddingRight: 2,
                    height: '100vh',
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="filter-label">Filter</InputLabel>
                        <Select
                            labelId="filter-label"
                            value={filter}
                            label="Filter"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            {/* Add more filter options as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography variant="h5" sx={{ mb: 2 }} component="div">
                        India's first Quick Rent Search
                    </Typography>
                    <Grid container spacing={3} sx={{marginTop: 2, paddingRight: 5, maxHeight: 650, overflow: 'auto' }}>
                        {items.map((item) => (
                            <Grid item xs={12} sm={6} key={item.id}>
                                <Card sx={{
                                    background: 'linear-gradient(to top left, #33ccff 0%, white 50%)'
                                }}>
                                    <CardContentItem item={item}/>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
