import { StyleSheet, Text, View, Image} from 'react-native';
import car from '../assets/car.png'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={car}/>
      <Text style={styles.company}>CarsToGo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  image: {
    height: 100,
    width: 100 
  },
  company: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Thonburi'
  }
});

export default Header