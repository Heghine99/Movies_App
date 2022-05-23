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
    disliked: [],
    SaveList: [],
    ratings: [],
  },

  reducers: {
    addAndRemoveLikedListMovies: (state, action) => {
      const findIndexInLikeds = state.likedList.findIndex(
        item => item === action.payload.id,
      );
      const findIndexInDislikes = state.disliked.findIndex(
        item => item === action.payload.id,
      );
      // console.log(action, 'action');
      if (findIndexInLikeds !== -1) {
        state.likedList.splice(findIndexInLikeds, 1);
        return state;
      } else {
        state.likedList = [...state.likedList, action.payload.id];
        state.disliked.splice(findIndexInDislikes, 1);
        return state;
      }
    },
    dislikeListMovies: (state, action) => {
      const findIndexDislike = state.disliked.findIndex(
        item => item === action.payload.id,
      );
      const findIndexLiked = state.likedList.findIndex(
        item => item === action.payload.id,
      );
      if (findIndexDislike !== -1) {
        state.disliked.splice(findIndexDislike, 1);
        return state;
      } else {
        state.disliked = [...state.disliked, action.payload.id];
        state.likedList.splice(findIndexLiked, 1);

        return state;
      }
    },
    addSaveList: (state, action) => {
      const findIndexInwantToWatchList = state.SaveList.findIndex(
        item => item === action.payload.id,
      );
      // console.log(action, 'action');
      if (findIndexInwantToWatchList !== -1) {
        state.SaveList.splice(findIndexInwantToWatchList, 1);
        return state;
      } else {
        state.SaveList = [...state.SaveList, action.payload.id];
        return state;
      }
    },
    addRatingList: (state, action) => {
      const findIndexInwantToWatchList = state.ratings.findIndex(
        item => item === action.payload.id,
      );
      // console.log(action, 'action');
      if (findIndexInwantToWatchList !== -1) {
        state.ratings.splice(findIndexInwantToWatchList, 1);
        return state;
      } else {
        state.ratings = [...state.ratings, action.payload.id];
        return state;
      }
    },
  },

  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  addAndRemoveLikedListMovies,
  dislikeListMovies,
  addSaveList,
  addRatingList,
} = postSlice.actions;
export default postSlice.reducer;
