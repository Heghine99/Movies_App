import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGE_API} from '../../state-management/configs';
import {useDispatch} from 'react-redux';
import {addLikedListMovies} from '../../state-management/moviesSlice';

const height = Dimensions.get('window').height;

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const [onPress, setOnPress] = useState(false);
  const dispatch = useDispatch();
  // const onPressAdult = item.adult;

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
              dispatch(addLikedListMovies(item));
              setOnPress(!onPress);
            }}>
            <AntDesign
              name="heart"
              size={32}
              style={{color: onPress ? colors.orange : colors.white}}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => {
              dispatch(removeLikedListMovies(item));
            }}>
            <AntDesign name="user" size={32} color={colors.white} />
          </TouchableOpacity> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.4,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -40,
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 10,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.darkGray,
  },
  descriptionVoteAverage: {
    width: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionTitleText: {
    marginBottom: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    fontWeight: '700',
    color: colors.darkGray,
  },
});
