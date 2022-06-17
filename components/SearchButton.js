import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import SearchModal from './SearchModal';

const SearchButton = () => {
   const [ modalVisible, setModalVisible ] = useState(false)

  return (
   <>
     <TouchableOpacity style={styles.button} title="Search for Cars" onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.searchText}>Search for Cars</Text>
        <Icon name="search" size={15} color='white'/>
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
    backgroundColor: 'black',
    width: 175,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
  },
  searchText: {
    color: 'white'
  }
});

export default SearchButton