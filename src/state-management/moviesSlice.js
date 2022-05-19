import {useLinkBuilder} from '@react-navigation/native';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584',
  );
  const result = await response.json();
  return result;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    posts: [],
    likedList: [],
  },

  reducers: {
    addLikedListMovies: (state, action) => {
      if (action.payload.favorite === true) {
        return state;
      } else {
        state.likedList.push(action.payload);
      }
      // return state;
    },
    removeLikedListMovies: (state, action) => {
      const newState = state.likedList.filter(item => {
        return item.id !== action.payload.id;
      });
      state.likedList = newState;
      return state;
    },
  },

  extraReducers: {
    // actions
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      // console.log(state, 'sssssssdddddddddddd');
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {addLikedListMovies, removeLikedListMovies} = postSlice.actions;
export default postSlice.reducer;
