import React from 'react';
import {CardMedia, makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {historyPush} from "../../store/sagas/historySaga";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: 'block',
    width: 'auto',
    margin: '10px auto',
    textAlign: 'center',
    paddingBottom: 10
  },
  media: {
    width: 200,
    height: 200,
    margin: 5
  },
  navLinks: {
    textDecoration: 'none',
    color: "black",
  },
  moreBtn: {
    margin: '5px auto'
  }
})

const PhotoPreview = ({image, author, name, id}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const path = '/profile/'+id;

  const usersProfileHandler = () => {
    dispatch(historyPush('/profile/' + id));
  };

  return (
    <Paper className={classes.root}>
      <CardMedia
        image={'http://localhost:8000'+image}
        title={name}
        className={classes.media}/>
      <Typography variant='h6'>
        Name: <strong>{name}</strong>
      </Typography>
      <NavLink to={path} className={classes.navLinks}>
        Author: <strong>{author}</strong>
      </NavLink>
      {/*<Button*/}
      {/*  variant='contained'*/}
      {/*  color='primary'*/}
      {/*  className={classes.moreBtn}*/}
      {/*  size="small"*/}
      {/*  onClick={()=>console.log('more')}*/}
      {/*>*/}
      {/*  more*/}
      {/*</Button>*/}
    </Paper>
  );
};

export default PhotoPreview;