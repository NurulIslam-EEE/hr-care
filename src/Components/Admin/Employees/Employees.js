import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Employee from './Employee/Employee';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'cyan',
        color: theme.palette.common.white,
        fontSize: 24,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
    },
}));

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-falls-58867.herokuapp.com/employeeRequest/')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])


    return (
        <Container>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: '700', color: '#00D2FC' }}>All Employee </Typography>

            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="left">Phone</StyledTableCell>
                            <StyledTableCell align="left">Department</StyledTableCell>
                            <StyledTableCell align="left">Designation</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            employees.map(item => <Employee
                                key={item.id}
                                item={item}
                            ></Employee>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Employees;