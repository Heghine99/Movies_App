import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  moviesItem: {
    marginTop: 20,
    marginHorizontal: 13,
    backgroundColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 160,
    height: 240,
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
  moviesContainer: {
    marginHorizontal: 15,
  },
});
