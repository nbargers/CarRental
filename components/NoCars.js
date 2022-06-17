import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NoCars = () => {

  return (
    <View style={styles.noCars}>
        <Text style={styles.heading}>No Cars Found</Text>
        <Text>Adjust your filters to find more cars near you!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noCars: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },

});

export default NoCars