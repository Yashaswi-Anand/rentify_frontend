import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, Typography} from '@mui/material';
import CardContentItem from '../widget/CardContentItem';
import { getAllProperties } from '../utils/api';
import FilterComponent from './FilterComponent';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [filterValues, setFilterValues] = useState({});

    useEffect(() => {
        (async () => {
            await getAllPropertiesData()
        })()
    }, [])

    useEffect(() => {
        (async () => {
            await getAllPropertiesData();
        })()
    }, [filterValues])

    const getAllPropertiesData = async () => {
        try {
            const response = await getAllProperties(filterValues);
            if (response.status === 200) {
                setProperties(response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} sx={{
                    borderRight: '1px solid gray',
                    paddingRight: 2,
                    height: '100vh',
                }}>
                    <FilterComponent setFilterValues={setFilterValues}/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Typography variant="h5" sx={{ mb: 2 }} component="div">
                        India's first Quick Rent Search
                    </Typography>
                    <Grid container spacing={3} sx={{ marginTop: 2, paddingRight: 5, maxHeight: 650, overflow: 'auto' }}>
                        {properties && properties?.map((item) => (
                            <Grid item xs={12} sm={6} key={item.id}>
                                <Card sx={{
                                    background: 'linear-gradient(to top left, #33ccff 0%, white 50%)'
                                }}>
                                    <CardContentItem item={item} />
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
