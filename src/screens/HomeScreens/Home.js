import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../state-management/moviesSlice';
import categoriesIcons from './categoriesIcons';
import Loading from '../../components/loading';
import {getSearchResult} from '../../state-management/searchSlice';
import {styles} from './homeStyle';
import colors from '../../assets/colors/colors';
import profile from './../../assets/images/ProfileImage.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DroppDownSearch from '../../components/DropdownSearch/DropdownSearch';
import FlatListMovies from '../../components/globalComponents/FlatListComponent/FlatListMovies';

const Home = ({navigation}) => {
  const {results} = useSelector(state => state.moviesSlice.posts);
  const searchResults = useSelector(
    state => state.searchSlice.searchResult.results,
  );
  const loading = useSelector(state => state.moviesSlice.loading);
  const dispatch = useDispatch();
  const screenIndex = navigation.getState().index;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [searchResult, setSearchResult] = useState([]);
  const [searching, setSearching] = useState(false);

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

  const handleChangeInput = text => {
    setSearching(true);
    if (text) {
      dispatch(getSearchResult(text));
    } else {
      setSearching(false);
      dispatch(getSearchResult(''));
    }
  };

  return (
    <>
      {loading ? (
        <Loading size={100} />
      ) : (
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
                defaultValue={''}
              />
            </View>
            {searchResult && searching && (
              <DroppDownSearch
                searchResult={searchResults}
                navigation={navigation}
              />
            )}
          </View>

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

          <FlatListMovies
            navigation={navigation}
            results={results}
            screenIndex={screenIndex}
          />
        </ScrollView>
      )}
    </>
  );
};
export default Home;
