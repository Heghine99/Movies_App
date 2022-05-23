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
import colors from './../../assets/colors/colors';
import {styles} from './../LikedScreens/likedStyle';
import {useDispatch, useSelector} from 'react-redux';
import {IMAGE_API} from '../../state-management/configs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {addAndRemoveLikedListMovies} from '../../state-management/moviesSlice';
import Entypo from 'react-native-vector-icons/Entypo';

const Rating = ({navigation}) => {
  const {results} = useSelector(state => state.posts);
  const ratings = useSelector(state => state.ratings);
  const filterLikedList = useMemo(() => {
    return results.filter(item => ratings.includes(item.id));
  }, [results, ratings]);

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
            <TouchableOpacity
              onPress={() => {
                dispatch(addAndRemoveLikedListMovies(item));
              }}>
              <AntDesign
                name="delete"
                size={32}
                style={{
                  color: ratings.includes(item.id)
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={colors.black} />
          </TouchableOpacity>
          {/* Movies */}
          <View style={styles.moviesContainer}>
            <FlatList
              data={filterLikedList}
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

export default Rating;
