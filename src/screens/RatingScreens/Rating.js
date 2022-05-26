import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {addRatingList} from '../../state-management/moviesSlice';
import BackIcon from '../../components/globalComponents/BackIcon/BackIcon';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';

const Rating = ({navigation}) => {
  const ratings = useSelector(state => state.moviesSlice.ratings);
  return (
    <SafeAreaView>
      <BackIcon navigation={navigation} />
      <FlatListMovies
        navigation={navigation}
        list={ratings}
        addAndRemoveList={addRatingList}
      />
    </SafeAreaView>
  );
};

export default Rating;
