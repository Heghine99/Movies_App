import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import profile from './../../assets/images/ProfileImage.jpg';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.profileHeaderStyle}>
        <View style={styles.profileHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <Text style={styles.profileFollowersMoviesCount}>196</Text>
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
      <View>
        <Text>My movies</Text>
        <View>
          <Text>Want to watch</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  profileHeaderStyle: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 100,
    paddingBottom: 25,
  },
  profileHeader: {
    marginTop: 10,
    paddingLeft: 10,
  },
  profileImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 130,
  },
  profileUserName: {
    alignItems: 'center',
  },
  profileUserNameText: {
    marginVertical: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    fontWeight: '700',
    color: colors.black,
  },
  profileUserMail: {
    marginBottom: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    fontWeight: '700',
    color: colors.darkGray,
  },
  profileFollowers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  profileFollowersMovies: {
    alignItems: 'center',
    marginVertical: 10,
    borderRightColor: colors.black,
  },
  profileFollowersMoviesCount: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    fontWeight: '700',
    color: colors.darkGray,
  },
  profileFollowersMoviesText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.darkGray,
  },
});
