import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

const NoFoundList = list => {
  return (
    <View style={styles.NoFoundListTitle}>
      <Text style={styles.NoFoundListText}>
        You don't have {list.list} movies
      </Text>
    </View>
  );
};

export default NoFoundList;

const styles = StyleSheet.create({
  NoFoundListTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  NoFoundListText: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.orange,
  },
});
