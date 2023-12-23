import React, { useState } from 'react';
import links from './Array';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import './dark.css'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const DynamicTable = () => {
  // Create a state to track the checked status for each row
  const [checkedRows, setCheckedRows] = useState({});

  const handleProblemClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  // Function to handle checkbox state changes
  const handleCheckboxChange = (rowId, isChecked) => {
    setCheckedRows((prevCheckedRows) => ({
      ...prevCheckedRows,
      [rowId]: isChecked,
    }));
  };

  return (
    <div className='darkbg'>
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Checkbox</TableCell>
            <TableCell>Name of Problem</TableCell>
            <TableCell>Level of Problem</TableCell>
            <TableCell>Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((row) => (
            <TableRow className={checkedRows[row.id] ? 'bg-lime-100' : ''} key={row.id}>
              <TableCell>
                <Checkbox
                  {...label}
                  // Set the checked state based on the checkedRows state
                  checked={checkedRows[row.id] || false}
                  // Handle the checkbox state changes
                  onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                />
              </TableCell>
              <TableCell>
                <a href={row.link} target="_blank" rel="noopener noreferrer">
                  {row.name}
                </a>
              </TableCell>
              <TableCell>{row.level}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleProblemClick(row.link)}>
                  Solve
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default DynamicTable;
