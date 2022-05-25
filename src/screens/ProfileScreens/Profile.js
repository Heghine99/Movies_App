import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import colors from '../../assets/colors/colors';
import profile from './../../assets/images/ProfileImage.jpg';
import {styles} from './profileStyle';

const Profile = ({navigation}) => {
  const {results} = useSelector(state => state.moviesSlice.posts);
  const likedList = useSelector(state => state.moviesSlice.likedList);
  const disliked = useSelector(state => state.moviesSlice.disliked);
  const SaveList = useSelector(state => state.moviesSlice.SaveList);
  const ratings = useSelector(state => state.moviesSlice.ratings);

  return (
    <SafeAreaView>
      <View style={styles.profileHeaderStyle}>
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Save')}>
            <Entypo name="chevron-left" size={32} color={colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileImage}>
          <Image source={profile} style={styles.profileImageStyle} />
        </View>
        <View style={styles.profileUserName}>
          <Text style={styles.profileUserNameText}>Heghine Azatyan</Text>
          <TouchableOpacity>
            <Text style={styles.profileUserMail}>
              heghine.azatyan99@gmail.com
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileFollowers}>
          <View style={styles.profileFollowersMovies}>
            <Text style={styles.profileFollowersMoviesCount}>
              {results.length}
            </Text>
            <Text style={styles.profileFollowersMoviesText}>movies</Text>
          </View>
          <View style={styles.profileFollowersMovies}>
            <Text style={styles.profileFollowersMoviesCount}>151</Text>
            <Text style={styles.profileFollowersMoviesText}>followers</Text>
          </View>
          <View style={styles.profileFollowersMovies}>
            <Text style={styles.profileFollowersMoviesCount}>204</Text>
            <Text style={styles.profileFollowersMoviesText}>following</Text>
          </View>
        </View>
      </View>

      <View style={styles.profileMymovies}>
        <TouchableOpacity onPress={() => navigation.navigate('Save')}>
          <View style={styles.profileMymoviesTitle}>
            <View style={styles.profileMymoviesItem}>
              <Ionicons
                name="md-bookmark-outline"
                size={27}
                color={colors.orange}
              />
              <Text style={styles.profileMymoviesItemText}>Want to watch</Text>
            </View>
            <View style={styles.profileMymoviesCount}>
              <Text style={styles.profileMymoviesTextCount}>
                {SaveList.length}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
          <View style={styles.profileMymoviesTitle}>
            <View style={styles.profileMymoviesItem}>
              <Entypo name="star-outlined" size={27} color={colors.orange} />
              <Text style={styles.profileMymoviesItemText}>
                Ratings and reviews
              </Text>
            </View>
            <View style={styles.profileMymoviesCount}>
              <Text style={styles.profileMymoviesTextCount}>
                {ratings.length}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Liked')}>
          <View style={styles.profileMymoviesTitle}>
            <View style={styles.profileMymoviesItem}>
              <AntDesign name="hearto" size={27} color={colors.orange} />
              <Text style={styles.profileMymoviesItemText}>Liked List</Text>
            </View>
            <View style={styles.profileMymoviesCount}>
              <Text style={styles.profileMymoviesTextCount}>
                {likedList.length}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dislike')}>
          <View style={styles.profileMymoviesTitle}>
            <View style={styles.profileMymoviesItem}>
              <AntDesign name="dislike2" size={27} color={colors.orange} />
              <Text style={styles.profileMymoviesItemText}>Disliked List</Text>
            </View>
            <View style={styles.profileMymoviesCount}>
              <Text style={styles.profileMymoviesTextCount}>
                {disliked.length}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Profile;
