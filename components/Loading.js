import * as React from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';

const Loading = () => {

  return (
    <View style={styles.loading}>
        <ActivityIndicator size='large'/>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading