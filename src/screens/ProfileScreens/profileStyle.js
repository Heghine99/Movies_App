import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    white: '100%',
    // backgroundColor: colors.white,
  },
  profileHeaderStyle: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 100,
    paddingVertical: 30,
  },
  profileHeader: {
    marginTop: 10,
    paddingLeft: 10,
  },
  drakMode: {
    flexDirection: 'row-reverse',
  },
  profileImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageStyle: {
    width: 120,
    height: 120,
    borderRadius: 130,
  },
  profileUserName: {
    alignItems: 'center',
  },
  profileUserNameText: {
    marginVertical: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 26,
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
  profileMymovies: {
    height: 200,
    marginVertical: 20,
    marginHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profileMymoviesTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileMymoviesItem: {
    width: 200,
    flexDirection: 'row',

    alignItems: 'center',
  },
  profileMymoviesCount: {
    width: 40,
    height: 40,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#CEA8A0',
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileMymoviesItemText: {
    marginLeft: 20,
    alignItems: 'center',
    // fontWeight: '700',
    fontSize: 18,
    color: colors.darkGray,
  },
  profileMymoviesTextCount: {
    fontFamily: 'Lato-Bold',
    fontWeight: '700',
    fontSize: 16,
    color: colors.black,
  },
});
