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
    borderRadius: 25,
  },
  backIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -40,
    width: 80,
    height: 80,
    backgroundColor: colors.white,
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
    marginTop: 30,
    marginHorizontal: 30,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 10,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.darkGray,
  },
  descriptionVoteAverage: {
    width: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionTitleText: {
    marginBottom: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    fontWeight: '700',
    color: colors.darkGray,
  },
});
