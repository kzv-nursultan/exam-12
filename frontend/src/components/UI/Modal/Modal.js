import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button, CardMedia, Paper} from "@material-ui/core";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';


const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    width: 600,
    border: '2px solid #000',
    backgroundColor: 'white',
    top: '10%',
    left: '25%',
    textAlign: 'center'
  },
  media: {
    width: 500,
    height: 500,
    margin: '5px auto'
  },
  closeBtn: {
    margin: 10
  }
});

const SimpleModal = ({open, handleClose, image}) => {
  const classes = useStyles();
  const url = 'http://localhost:8000'+image;

  const body = (
    <Paper className={classes.paper}>
      <CardMedia
        image={url}
        className={classes.media}
      />
      <Button
        variant='outlined'
        className={classes.closeBtn}
        onClick={handleClose}
        endIcon={<CancelPresentationIcon/>}
      >
        close
      </Button>
    </Paper>
  );

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal;
