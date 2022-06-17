import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import {  useDispatch, useSelector } from 'react-redux'
import { selectMaxYear, selectMinimumYear, updateMaxYear } from '../app/reducers/filtersSlice';

const MaxYearModalPicker = () => {

  const dispatch = useDispatch()
  const minimumYearSelected = useSelector(selectMinimumYear)
  const maxYearSelected = useSelector(selectMaxYear)

  const calculateYears = (min) => {
    const arr = []

    for (let i = 2022; i >= min; i--) {
      arr.push({name: i, value: i})
    }

    return arr
  }

  const availableYears = calculateYears(minimumYearSelected.value)


    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Max Year:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onOpen('maxYear');
          }}
        >
          <Text>{maxYearSelected.value}</Text>
        </TouchableOpacity>
        <Picker
          id="maxYear"
          data={availableYears}
          searchable={false}
          label="Select Max Year"
          setSelected={(item) => {
            dispatch(updateMaxYear(item.value))
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
    justifyContent: 'space',
    paddingBottom: 15,
    width: 195,
  }
   });

export default MaxYearModalPicker