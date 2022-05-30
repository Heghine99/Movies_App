import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/colors/colors';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.4,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  backIcon: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -40,
    width: 80,
    height: 80,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginHorizontal: 30,
  },
  descriptionMoviesDate: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    // color: colors.black,
    marginVertical: 25,
  },
  descriptionText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.darkGray,
  },
  descriptionItemVoteAverage: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  descriptionVoteAverage: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionTitleText: {
    marginLeft: 10,
    marginBottom: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 19,
    fontWeight: '700',
    color: colors.darkGray,
    alignItems: 'center',
  },
  starCount: {
    // backgroundColor: colors.gray,
    marginBottom: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
});
