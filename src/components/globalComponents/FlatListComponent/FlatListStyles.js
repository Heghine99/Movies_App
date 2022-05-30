import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  moviesItem: {
    marginHorizontal: 13,
    height: 340,
    marginTop: 20,
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 160,
    height: 240,
    borderRadius: 10,
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
  moviesItemVote: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  // moviesContainer: {
  //   // marginHorizontal: 15,
  // },
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
});
