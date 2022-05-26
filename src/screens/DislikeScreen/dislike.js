import React from 'react';
import {useSelector} from 'react-redux';
import {addAndRemoveLikedListMovies} from '../../state-management/moviesSlice';
import NoFoundList from '../../components/globalComponents/NoFoundList/NoFoundList';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';

const Dislike = ({navigation}) => {
  const dislikedList = useSelector(state => state.moviesSlice.disliked);
  console.log(dislikedList);
  return (
    <>
      {dislikedList.length ? (
        <FlatListMovies
          navigation={navigation}
          list={dislikedList}
          // RemoveList={addAndRemoveLikedListMovies}
        />
      ) : (
        <NoFoundList list="disliked" />
      )}
    </>
  );
};

export default Dislike;
