import React, {useMemo} from 'react';
import {TouchableOpacity, View, Text, Image, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../../../screens/HomeScreens/homeStyle';
import {IMAGE_API} from '../../../state-management/configs';
import colors from '../../../assets/colors/colors';

const FlatListMovies = ({navigation, RemoveList, list, screenIndex}) => {
  const {results} = useSelector(state => state.moviesSlice.posts);
  const filterList = useMemo(() => {
    return results?.filter(item => list?.includes(item.id));
  }, [results, list]);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
        style={
          screenIndex === 0
            ? {marginLeft: item.id === results[0].id ? 20 : 0}
            : null
        }>
        <View style={styles.moviesItem}>
          <Image
            source={{uri: IMAGE_API + item.backdrop_path}}
            style={styles.itemImage}
            imageStyle={styles.moviesItemImageStyle}
          />
          <Text style={styles.moviesItemTitle}>{item.title}</Text>
          <View style={styles.moviesItembottomTitle}>
            <Text style={styles.moviesItembottomText}>Movie</Text>
            <Text style={styles.moviesItembottomDate}>{item.release_date}</Text>
            {/* {screenIndex !== 0 ? (
              <TouchableOpacity
                onPress={() => {
                  dispatch(RemoveList(item));
                }}>
                <AntDesign
                  name="delete"
                  size={32}
                  style={{
                    color: list.includes(item.id)
                      ? colors.orange
                      : colors.white,
                  }}
                />
              </TouchableOpacity>
            ) : null} */}
          </View>
          {screenIndex === 0 ? (
            <View
              style={[
                styles.moviesItemVoteAverage,
                {
                  backgroundColor:
                    item.vote_average < 5 ? '#EC502E' : '#CEA8A0',
                },
              ]}>
              <Text style={styles.moviesItemVote}>{item.vote_average}</Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={screenIndex === 0 ? results : filterList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal={screenIndex === 0 ? true : false}
      numColumns={screenIndex === 0 ? 0 : 2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default FlatListMovies;
