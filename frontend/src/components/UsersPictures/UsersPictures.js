import React, {useState} from 'react';
import {CardMedia, Grid, makeStyles, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {deleteRequest} from "../../store/sagas/picturesSaga";
import SimpleModal from "../UI/Modal/Modal";

const useStyles = makeStyles({
  root: {
    display: 'block',
    width: 'auto',
    margin: '10px auto',
    textAlign: 'center',
  },
  media: {
    width: 200,
    height: 200,
    margin: 5,
    cursor: "pointer",
  }
})

const UsersPictures = ({image, name, author, id}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = () => {
    dispatch(deleteRequest(id));
  };

  return (
    <Paper className={classes.root}>
      <CardMedia
        onClick={handleOpen}
        image={'http://localhost:8000'+image}
        title={name}
        className={classes.media}/>
      <Typography variant='h6'>
        <strong>{name}</strong>
      </Typography>
      { user._id === author && (
        <Grid item>
          <Button
            onClick={deleteHandler}>
            delete
          </Button>
        </Grid>
      )}
      <SimpleModal image={image} handleClose={handleClose} open={open}/>
    </Paper>
  );
};

export default UsersPictures;