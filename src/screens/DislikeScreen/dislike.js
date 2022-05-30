import React, {useContext} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import NoFoundList from '../../components/globalComponents/NoFoundList/NoFoundList';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';
import {dislikeListMovies} from '../../state-management/moviesSlice';
import {styles} from '../ProfileScreens/profileStyle';
import {DarkModeContext} from '../../components/Context/context';
import {darkModeStyles} from '../../components/globalComponents/DarkModeStyle/profileDarkModeStyles';

const Dislike = ({navigation}) => {
  const dislikedList = useSelector(state => state.moviesSlice.disliked);
  const {mode} = useContext(DarkModeContext);
  return (
    <View style={mode ? styles.container : darkModeStyles.container}>
      {dislikedList.length ? (
        <FlatListMovies
          navigation={navigation}
          list={dislikedList}
          deletList={dislikeListMovies}
        />
      ) : (
        <NoFoundList list="disliked" />
      )}
    </View>
  );
};

export default Dislike;
