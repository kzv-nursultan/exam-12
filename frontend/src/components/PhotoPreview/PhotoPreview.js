import React from 'react';
import {CardMedia, makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    margin: 5
  },
  moreBtn: {
    margin: '5px auto'
  }
})

const PhotoPreview = ({image, author, name}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <CardMedia
        image={'http://localhost:8000'+image}
        title={name}
        className={classes.media}/>
      <Typography variant='h6'>
        Name: <strong>{name}</strong>
      </Typography>
      <Typography variant='h6'>
        Author: {author}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        className={classes.moreBtn}
        size="small"
        onClick={()=>console.log('more')}
      >
        more
      </Button>
    </Paper>
  );
};

export default PhotoPreview;