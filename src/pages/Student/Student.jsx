import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import StudentModel from '../../common/studentModel/StudentModel';
import DeleteModel from '../../common/deleteModel/DeleteModel';
import instance from '../../services/AxiosOrdder';

export default function Student() {
    const [open, setOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        instance.get('student/getAll')
            .then(function (response) {
                console.log(response);
                setStudents(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setUpdateOpen(true);
    };

    const handleDelete = (student) => {
        setSelectedStudent(student);
        setDeleteOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setUpdateOpen(false);
        setDeleteOpen(false);
        setSelectedStudent(null);
    };

    const handleSuccess = () => {
        getData();
        handleClose();
    };

    return (
        <div>
            <Box
                sx={{
                    width: '100%',
                    minWidth: 500,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                <Typography variant="h2">
                    Student Management
                </Typography>
                <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    sx={{
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
                    }}
                >
                    Add +
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: '#000', fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell align="right" sx={{ color: '#000', fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell align="right" sx={{ color: '#000', fontWeight: 'bold' }}>Address</TableCell>
                            <TableCell align="right" sx={{ color: '#000', fontWeight: 'bold' }}>Age</TableCell>
                            <TableCell align="right" sx={{ color: '#000', fontWeight: 'bold' }}>Contact No</TableCell>
                            <TableCell align="right" sx={{ color: '#000', fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {students.map((student) => (
                            <TableRow
                                key={student.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {student.id}
                                </TableCell>
                                <TableCell align="right">{student.name}</TableCell>
                                <TableCell align="right">{student.address}</TableCell>
                                <TableCell align="right">{student.age}</TableCell>
                                <TableCell align="right">{student.contactNo}</TableCell>
                                <TableCell align="right">
                                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                                        <IconButton aria-label="edit" onClick={() => handleEdit(student)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete" onClick={() => handleDelete(student)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <StudentModel open={open} onClose={handleClose} onSuccess={handleSuccess} />
            <StudentModel update={true} open={updateOpen} student={selectedStudent} onClose={handleClose} onSuccess={handleSuccess} />
            <DeleteModel open={deleteOpen} student={selectedStudent} onClose={handleClose} onSuccess={handleSuccess} />
        </div>
    );
}