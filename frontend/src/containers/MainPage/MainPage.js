import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRequest} from "../../store/sagas/picturesSaga";
import {Grid, Typography} from "@material-ui/core";
import PhotoPreview from "../../components/PhotoPreview/PhotoPreview";

const MainPage = () => {
  const dispatch = useDispatch();
  const pictures = useSelector(state => state.pictures.pictures);

  useEffect(()=>{
    dispatch(getRequest());
  }, [dispatch]);

  let picturesList = (
    <Typography variant='h4'>
      It seems there no pictures in DataBase
    </Typography>
  );

  if (pictures.length > 0) {
    picturesList = (
      pictures.map(pic => (
        <PhotoPreview
          key={pic._id}
          image={pic.image}
          author={pic.author.username}
          id={pic.author._id}
          name={pic.name}
        />
      ))
    )
  };

  return (
    <Grid container>
      {picturesList}
    </Grid>
  );
};

export default MainPage;