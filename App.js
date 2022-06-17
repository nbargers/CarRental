import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import  store  from './app/store';
import Header from './components/Header';
import SearchButton from './components/SearchButton';
import CarList from './components/CarList';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Provider store={store}>
          <Header />
          <SearchButton />  
          <CarList />
          <Footer />
        </Provider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
});

export default App
