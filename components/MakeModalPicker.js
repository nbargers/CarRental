import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import {  useDispatch, useSelector } from 'react-redux'
import { selectMake, updateMake } from '../app/reducers/filtersSlice';
import { vehicleMakes } from '../utils/filterArrays';


const MakeModalPicker = () => {

  const dispatch = useDispatch()
  const makeSelected = useSelector(selectMake)

    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>Vehicle Make:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onOpen('makes');
          }}
        >
          <Text>{makeSelected.value}</Text>
        </TouchableOpacity>
        <Picker
          id="makes"
          data={vehicleMakes}
          searchable={false}
          label="Select Make"
          setSelected={(item) => {
            dispatch(updateMake(item.value))
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

export default MakeModalPicker