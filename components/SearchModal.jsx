import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput} from 'react-native';

const SearchModal = ({modalVisible, setModalVisible}) => {

  const [ text, setText ] = useState(null)
  return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
        }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Search for your next vehicle</Text>
              <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Search by make or model"
                clearButtonMode='while-editing'
              />
              <View>
                <Text>Make</Text>
                <Text>Model</Text>
                <Text>Year</Text>
                <Text>Price</Text>
              </View>
              <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
              >
                  <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
        </View>
        </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchModal