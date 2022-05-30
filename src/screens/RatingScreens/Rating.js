import React, {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {addRatingList} from '../../state-management/moviesSlice';
import BackIcon from '../../components/globalComponents/BackIcon/BackIcon';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';
import {DarkModeContext} from '../../components/Context/context';
import {styles} from '../ProfileScreens/profileStyle';
import {darkModeStyles} from '../../components/globalComponents/DarkModeStyle/profileDarkModeStyles';

const Rating = ({navigation}) => {
  const ratings = useSelector(state => state.moviesSlice.ratings);
  const {mode} = useContext(DarkModeContext);
  return (
    <SafeAreaView>
      <View style={mode ? styles.container : darkModeStyles.container}>
        <BackIcon navigation={navigation} />
        <FlatListMovies
          navigation={navigation}
          list={ratings}
          addAndRemoveList={addRatingList}
        />
      </View>
    </SafeAreaView>
  );
};

export default Rating;
