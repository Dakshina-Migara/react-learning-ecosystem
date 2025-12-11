import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function DataCard({head, body, bottom}) {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {head}
                </Typography>
                <Typography variant="h5" component="div">
                    {body}
                </Typography>
                <Typography variant="body2">
                    {bottom}
                </Typography>
            </CardContent>
        </Card>
    )
}
