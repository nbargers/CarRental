import { useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, ActivityIndicator} from 'react-native';
import {  useDispatch, useSelector } from 'react-redux'
import Car from './Car';
import { selectCarList, updateCarsList, fetchCars, selectCarStatus } from '../app/reducers/carSlice';
import { selectAllFilters } from '../app/reducers/filtersSlice';
import Loading from './Loading';
import NoCars from './NoCars';

const CarList = () => {
  const dispatch = useDispatch()
  const carsArray = useSelector(selectCarList)
  const status = useSelector(selectCarStatus)
  const filters = useSelector(selectAllFilters)


  useEffect(() => {
    refreshArray(filters)
  }, [filters]);

  useEffect(() => {
    filterArray(filters, status)
  }, [status]);

  const refreshArray = () => {
    dispatch(fetchCars())
  }

  const filterArray = (filters, status) => {
    if (!status) {
      let arrayToFilter = carsArray

      //filter for make
      if (filters.make.status){
        const filteredArr = carsArray.filter(el => el.car === filters.make.value)
       arrayToFilter = arrayToFilter.filter(el => el.car === filters.make.value)
      }

      //filter for color
      if (filters.color.status) {
        arrayToFilter = arrayToFilter.filter(el => el.car_color === filters.color.value)
      }

      arrayToFilter = arrayToFilter.filter(el => el.car_model_year >= filters.minimumYear.value)

      arrayToFilter = arrayToFilter.filter(el => el.car_model_year <= filters.maxYear.value)

      if (filters.text.value) {
        arrayToFilter = arrayToFilter.filter(el => (el.car_color === filters.text.value || el.car === filters.text.value || el.car_model_year === filters.text.value))
      }

      dispatch(updateCarsList(arrayToFilter))
    }
  }

  return (
    <>
    {status && (<Loading />)}
    {!status && carsArray[0] && (
      <View style={styles.cars}>
        <Text style={styles.text}>Rental Cars Near You:</Text>
        <FlatList data={carsArray} renderItem={Car} keyExtractor={item => item.id}/>
      </View>
    )}
    {!status && !carsArray[0] && (<NoCars />)}
    </>
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