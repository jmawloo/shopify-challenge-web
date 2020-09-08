import React from 'react';
import axios from 'axios';
import {AppBar, Toolbar, Typography, InputBase, Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(4),
        width: 'auto',
      },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 2),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        // width: '20ch',
      },
    }
  }));



const handleSubmit = (e) => {
    e.preventDefault();
};

const SearchBar = () => {
    // Bind material-ui custom classes to variable:
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    The Shoppies
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    
                    <InputBase
                        fullWidth
                        placeholder="Search movie titles..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                >
                    Search
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default SearchBar;