import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {styles} from './detailsStyle';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGE_API} from '../../state-management/configs';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAndRemoveLikedListMovies,
  dislikeListMovies,
  addSaveList,
  addRatingList,
} from '../../state-management/moviesSlice';
import {Rating} from 'react-native-ratings';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const likedList = useSelector(state => state.likedList);
  const disliked = useSelector(state => state.disliked);
  const saveList = useSelector(state => state.SaveList);
  const ratings = useSelector(state => state.ratings);
  const dispatch = useDispatch();

  const ratingCompleted = rating => {
    console.log(rating);
    if (rating > 3) {
      dispatch(addRatingList(item));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: IMAGE_API + item.backdrop_path}}
        style={styles.backgroundImage}>
        <View style={styles.backIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(addAndRemoveLikedListMovies(item));
            }}>
            <AntDesign
              name="heart"
              size={32}
              style={{
                color: likedList.includes(item.id)
                  ? colors.orange
                  : colors.white,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(dislikeListMovies(item));
            }}>
            <AntDesign
              name="dislike1"
              size={32}
              style={{
                color: disliked.includes(item.id)
                  ? colors.orange
                  : colors.white,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(addSaveList(item));
            }}>
            <FontAwesome
              name="bookmark"
              size={32}
              style={{
                color: saveList.includes(item.id)
                  ? colors.orange
                  : colors.white,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <AntDesign name="caretright" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>{item.original_title}</Text>
          <View style={styles.descriptionMoviesDate}>
            <Fontisto name="date" size={20} color={colors.orange} />
            <Text style={styles.descriptionTitleText}>{item.release_date}</Text>
          </View>
          <View style={styles.descriptionVoteAverage}>
            <View style={styles.descriptionItemVoteAverage}>
              <Entypo name="star-outlined" size={20} color={colors.orange} />
              <Text style={styles.descriptionTitleText}>
                {item.vote_average}
              </Text>
            </View>
            <View style={styles.descriptionItemVoteAverage}>
              <AntDesign name="user" size={20} color={colors.orange} />
              <Text style={styles.descriptionTitleText}>{item.vote_count}</Text>
            </View>
            <View style={styles.descriptionItemVoteAverage}>
              <Entypo name="star-outlined" size={20} color={colors.orange} />
              <Text style={styles.descriptionTitleText}>{item.popularity}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.descriptionText}>{item.overview}</Text>
          </View>

          <View style={styles.starCount}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Details;
