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
    addAndRemoveLikedListMovies: (state, action) => {
      const findIndex = state.likedList.findIndex(
        item => item.id === action.payload.id,
      );
      console.log(action, 'action');
      if (findIndex !== -1) {
        const newArr = [...state.likedList];
        newArr.splice(findIndex, 1);
        state.likedList = newArr;
        return state;
      } else {
        state.likedList = [...state.likedList, action.payload];
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

export const {addAndRemoveLikedListMovies} = postSlice.actions;
export default postSlice.reducer;
