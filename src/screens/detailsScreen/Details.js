import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {styles} from './detailsStyle';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGE_API} from '../../state-management/configs';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAndRemoveLikedListMovies,
  dislikeListMovies,
} from '../../state-management/moviesSlice';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const likedList = useSelector(state => state.likedList);
  const disliked = useSelector(state => state.disliked);
  const dispatch = useDispatch();
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
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <AntDesign name="caretright" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>{item.original_title}</Text>
          <Text style={styles.descriptionTitleText}>
            Popularity / {item.popularity}
          </Text>
          <Text style={styles.descriptionTitleText}>
            Release date / {item.release_date}
          </Text>
          <View style={styles.descriptionVoteAverage}>
            <Entypo name="star-outlined" size={20} color={colors.orange} />
            <Text style={styles.descriptionTitleText}>{item.vote_average}</Text>
          </View>

          <Text style={styles.descriptionText}>{item.overview}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Details;
