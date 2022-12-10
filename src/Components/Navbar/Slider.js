import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1800}>
        <img
          className="d-block w-100 "
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_3_2000x.gif?v=1660741182"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1800}>
        <img
          className="d-block w-100 blur"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web-banner-shop-now_2_f29ea286-44e1-4022-aa8f-fcd2d3d0bc0c_2000x.jpg?v=1659763025"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone-banner_1_2000x.jpg?v=1659681411"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1800}>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A121-website-banner_3_2000x.jpg?v=1659936537"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

