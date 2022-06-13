import { useEffect } from 'react';
import { StyleSheet, FlatList, View, Text} from 'react-native';
import {  useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Car from './Car';
import { selectCarList, updateCarsList } from '../app/reducers/carSlice';

const CarList = () => {
  const dispatch = useDispatch()
  const carsArray = useSelector(selectCarList)

 let testArray = [] 
 const getCars = () => {
    axios.get('https://myfakeapi.com/api/cars/')
    .then(function (response) {
      dispatch(updateCarsList(response.data.cars))
    })
    .catch( function (error) {
      console.log('error', error)
    })
  }

  //get inital array of cars
  useEffect(() => {
    getCars()
  }, []);

  return (
    <View style={styles.cars}>
      <Text style={styles.text}>Rental Cars Near You:</Text>
      <FlatList data={carsArray} renderItem={Car} keyExtractor={item => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  cars: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  text: {
    fontWeight: 'bold',
    paddingBottom: 10.
  }
});

export default CarList