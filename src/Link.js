import React from 'react';
// import leetcodeLinks from './leetcodeLinks';
import leetcodeLinks from './Array'; // Import the file we created earlier
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const LeetCodeLinks = () => {
  // Extract the keys and values from the leetcodeLinks object
  const linkKeys = Object.keys(leetcodeLinks);
  const linkValues = Object.values(leetcodeLinks);

  return (
    <div className="bg-white rounded-lg m-5">
      <h2 className='ml-5 mt-5'>LeetCode Questions</h2>
     
      <List>
        {linkKeys.map((key, index) => (
          <ListItem key={index} disablePadding>
             <div className='bg-lime-500 border-2 rounded-lg ml-5'><ListItemButton component="a" href={linkValues[index]} target="_blank" rel="noopener noreferrer">
              <ListItemText primary={key} />
            </ListItemButton> </div>
          </ListItem>
        ))}
      </List>
     
    </div>
  );
};

export default LeetCodeLinks;
