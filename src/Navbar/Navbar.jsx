import React from 'react';
import {useStyles, makeStyles , createStyles} from '@material-ui/styles';
import Home from './Home';
import About from './About';
import Login from "./Login";
import Search from './Search';
import Signup from './Signup';


const Navbar = () => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.nav}>
           < Home    />
           < About   />
           < Search  />
           < Login    />
           < Signup   />
           </div>
        </>
    )
}

const useStyles = makeStyles(theme  =>
    createStyles({
        nav : {
            backgroundColor:'yellow',
            color:'red'


        }

    
    }));


export default Navbar;