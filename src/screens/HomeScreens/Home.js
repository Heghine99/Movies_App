import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../state-management/moviesSlice';
import categoriesIcons from './categoriesIcons';

import colors from '../../assets/colors/colors';
import profile from './../../assets/images/ProfileImage.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IMAGE_API} from '../../state-management/configs';
import DroppDownSearch from '../../components/DropdownSearch/DropdownSearch';

const Home = ({navigation}) => {
  const {results} = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  // console.log(results)

  const [text, setText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false);
  // const resultWithSearch = useMemo(() => {
  //   setTimeout(() => {
  //     const searchResult = results.filter(item => {
  //       return item.original_title.includes(text);
  //     });
  //     setSearchResult(searchResult);
  //     console.log(searchResult);
  //   }, 5000);
  // }, [results, text]);
  const renderCategoriesItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View
          style={[
            styles.categoriesItem,
            {marginLeft: item.id === 'activities-1' ? 20 : 0},
          ]}>
          <MaterialCommunityIcons
            name={item.iconName}
            size={40}
            color={colors.black}
          />
          <Text style={styles.categoriesItemText}>{item.categoria}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  console.log(searchResult);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
        style={[
          styles.moviItem,
          {marginLeft: item.id === 'activities-1' ? 20 : 0},
        ]}>
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
          <View
            style={[
              styles.moviesItemVoteAverage,
              {backgroundColor: item.vote_average < 5 ? '#EC502E' : '#CEA8A0'},
            ]}>
            <Text style={styles.moviesItemVote}>{item.vote_average}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const handleChangeInput = text => {
    if (text) {
      setText(text);
      setSearching(true);
      setTimeout(() => {
        const searchResult = results.filter(item => {
          return item.original_title.includes(text);
        });
        setSearchResult(searchResult);
        // console.log(searchResult);
      }, 3000);
    } else {
      setSearching(false);
    }
  };

  return (
    <ScrollView>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.menuMovies}>
          <View style={styles.ProfilUser}>
            <Text style={styles.ProfilUserName}>Hello Heghine</Text>
            <Text style={styles.ProfilUserText}>Let's watch today </Text>
          </View>
          <Image source={profile} style={styles.profileImage} />
        </View>
      </SafeAreaView>
      {/* Search */}
      <View style={styles.searchMovie}>
        <View style={styles.searchMovieInput}>
          <AntDesign name="search1" size={28} color={colors.black} />
          <TextInput
            style={styles.textInput}
            placeholder="Search Movies"
            onChangeText={handleChangeInput}
            defaultValue={text}
          />
        </View>
      </View>
      {searching && (
        <DroppDownSearch searchResult={searchResult} navigation={navigation} />
      )}
      {/* Categories */}
      <View style={styles.moviesCategories}>
        <View style={styles.moviesCategoriesTitle}>
          <Text style={styles.moviesCategoriesTitleText}>Categories</Text>
          <Text>See All</Text>
        </View>
        <View style={styles.moviesCategoriesItem}>
          <FlatList
            data={categoriesIcons}
            renderItem={renderCategoriesItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* New Moview */}

      <ScrollView>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    color: colors.white,
    flex: 1,
  },
  menuMovies: {
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ProfilUserName: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
  },
  ProfilUserText: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: colors.darkGray,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  // Search

  searchMovie: {
    marginHorizontal: 30,
  },
  ItemView: {
    // height: 50,
    backgroundColor: colors.gray,
    paddingTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  inputItemText: {
    width: 240,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  searchMovieInput: {
    marginTop: 20,
    paddingLeft: 15,
    paddingVertical: 8,
    backgroundColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  subContainer: {
    // height: 160,
    flex: 1,
    alignItems: 'center',
  },
  searchImage: {
    borderRadius: 5,
  },
  textInput: {
    marginLeft: 5,
  },
  searchItemImage: {
    width: 40,
    height: 40,
  },
  moviesCategories: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  moviesCategoriesTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moviesCategoriesTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
  },
  moviesCategoriesItem: {
    paddingVertical: 20,
  },
  categoriesItem: {
    width: 80,
    height: 90,
    backgroundColor: colors.gray,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
  },
  categoriesItemText: {
    ontFamily: 'Lato-Bold',
    fontSize: 12,
    fontWeight: '700',
    color: colors.darkGray,
  },
  newMovies: {
    marginHorizontal: 30,
  },
  moviesItem: {
    marginTop: 20,
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginRight: 20,
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
  moviesItemVoteAverage: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: -12,
    left: 155,
    borderRadius: 20,
    alignItems: 'center',
    padding: 6,
  },
  moviesItemVote: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
});
