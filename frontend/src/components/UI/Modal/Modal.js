import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from "@material-ui/core";


const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    width: 600,
    border: '2px solid #000',
    backgroundColor: 'white',
    top: '50%',
    left: '25%',
  },
});

const SimpleModal = ({open, handleClose}) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <Button onClick={handleClose}>
        close
      </Button>
      <SimpleModal />
    </div>
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
