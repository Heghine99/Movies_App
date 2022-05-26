import React from 'react';
import {useSelector} from 'react-redux';
import NoFoundList from '../../components/globalComponents/NoFoundList/NoFoundList';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';
import {dislikeListMovies} from '../../state-management/moviesSlice';

const Dislike = ({navigation}) => {
  const dislikedList = useSelector(state => state.moviesSlice.disliked);
  console.log(dislikedList);
  return (
    <>
      {dislikedList.length ? (
        <FlatListMovies
          navigation={navigation}
          list={dislikedList}
          deletList={dislikeListMovies}
        />
      ) : (
        <NoFoundList list="disliked" />
      )}
    </>
  );
};

export default Dislike;
