import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../assets/colors/colors';

const BackIcon = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.backIcon}>
        <Entypo name="chevron-left" size={32} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  backIcon: {
    marginLeft: 20,
    marginTop: 10,
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
