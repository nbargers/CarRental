import { StyleSheet, Text, View, Image} from 'react-native';

const Car = ({ item }) => {  

  return (
    <View style={styles.car}>
        <Image style={styles.image} source={{uri: 'https://picsum.photos/350/200'}}/>
        <View style={styles.info}>
            <View>
                <Text style={styles.infoText}>{item.car_model_year} {item.car}</Text>
                <Text style={styles.infoText}>{item.car_model}</Text>
            </View>
             <View style={styles.book}>
                <Text style={styles.bookText}>
                   Book- {(Number(item.price.replace(/[^0-9.-]+/g,""))/10).toFixed(2)}/ per day
                </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  car: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 350,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    width: 350,
    paddingVertical: 10,
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  bookText: {
    color: 'white',
    fontWeight: 'bold',
  },
  book: {
    padding: 10,
    backgroundColor: 'dimgrey'
  }
});

export default Car