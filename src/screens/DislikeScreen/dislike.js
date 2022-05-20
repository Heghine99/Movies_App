import React, {useMemo} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from 'react-native';

import {styles} from '../LikedScreens/likedStyle';
import {useDispatch, useSelector} from 'react-redux';
import {IMAGE_API} from '../../state-management/configs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {dislikeListMovies} from '../../state-management/moviesSlice';
import colors from './../../assets/colors/colors';

const Dislike = ({navigation}) => {
  const {results} = useSelector(state => state.posts);
  const dislikedList = useSelector(state => state.disliked);
  const filterLikedList = useMemo(() => {
    return results.filter(item => dislikedList.includes(item.id));
  }, [results, dislikedList]);
  const dispatch = useDispatch();

  const renderdislikedListItem = ({item}) => {
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
            <TouchableOpacity
              onPress={() => {
                dispatch(dislikeListMovies(item));
              }}>
              <AntDesign
                name="delete"
                size={32}
                style={{
                  color: dislikedList.includes(item.id)
                    ? colors.orange
                    : colors.white,
                }}
              />
            </TouchableOpacity>
          </View>
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
              data={filterLikedList}
              renderItem={renderdislikedListItem}
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

export default Dislike;
