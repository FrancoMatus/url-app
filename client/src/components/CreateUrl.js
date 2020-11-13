import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUrl, addUrl } from '../redux/actions/url';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import NavBar from './NavBar/NavBar';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CreateUrl = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const allUrlToShow = useSelector( state => state.allUrl.allUrl)
const onSubmit = data => {
    dispatch(addUrl(data))
}

useEffect(() => {
    dispatch(getAllUrl())
}, []);

return (
  <div>
    <NavBar />
    <div className='container'>
        <div className="form">
      <h2>New URL</h2>
      <div class="col-md-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
            <div className='formularioIn'>
              <label>Link to short</label>
              <input 
                className='form-control'
                type="text" 
                name="link"
                ref={register}
                required
              />
            </div>
            <button className='btn btn-primary box-button'>Short</button>
        </form>
      </div>
      </div>
    </div>
    <ul className="unorderList">
        { allUrlToShow.length === 0 ?
         <div>
             <h3 
           
             >No hay URLs disponibles.</h3>
             </div>
         :
         <div>
              <h4>
                  URL Acortados
              </h4>
              <List component="nav" className={classes.root} aria-label="mailbox folders">
         {allUrlToShow && allUrlToShow.map( urlToShow => {
          return (<li>
              <ListItem button>
               <a href={urlToShow.link}> <ListItemText primary={urlToShow.link} /></a>
              </ListItem>
              <Divider light />
            </li>)
         })}
        </List>
         </div>}
      </ul>
  </div>)
}

export default CreateUrl;