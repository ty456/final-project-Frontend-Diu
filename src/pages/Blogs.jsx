import React, { useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([
    {
      title: "What are the benefits of Online Doctor Booking?",
      imageUrl: "/images/blog-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Doccure – Making your clinic painless visit?",
      imageUrl: "/images/bog-1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamcolaborisut aliquip ex ea commodo consequat. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);
  return (
    <Container>
      <Row className="my-5 p-3 d-flex flex-wrap w-100 mx-auto">
        {allBlogs.map((el, id) => {
          return (
            <Col md={6} className="my-2">
              <Card className="p-3">
                <div className=" p-2">
                  <Image
                    src={el?.imageUrl}
                    className="w-100 h-100"
                    alt="image"
                    height={300}
                  />
                </div>
                <h4 className="p-2">{el?.title}</h4>
                <p>{el?.description}</p>
                <a href="#">See more</a>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Blogs;
