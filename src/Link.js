import React from 'react';
import links from './Array';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
const DynamicTable = () => {
  const handleProblemClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <TableContainer component={Paper}>
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
            <TableRow key={row.id}>
              <TableCell>
              <Radio
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
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
  );
};

export default DynamicTable;
