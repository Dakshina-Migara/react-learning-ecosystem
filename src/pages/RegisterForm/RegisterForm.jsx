import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

export default function RegisterForm({id,title,dee}) {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    mt: 5,
                    p: 4,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>

                <Box component="form">
                    <TextField
                        fullWidth
                        label='ksh'
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label='jhsd'
                        type="email"
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label='jhad'
                        type="text"
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
