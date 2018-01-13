import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Home = props => (
	<div style={{background: "#ff9999, 654px",}}>
      <Container center>
        <Row>
          <Col size="md-12">
            <Carousel> </Carousel>
          </Col>
        </Row>
        <Row>
        </Row>
        
      </Container>
    </div>
    );

export default Home;