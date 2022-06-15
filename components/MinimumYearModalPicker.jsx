import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import {  useDispatch, useSelector } from 'react-redux'
import { selectMaxYear, selectMinimumYear, updateMinimumYear } from '../app/reducers/filtersSlice';


const MinimumYearModalPicker = () => {

  const dispatch = useDispatch()
  const minimumYearSelected = useSelector(selectMinimumYear)
  const maxYearSelected = useSelector(selectMaxYear)

  const calculateYears = (max) => {
    const arr = []

    for (let i = 1950; i <= max; i++) {
      arr.push({name: i, value: i})
    }

    return arr
  }

  const availableYears = calculateYears(maxYearSelected.value)

    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Minimum Year:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onOpen('minimumYear');
          }}
        >
          <Text>{minimumYearSelected.value}</Text>
        </TouchableOpacity>
        <Picker
          id="minimumYear"
          data={availableYears}
          searchable={false}
          label="Select Minimum Year"
          setSelected={(item) => {
            dispatch(updateMinimumYear(item.value))
          }}
        />
    </View>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8B93A5',
    padding: 10,
    borderRadius: 6,
    alignContent:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 150
  },
  labelText: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,

  }
   });

export default MinimumYearModalPicker