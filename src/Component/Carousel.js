import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
function Dark() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="./img2.jpg"
          alt="First slide"
          style={{ width: "100%", height: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./img3.jpg"
          alt="Second slide"
          style={{ width: "100%", height: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./img1.jpg"
          alt="Third slide"
          style={{ width: "100%", height: "500px" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="./img4.jpg"
          alt="Third slide"
          style={{ width: "100%", height: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./img5.jpg"
          alt="Third slide"
          style={{ width: "100%", height: "500px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./img6.jpeg"
          alt="Third slide"
          style={{ width: "100%", height: "500px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Dark;
