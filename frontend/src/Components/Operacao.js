import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import photo2 from "../photo2.JPG";
import photo4 from "../photo4.JPG";
import photo6 from "../photo6.JPG";
import photo7 from "../photo7.JPG";

class Operacao extends React.Component {
  render() {
    return (
      <>
        <div className="hero text-center mb-4" id="operacao">
          <h1 className="text-light">Nossa Operação</h1>
          <h2 className="text-muted">Fotos reais de nossa operação</h2>
        </div>

        <div className="d-flex flex-column align-items-md-center">
          <div className="col text-justify">
            <Carousel>
              <Carousel.Item className="carousel">
                <Image
                  rounded
                  fluid
                  className="img-fluid pt-5 rounded mx-auto d-block  photo"
                  src={photo7}
                  alt="foto da estante de servidores"
                />
              </Carousel.Item>

              <Carousel.Item>
                <Image
                  rounded
                  fluid
                  className="img-fluid pt-5 rounded mx-auto d-block  photo"
                  src={photo2}
                  alt="foto da estante mais perto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  rounded
                  fluid
                  className="img-fluid pt-5 rounded mx-auto d-block  photo"
                  src={photo6}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  rounded
                  fluid
                  className="img-fluid pt-5 rounded mx-auto d-block  photo"
                  src={photo4}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default Operacao;
