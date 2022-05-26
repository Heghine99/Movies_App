import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {addSaveList} from '../../state-management/moviesSlice';
import BackIcon from '../../components/globalComponents/BackIcon/BackIcon';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';

const Rating = ({navigation}) => {
  const saveList = useSelector(state => state.moviesSlice.SaveList);
  return (
    <SafeAreaView>
      <BackIcon navigation={navigation} />
      <FlatListMovies
        navigation={navigation}
        list={saveList}
        addAndRemoveList={addSaveList}
      />
    </SafeAreaView>
  );
};

export default Rating;
