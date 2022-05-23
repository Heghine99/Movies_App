import {StyleSheet} from 'react-native';

export const styleSheet = StyleSheet.create({
  itemImage: {
    width: 160,
    height: 240,
  },
  modalHeight: {
    width: 340,
    height: 240,
  },
  inputItemText: {
    width: 210,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  searchItemImage: {
    width: 40,
    height: 40,
  },
  searchImage: {
    borderRadius: 5,
  },
  inputItemTitle: {
    width: 210,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStyle: {
    height: 45,
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#CEA8A0',
  },
  ItemView: {
    // width: 250,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'gray',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
});
