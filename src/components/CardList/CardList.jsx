import React from "react";
import CardItem from "../CardItem/CardItem";
const car = {
  id: 9582,
  year: 2008,
  make: "Buick",
  model: "Enclave",
  type: "SUV",
  img: "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",
  description:
    "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
  fuelConsumption: "10.5",
  engineSize: "3.6L V6",
  accessories: ["Leather seats", "Panoramic sunroof", "Premium audio system"],
  functionalities: ["Power liftgate", "Remote start", "Blind-spot monitoring"],
  rentalPrice: "$40",
  rentalCompany: "Luxury Car Rentals",
  address: "123 Example Street, Kiev, Ukraine",
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 5858,
};

const CardList = () => {
  return (
    <ul>
      <li>
        <CardItem car={car} />
      </li>
    </ul>
  );
};

export default CardList;
