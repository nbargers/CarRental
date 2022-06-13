import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import SearchModal from './SearchModal';

const SearchButton = () => {
   const [ modalVisible, setModalVisible ] = useState(false)

  return (
   <>
     <TouchableOpacity style={styles.button} title="Search for Cars" onPress={() => setModalVisible(!modalVisible)}>
        <Text>Search for Cars</Text>
        <Icon name="search" size={15}/>
     </TouchableOpacity>
     <SearchModal modalVisible={modalVisible} setModalVisible={setModalVisible}/> 
   </> 
  );
}

const styles = StyleSheet.create({
 button: {
    flexDirection: 'row',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    width: 300,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default SearchButton