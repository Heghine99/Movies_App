import React, {useContext, useMemo} from 'react';
import {TouchableOpacity, View, Text, Image, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../../../screens/../components/globalComponents/FlatListComponent/FlatListStyles';
import {IMAGE_API} from '../../../state-management/configs';
import colors from '../../../assets/colors/colors';
import {DarkModeContext} from '../../Context/context';

const FlatListMovies = ({navigation, list, deletList, screenName}) => {
  const {results} = useSelector(state => state.moviesSlice.posts);
  const filterList = useMemo(() => {
    return results?.filter(item => list?.includes(item.id));
  }, [results, list]);
  const dispatch = useDispatch();
  const {mode} = useContext(DarkModeContext);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
        style={
          screenName ? {marginLeft: item.id === results[0].id ? 20 : 0} : null
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
            {screenName ? (
              <TouchableOpacity
                onPress={() => {
                  dispatch(deletList(item));
                }}>
                <AntDesign
                  name="delete"
                  size={32}
                  style={{
                    color: list?.includes(item.id)
                      ? colors.orange
                      : colors.white,
                  }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
          {screenName ? (
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
    <View>
      <FlatList
        data={screenName ? results : filterList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={screenName ? true : false}
        // numColumns={screenIndex === 0 ? 0 : 2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatListMovies;
