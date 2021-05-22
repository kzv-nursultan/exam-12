import React, {useState} from 'react';
import {CardMedia, makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {historyPush} from "../../store/sagas/historySaga";
import {NavLink} from "react-router-dom";
import SimpleModal from "../UI/Modal/Modal";

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
    margin: 5,
    cursor: 'pointer',
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
  const [open, setOpen] = useState(false);
  const path = '/profile/'+id;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className={classes.root}>
      <CardMedia
        onClick={handleOpen}
        image={'http://localhost:8000'+image}
        title={name}
        className={classes.media}/>
      <Typography variant='h6'>
        Name: <strong>{name}</strong>
      </Typography>
      <NavLink to={path} className={classes.navLinks}>
        Author: <strong>{author}</strong>
      </NavLink>
      <SimpleModal open={open} handleClose={handleClose} image={image}/>
    </Paper>
  );
};

export default PhotoPreview;