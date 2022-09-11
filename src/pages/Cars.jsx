import Carousel from "react-bootstrap/Carousel"
import CarCard from "../components/CarCard"
import { useEffect,useState } from "react"
import { Button } from "react-bootstrap"

export default function Cars() {
  const [cars, setCars] = useState([])

  const handleSelectedCar = (car) => {
    console.log(car)
  }

  useEffect(() => {
    fetch("http://localhost:4000/cars")
      // fetch("https://https://ev-swap-api.web.app//cars")
      .then((results) => results.json())
      .then((data) => setCars(data))
      .catch(console.error)
  }, []);

  return (
    <div className="carousel-background">
      <div></div>
      <Carousel
        className="container"
        variant="light"
        slide={false}
        interval={null}
      >
        {cars.map((car, id) => (
          <Carousel.Item key={id}>
            <CarCard carObj={car} />

            <Carousel.Caption>
              <Button
                className="cp-btn"
                variant="outline-light"
                onClick={() => handleSelectedCar(car)}
              >
                Select Car
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
       </Carousel>
    </div>
  )
}
