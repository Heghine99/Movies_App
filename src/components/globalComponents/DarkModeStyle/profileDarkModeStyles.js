import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export const darkModeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#2D3035',
    height: '100%',
  },
  profileHeaderStyle: {
    backgroundColor: colors.gray,
    borderBottomLeftRadius: 100,
    paddingVertical: 30,
  },
  descriptionWrapper: {
    width: '100%',
    backgroundColor: '#2D3035',
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 25,
  },
});
