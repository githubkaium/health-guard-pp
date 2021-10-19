import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={"https://i.ibb.co/pybPPjF/service-05.png"}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={"https://i.ibb.co/P57F3B5/service-04.png"}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={"https://i.ibb.co/2YVQV9g/service-02.png"}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;