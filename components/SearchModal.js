import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput} from 'react-native';
import {  useDispatch, useSelector } from 'react-redux'
import { selectText, updateText, resetFilter } from '../app/reducers/filtersSlice';
import ColorModalPicker from './ColorModalPicker'
import MakeModalPicker from './MakeModalPicker';
import MinimumYearModalPicker from './MinimumYearModalPicker'
import MaxYearModalPicker from './MaxYearModalPicker';

const SearchModal = ({modalVisible, setModalVisible}) => {

  const dispatch = useDispatch()
  const textInputted = useSelector(selectText)
  const [ text, setText ] = useState(textInputted)

  const reset = () => {
    dispatch(resetFilter())
    setText('')
  }

  useEffect(() => {
    dispatch(updateText(text))
  }, [text]);

  return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Search for your dream rental</Text>
              <TextInput
                style={styles.input}
                onChangeText={setText}
                autoCapitalize={'words'}
                value={textInputted}
                placeholder="Search by make or model"
                clearButtonMode='while-editing'
              />
                  <MakeModalPicker />
                  <ColorModalPicker />
                  <MinimumYearModalPicker />
                  <MaxYearModalPicker />
              <View style={styles.submit}>    
                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={() => {
                      reset()
                    }}
                >
                    <Text style={styles.searchText}>Reset Filters</Text>
                </TouchableOpacity>    
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.searchText}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 60,
    marginBottom: 160,
  },
  modalView: {
    margin: 20,
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "darkgray",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchButton: {
    height: 40,
    width: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 6
  },
  clearButton: {
    height: 40,
    width: 100,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    marginBottom: 10
  },
  searchText: {
    color: 'white'
  },
  submit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 225,
  }
});

export default SearchModal