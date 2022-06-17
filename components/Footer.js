import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Your next adventure awaits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
   fontWeight: 'bold',
   fontSize: 15
  }
});

export default Footer