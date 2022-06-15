import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import {  useDispatch, useSelector } from 'react-redux'
import { selectColor, updateColor } from '../app/reducers/filtersSlice';
import { vehicleColors } from '../utils/filterArrays';


const ColorModalPicker = () => {

  const dispatch = useDispatch()
  const colorSelected = useSelector(selectColor)

    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Vehicle Color:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onOpen('color');
          }}
        >
          <Text>{colorSelected.value}</Text>
        </TouchableOpacity>
        <Picker
          id="color"
          data={vehicleColors}
          searchable={false}
          label="Select Color"
          setSelected={(item) => {
            dispatch(updateColor(item.value))
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
    paddingRight: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  }
   });

export default ColorModalPicker