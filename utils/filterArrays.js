export const vehicleColors = [
    {name: 'Any', value: 'Any'},
    {name: 'Red', value: 'Red'},
    {name: 'Yellow', value: 'Yellow'},
    {name: 'Green', value: 'Green'},
    {name: 'Blue', value: 'Blue'},
    {name: 'Gold', value: 'Gold'},
    {name: 'White', value: 'White'},
    {name: 'Black', value: 'Black'},
    {name: 'Grey', value: 'Grey'},
    {name: 'Silver', value: 'Silver'}
]

export const vehicleColorsName = [
    {name: 'Any'},
    {name: 'Red'},
    {name: 'Yellow'},
    {name: 'Green'},
    {name: 'Blue'},
    {name: 'Gold'},
    {name: 'White'},
    {name: 'Black'},
    {name: 'Grey'},
    {name: 'Silver'}
]

export const vehicleColorsArray = [
    'Any', 'Red', 'Yellow', 'Green', 'Blue', 'Gold', 'White', 'Black', 'Grey', 'Silver'
]

export const vehicleMakes = [
    {name: 'Any', value: 'Any'},
    {name: 'ACG', value: 'ACG'},
    {name: 'Acura', value: 'Acura'},
    {name: 'Alfa Romero', value: 'Alfa Romero'},
    {name: 'Aston Martin', value: 'Aston Martin'},
    {name: 'Audi', value: 'Audi'},
    {name: 'BMW', value: 'BMW'},
    {name: 'Bentley', value: 'Bentley'},
    {name: 'Buick', value: 'Buick'},
    {name: 'Cadillac', value: 'Cadillac'},
    {name: 'Chevrolet', value: 'Chevrolet'},
    {name: 'Chrysler', value: 'Chrysler'},
    {name: 'Dodge', value: 'Dodge'},
    {name: 'Ferrari', value: 'Ferrari'},
    {name: 'Ford', value: 'Ford'},
    {name: 'GMC', value: 'GMC'},
    {name: 'Genesis', value: 'Genesis'},
    {name: 'Harley-Davidson', value: 'Harley-Davidson'},
    {name: 'Honda', value: 'Honda'},
    {name: 'Hummer', value: 'Hummer'},
    {name: 'Hyundai', value: 'Hyundai'},
    {name: 'Infiniti', value: 'Infiniti'},
    {name: 'Jaguar', value: 'Jaguar'},
    {name: 'Jeep', value: 'Jeep'},
    {name: 'Kia', value: 'Kia'},
    {name: 'Lamborghini', value: 'Lamborghini'},
    {name: 'Land Rover', value: 'Land Rover'},
    {name: 'Lexus', value: 'Lexus'},
    {name: 'Lincoln', value: 'Lincoln'},
    {name: 'Maserati', value: 'Maserati'},
    {name: 'Mazda', value: 'Mazda'},
    {name: 'McLaren', value: 'McLaren'},
    {name: 'Mercedes-Benz', value: 'Mercedes-Benz'},
    {name: 'Mini', value: 'Mini'},
    {name: 'Mitsubishi', value: 'Mitsubishi'},
    {name: 'Nissan', value: 'Nissan'},
    {name: 'Polaris', value: 'Polaris'},
    {name: 'Polestar', value: 'Polestar'},
    {name: 'Pontiac', value: 'Pontiac'},
    {name: 'Porsche', value: 'Porsche'},
    {name: 'Ram', value: 'Ram'},
    {name: 'Rolls-Royce', value: 'Rolls-Royce'},
    {name: 'SLINGSHOT', value: 'SLINGSHOT'},
    {name: 'Scion', value: 'Scion'},
    {name: 'Smart', value: 'Smart'},
    {name: 'Subaru', value: 'Subaru'},
    {name: 'Suzuki', value: 'Suzuki'},
    {name: 'Tesla', value: 'Tesla'},
    {name: 'Toyota', value: 'Toyota'},
    {name: 'VANDERHALL MOTOR WORKS', value: 'VANDERHALL MOTOR WORKS'},
    {name: 'Volkswagen', value: 'Volkswagen'},
    {name: 'Volvo', value: 'Volvo'},
]


export const filterByReference = (arr1, arr2) => {
    let res = [];
      res = arr1.filter(el => {
      return arr2.find(element => {
        return element.id === el.id;
      });
      });
    return res;
  }