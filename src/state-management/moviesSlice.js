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
    checkFavorites: [],
  },

  reducers: {
    addLikedListMovies: (state, action) => {
      if (state.checkFavorites.includes(action.payload.id)) {
        const newCheckState = state.checkFavorites.filter(item => {
          return item !== action.payload.id;
        });
        const newState = state.likedList.filter(item => {
          return item.id !== action.payload.id;
        });

        state.checkFavorites = newCheckState;
        state.likedList = newState;
        return state;
      } else {
        state.checkFavorites.push(action.payload.id);
        state.likedList.push(action.payload);
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

export const {addLikedListMovies} = postSlice.actions;
export default postSlice.reducer;
