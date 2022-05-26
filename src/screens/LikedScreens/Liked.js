import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, View} from 'react-native';

import {addAndRemoveLikedListMovies} from '../../state-management/moviesSlice';
import NoFoundList from '../../components/globalComponents/NoFoundList/NoFoundList';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';
import {styles} from '../../components/globalComponents/FlatListComponent/FlatListStyles';
const Liked = ({navigation}) => {
  const likedList = useSelector(state => state.moviesSlice.likedList);
  return (
    <>
      {likedList.length ? (
        <View style={styles.container}>
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
    </>
  );
};

export default Liked;
