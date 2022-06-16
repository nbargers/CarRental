import axios from 'axios';


export const fetchByMake = async (make) => {

    const response = await axios.get(`https://myfakeapi.com/api/cars/name/${make}`);
    return response.data.cars;

}

export const fetchByColor = (color) => {
    axios.get(`https://myfakeapi.com/api/cars/color/${color}`)
    .then(function (response) {
        console.log('success color')
     return (response.data.cars)
    })
    .catch( function (error) {
      console.log('error', error)
      return []
    })
}

export const fetchByYear = (year) => {
    axios.get(`https://myfakeapi.com/api/cars/year/${year}`)
    .then(function (response) {
        console.log('success year')
     return (response.data.cars)
    })
    .catch( function (error) {
      console.log('error', error)
      return []
    })
}

export const fetchByMinimumYear = (minYear) => {
    axios.get(`https://myfakeapi.com/api/cars/year/${minYear}?q=lt`)
    .then(function (response) {
        console.log('success min')
     return (response.data.cars)
    })
    .catch( function (error) {
      console.log('error', error)
      return []
    })
}

export const fetchByMaxYear = (maxYear) => {
    axios.get(`https://myfakeapi.com/api/cars/year/${maxYear}?q=gt`)
    .then(function (response) {
        console.log('success max')

     return (response.data.cars)
    })
    .catch( function (error) {
      console.log('error', error)
      return []
    })
}

export const fetchAllCars = async () => {

    const response = await axios.get('https://myfakeapi.com/api/cars/');
    return response.data.cars;
}