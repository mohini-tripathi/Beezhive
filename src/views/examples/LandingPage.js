import React from "react";
import {Helmet} from "react-helmet";
import classnames from "classnames";

import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// import Hero from "src/views/IndexSections/Hero.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Hero from "views/IndexSections/Hero.js";

class LandingPage extends React.Component {
    state = {};
    componentDidMount() {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
    render() {
        return (
            <>
            <Helmet>
            <style>{'body { background-color: #690BF5; }'}</style>
            </Helmet>
            <DemoNavbar/>
            <Container className="p-0">
                <Row>
                    <Col>
                    <h1 className="text-white font-weight-bold">We Completely Rethink Everything About Credit Card.</h1>
                    </Col>
                    <Col>
                    <div className=" pl-md-3 d-flex flex-row-reverse p-0 float-right">
                    <img
                      alt="..."
                      className=" img-fluid mt-0"
                      src={require("assets/img/theme/Mask Group 1 1.png")}
                    />
                  </div></Col>
                </Row>
 
            
            <div className="float-right">
              <Row className="row-grid align-items-left" alt="Responsive image">
                <Col className="order-lg-1 ml-lg-auto ">
                </Col>
                <Col className="py-7 mt-9 px-0">
                    <h1 className="text-white font-weight-bold">We Completely Rethink Everything About Credit Card.</h1>
                </Col>
              </Row>
              </div>
            </Container>

  

            </>
        );
    }
}

export default LandingPage;