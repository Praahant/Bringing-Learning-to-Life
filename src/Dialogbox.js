import * as React from 'react';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import LeetCodeLinks from './Link'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div maxWidth='xs' className='m-5 rounded-tl-xl rounded-br-xl border'> 
      
      <div className=" rounded-lg">
      <CardContent className='bg-slate-300 rounded-tl-xl'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Efficient random access (O(1)).
        </Typography>
        <Typography variant="h5" component="div">
         Array And Hashing
        </Typography>
      </CardContent>
      <CardActions  className="rounded-br-xl bg-slate-200">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Array
      </Button>
      </CardActions>
    </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Array
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              ESC
            </Button>
          </Toolbar>
        </AppBar> 
        <LeetCodeLinks/>
      </Dialog>
    </div>
  );
}
