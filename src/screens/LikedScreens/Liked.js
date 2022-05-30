import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View} from 'react-native';

import {addAndRemoveLikedListMovies} from '../../state-management/moviesSlice';
import NoFoundList from '../../components/globalComponents/NoFoundList/NoFoundList';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';
import {styles} from '../../components/globalComponents/FlatListComponent/FlatListStyles';
import {DarkModeContext} from '../../components/Context/context';
import {darkModeStyles} from '../../components/globalComponents/DarkModeStyle/profileDarkModeStyles';
const Liked = ({navigation}) => {
  const likedList = useSelector(state => state.moviesSlice.likedList);
  const {mode} = useContext(DarkModeContext);
  return (
    <View style={mode ? styles.container : darkModeStyles.container}>
      {likedList.length ? (
        <View>
          <SafeAreaView>
            {/* Movies */}
            <View style={styles.moviesContainer}>
              <FlatListMovies
                navigation={navigation}
                list={likedList}
                deletList={addAndRemoveLikedListMovies}
              />
            </View>
          </SafeAreaView>
        </View>
      ) : (
        <NoFoundList list="liked" />
      )}
    </View>
  );
};

export default Liked;
