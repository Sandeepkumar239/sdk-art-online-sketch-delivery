import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/charcoal-img.png";
import categoryImg02 from "../../../assets/images/color-img.png";
import categoryImg03 from "../../../assets/images/achrylic-img.png";
import categoryImg04 from "../../../assets/images/oil-img.png";
import categoryImg05 from "../../../assets/images/digital-img.png";
import categoryImg06 from "../../../assets/images/penink-img.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Charcoal Sketch",
    imgUrl: categoryImg01,
  },
  {
    display: "Color Painting",
    imgUrl: categoryImg02,
  },

  {
    display: "Acrylic Painting",
    imgUrl: categoryImg03,
  },
  {
    display: "Oil Painting",
    imgUrl: categoryImg04,
  },
  {
    display: "Digital Painting",
    imgUrl: categoryImg05,
  },

  {
    display: "Pen and Ink Drawing",
    imgUrl: categoryImg06,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
