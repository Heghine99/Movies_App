import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {IMAGE_API} from '../../state-management/configs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {removeLikedListMovies} from '../../state-management/moviesSlice';

const Liked = ({navigation}) => {
  const likedList = useSelector(state => state.likedList);
  // console.log(likedList, 'likkkk');
  const dispatch = useDispatch();
  const renderLikedListItem = ({item}) => {
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
              dispatch(removeLikedListMovies(item));
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

const styles = StyleSheet.create({
  moviesItem: {
    marginTop: 20,
    marginHorizontal: 13,
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 160,
    height: 240,
  },
  moviesItemImageStyle: {
    borderRadius: 10,
  },
  moviesItemTitle: {
    width: 160,
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
    color: 'black',
    marginTop: 10,
  },
  moviesItembottomTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  moviesItembottomText: {
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 17,
  },
  moviesItembottomDate: {
    alignItems: 'center',
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    fontSize: 14,
  },
  moviesItemVote: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
