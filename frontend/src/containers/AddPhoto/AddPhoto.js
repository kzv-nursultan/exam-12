import React, {useState} from 'react';
import {Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import FormElement from "../../components/UI/FormElement/FormElement";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import {useDispatch, useSelector} from "react-redux";
import {postRequest} from "../../store/sagas/picturesSaga";

const useStyles = makeStyles(({
  root: {
    width: '90%',
    margin: '10px auto',
    textAlign: "center",
  },
  input: {
    display: 'none',
  },
  photoBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%',
    margin:'10px auto',
    flexDirection: "column"
  },
  formElement: {
    display: 'block',
    margin: 10,
    width: '100%',
  },
  fileBlock: {
    flexWrap: 'nowrap',
    alignItems: "center",
    marginBottom: 20
  },
  photoBtn: {
    margin: 5,
  },
}))

const AddPhoto = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  const [newPost, setNewPost] = useState({ name: '', author: user._id});
  const [postImage, setPostImage] = useState('');

  const onchangeHandler = e => {
    const {name, value} = e.target;

    setNewPost( prevState => ({
      ...prevState,
      [name]:value,
    }));
  };

  const fileChangeHandler = e => {
    if(e.target.files[0].name){
      const file = e.target.files[0];
      setPostImage(file);
    } else {
      setPostImage('');
    }
  };

  const createHandler = () => {
    const body = {
      name: newPost.name,
      author: newPost.author,
      image: postImage,
    };

    const formData = new FormData();

    Object.keys(body).map(key => (
      formData.append(key, body[key])
    ));

    dispatch(postRequest(formData));
  };

  return (
    <Grid container>
      <Grid item className={classes.root}>

        <Typography variant='h4'>
          Add New Photo
        </Typography>

          <Grid item className={classes.photoBlock}>

            <Grid item className={classes.formElement}>
              <FormElement
                required
                name='name'
                variant='outlined'
                fullWidth
                value={newPost.name}
                label='Name'
                onChange={onchangeHandler}
              />
            </Grid>

            <Grid container item className={classes.fileBlock}>
              <TextField
                disabled
                required
                fullWidth
                label='Add image'
                variant='outlined'
                value={postImage.name ? postImage.name : ''}
              />
              <input
                accept="image/*"
                required
                className={classes.input}
                id="contained-button-file"
                onChange={fileChangeHandler}
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  endIcon={<AddAPhotoIcon/>}
                  className={classes.photoBtn}>
                  Upload
                </Button>
              </label>
            </Grid>
            <Button
              color='primary'
              onClick={createHandler}
              variant='outlined'>
              create
            </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddPhoto;