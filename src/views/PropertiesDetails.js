import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Grid, Box } from '@mui/material';
import { useLocation } from 'react-router-dom'
import { getSellerDetails } from '../utils/api';

const PropertiesDetails = () => {
    const location = useLocation()
    const [seller, setSeller] = useState({})
    const apartment = location.state

    useEffect(() => {
        (async () => {
            const response = await getSellerDetails(apartment.seller_id)
            if (response.status === 200) {
                setSeller(response.data.data)
            }

        })()
    }, [])

    return (
        <Container sx={{ p: 3 }}>
            <Card sx={{ background: 'linear-gradient(to bottom right, #33ccff 0%, #ebf8e1 50%, tan 100%)' }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Apartment Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h6">Description</Typography>
                            <Typography>{apartment.description}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Price</Typography>
                            <Typography>{apartment.price}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">State</Typography>
                            <Typography>{apartment.state}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Region</Typography>
                            <Typography>{apartment.region}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Number of Bedrooms</Typography>
                            <Typography>{apartment.no_of_bedroom}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Nearby</Typography>
                            <Typography>{apartment.nearby}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Deleted</Typography>
                            <Typography>{apartment.deleted ? 'Yes' : 'No'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Created At</Typography>
                            <Typography>{new Date(apartment.created_at).toLocaleString()}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <hr/>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Seller Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h6">First Name</Typography>
                            <Typography>{seller.first_name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Last Name</Typography>
                            <Typography>{seller.last_name}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Email</Typography>
                            <Typography>{seller.email}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Phone Number</Typography>
                            <Typography>{seller.phone}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PropertiesDetails