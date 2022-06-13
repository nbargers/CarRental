import axios from 'axios';

export const fetchCars = async () => {
    axios.get('https://myfakeapi.com/api/cars/')
    .then(function (response) {
        return {
            kind: 'success',
            body: response.data.cars}
      })
      .catch( function (error) {
        return {
            kind: 'failure'
        }
      })
}