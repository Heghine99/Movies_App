import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from 'react-native';

import {styles} from './likedStyle';
import {useSelector} from 'react-redux';
import {IMAGE_API} from '../../state-management/configs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {addLikedListMovies} from '../../state-management/moviesSlice';

const Liked = ({navigation}) => {
  const likedList = useSelector(state => state.likedList);
  // console.log(likedList, 'likkkk');
  const dispatch = useDispatch();
  const renderLikedListItem = ({item}) => {
    console.log(item.id);

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <View style={styles.moviesItem}>
          <ImageBackground
            source={{uri: IMAGE_API + item.backdrop_path}}
            style={styles.itemImage}
            imageStyle={styles.moviesItemImageStyle}></ImageBackground>
          <Text style={styles.moviesItemTitle}>{item.title}</Text>
          <View style={styles.moviesItembottomTitle}>
            <Text style={styles.moviesItembottomText}>Movie</Text>
            <Text style={styles.moviesItembottomDate}>{item.release_date}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(addLikedListMovies(item));
            }}
            style={styles.moviesItemVote}>
            <AntDesign name="delete" size={27} color="black" />
          </TouchableOpacity>
          {/* <View
            style={[
              styles.moviesItemVoteAverage,
              {backgroundColor: item.vote_average < 5 ? '#EC502E' : '#CEA8A0'},
            ]}>
            <Text style={styles.moviesItemVote}>{item.vote_average}</Text>
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {/* Movies */}
          <View style={styles.moviesContainer}>
            <FlatList
              data={likedList}
              renderItem={renderLikedListItem}
              keyExtractor={item => item.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Liked;
