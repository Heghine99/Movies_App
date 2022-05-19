import React, {useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  Image,
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

import {styles} from './homeStyle';
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
          style={[styles.categoriesItem, {marginLeft: item.id === 1 ? 20 : 0}]}>
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

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
        style={[styles.moviItem, {marginLeft: item.id === 675353 ? 20 : 0}]}>
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
        // const searchResult = results.filter(item => {
        //   return item.original_title.includes(text);
        // });
        setSearchResult(
          results.filter(item => {
            return item.original_title.includes(text);
          }),
        );
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
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={profile} style={styles.profileImage} />
          </TouchableOpacity>
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

      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};
export default Home;
