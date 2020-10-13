import React from "react";
import {Helmet} from "react-helmet";
import classnames from "classnames";
import { Link } from "react-router-dom";

import {
    Badge,
    Button,
    NavLink,
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
                    <Col className="p-3 mt-9">
                    <h1 className="text-white font-weight-bold ">We Completely Rethink Everything About Credit Card.</h1>
                    <p className="text-white">Canada's First e-Credit wallet <br/> Powered by Beezpay</p>

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
                <Row>
                  <Col>          
                   <img
                      alt="..."
                      className=" img-fluid"
                      src={require("assets/img/icons/common/Image 19.png")}
                    /></Col>
                  <Col>
                  </Col>
                  <img
                      alt="..."
                      className=" img-fluid"
                      src={require("assets/img/icons/common/Group 100.png")}
                    />
                </Row>
                <Row className="row-grid align-items-center my-md ml-4">
              <Col lg="6">
                <h4 className=" font-weight-bold mb-2 text-white">
                  Join Waitlist Now!
                  <br/>
                </h4>
                <h5 className="mb-0 text-white">
                  No Hidden Fees. No Joining Fees. No Annual Fees.
                </h5>
                <div className="flex">
                <Link to="/waitlist">
                          <Button
                            className="my-2"
                            color="primary"
                            type="button"
                          >
                           
                            Join Now
                          </Button>
                          </Link>
                        </div>
              </Col>
              <br/>
   
      
            </Row>
                <Row>
                  <Col>
                  <h2 className="text-white">How Beezpay Plus <br/>is better than Credit Card?</h2></Col>
                </Row>
                <Row>
                  <Col className="mt-5"><h5 className=" text-white">Pay at all newarby stores<br/>
                  Cashbacks on every purchases<br/>No Need Bank Account<br/>
                  Pay At all nearby stores<br/>
                  Get credit Without</h5></Col>
                  <Col>                <img
                      alt="..."
                      className=" img-fluid"
                      src={require("assets/img/icons/common/Group 84.svg")}/>
                      
                      <img
                      alt="..."
                      className=" img-fluid"
                      src={require("assets/img/icons/common/Group 89.png")}
                    /></Col>
                </Row>
                <Row className="lg-6">
                <img
                      alt="..."
                      className=" img-fluid"
                      src={require("assets/img/icons/common/Footer@2x.png")}/>
                </Row>
            </Container>

  

            </>
        );
    }
}

export default LandingPage;