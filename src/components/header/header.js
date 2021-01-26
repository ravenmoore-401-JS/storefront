import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return(
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Ravenmoore Store
          </Typography>

    {/* this button will want to update from state store for number in parens */}

          <Button color="inherit">Cart()</Button>
        </Toolbar>
      </AppBar>
    </header>
  )
}