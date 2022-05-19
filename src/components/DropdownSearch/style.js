import {StyleSheet} from 'react-native';

export const styleSheet = StyleSheet.create({
  itemImage: {
    width: 160,
    height: 240,
  },
  modalHeight: {
    height: 240,
  },
  inputItemText: {
    width: 240,
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
  headerStyle: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#CEA8A0',
  },
  ItemView: {
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
