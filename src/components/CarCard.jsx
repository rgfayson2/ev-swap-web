import Card from "react-bootstrap/Card"

export default function CarCard({ carObj }) {
  return (
    <Card className="card-container">
      <Card.Body
        style={{ height: "400px", backgroundColor: "#999" }}
        className="d-flex flex-column align-items-center"
      >
        <div className="cp-container">
          <Card.Title>Make: {carObj.make}</Card.Title>
          <br />
          <Card.Text>{carObj.model}</Card.Text>
          <br />
          <Card.Text>{carObj.year}</Card.Text>
          <br />
          <Card.Text>{carObj.color}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}
