export const setToLocal = (car) => {
  const localData = localStorage.getItem("cars");
  let cars = localData ? JSON.parse(localData) : [];

  const existingCarIndex = cars.findIndex((localCar) => localCar.id === car.id);

  if (existingCarIndex === -1) {
    
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));
  }
};
