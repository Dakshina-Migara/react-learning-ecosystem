import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import instance from '../../services/AxiosOrdder';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function StudentModel({ open, onClose, update = false, student = null }) {
    const [formData, setFormData] = useState({
        student_name: '',
        student_age: '',
        student_address: '',
        student_contact: ''
    });


    useEffect(() => {
        if (update && student) {
            setFormData({
                student_name: student.student_name || '',
                student_age: student.student_age || '',
                student_address: student.student_address || '',
                student_contact: student.student_contact || ''
            });
        } else {
            setFormData({
                student_name: '',
                student_age: '',
                student_address: '',
                student_contact: ''
            });
        }
    }, [update, student, open]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (update) {
            instance.put(`student/update/${student.id}`, formData)
                .then(function (response) {
                    console.log(response);
                    window.location.reload()
                })
                .catch(function (error) {
                    console.log(error);

                });
        } else {
            instance.post('student/save', formData)
                .then(function (response) {
                    console.log(response);
                    window.location.reload()
                })
                .catch(function (error) {
                    console.log(error);

                });
        }
    };

    return (
        <BootstrapDialog onClose={onClose} open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                {
                    update ?
                        'Update Student' : 'Add Student'
                }
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Stack spacing={2} sx={{ minWidth: 400, mt: 1 }}>
                    <TextField
                        label="Name" name="student_name" variant="outlined" fullWidth value={formData.student_name} onChange={handleChange}
                    />
                    <TextField
                        label="Age" name="student_age" variant="outlined" fullWidth type="number" value={formData.student_age} onChange={handleChange}
                    />
                    <TextField
                        label="Address" name="student_address" variant="outlined" fullWidth value={formData.student_address} onChange={handleChange}
                    />
                    <TextField
                        label="Contact No" name="student_contact" variant="outlined" fullWidth value={formData.student_contact} onChange={handleChange}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained">
                    {
                        update ?
                            'Update' : 'Save'
                    }
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}