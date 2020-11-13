import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllUrl } from '../redux/actions/url';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Home = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const allUrl = useSelector(state => state.allUrl.allUrl)
    const classes = useStyles();
useEffect(() => {
    dispatch(getAllUrl())
}, [])


return (<div>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><Link to="/home">All URL</Link></Button>
          </Typography>
          <Button color="inherit"> <Link to="/url/add">Short URL</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
    Hello!
    {allUrl.length === 0 ? <div>
        No hay URLs disponibles.
    </div> : 
    <ul>
    {allUrl && allUrl.map( url => {
    return (<li><a href={url.link}>{url.link}</a></li>)
    })}
    </ul>
    }
</div>)
}

export default Home;