import React, {useEffect} from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {getAuthorsRequest} from "../../store/sagas/picturesSaga";
import PhotoPreview from "../../components/PhotoPreview/PhotoPreview";
import Button from "@material-ui/core/Button";
import {historyPush} from "../../store/sagas/historySaga";

const useStyles = makeStyles({
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
  itemContainer: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  cardsBlock: {
    margin: 20
  },
  addPhoto: {
    maxWidth: 200
  }
})

const ProfilePage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const user = useSelector(state => state.users.user);
  const usersImages = useSelector(state => state.pictures.pictures);
  const author = usersImages[0]?.author

  useEffect(()=>{
    dispatch(getAuthorsRequest(id));
  }, [dispatch, id]);

  const addBtnHandler = () => {
    dispatch(historyPush('/add'));
  };

  let photoList = (
    <Typography variant='h5'>
      Something went wrong...
    </Typography>
  )

  if (usersImages.length > 0) {
    photoList = (
      usersImages.map(pic => (
        <PhotoPreview
          key={pic._id}
          author={pic.author.username}
          name={pic.name}
          image={pic.image}
        />
      ))
    )
  }

  return (
    <Grid container>
      <Grid container item className={classes.itemContainer}>

        <Typography variant='h4' className={classes.title}>
          <strong>{author?.username}</strong>'s Photo Gallery
        </Typography>

        {user._id === author?._id && (
          <Button
            variant='outlined'
            color='primary'
            endIcon={<AddAPhotoIcon/>}
            onClick={addBtnHandler}
            className={classes.addPhoto}>
            add photo
          </Button>
        )}

        <Grid container item className={classes.cardsBlock}>
          {photoList}
        </Grid>

      </Grid>
    </Grid>
  );
};

export default ProfilePage;