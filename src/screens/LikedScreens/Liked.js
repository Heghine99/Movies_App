import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from 'react-native';

import {styles} from './likedStyle';
import {useSelector} from 'react-redux';
import {IMAGE_API} from '../../state-management/configs';

const Liked = ({navigation}) => {
  const likedList = useSelector(state => state.likedList);
  console.log(likedList, 'likkkk');
  // const dispatch = useDispatch();
  const renderLikedListItem = ({item}) => {
    console.log(item.onPress);

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
              data={likedList}
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

export default Liked;
