/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0 ml-8" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/landing-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/card.png")}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md ml-4">
              <Col lg="6">
                <h4 className="text-primary font-weight-bold mb-2">
                  Join Waitlist Now!
                  <br/>
                </h4>
                <h5 className="mb-0">
                  No Hidden Fees. No Joining Fees. No Annual Fees.
                </h5>
                <div className="flex">
                          <Button
                            className="my-2"
                            color="primary"
                            type="button"
                          >
                            Join Now
                          </Button>
                        </div>
              </Col>
              <br/>
   
      
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    target="_blank"
                  >
                    Beezhive
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      
                      target="_blank"
                    >
                      Beezhive Canada Inc.

                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      target="_blank"
                    >
                      Our Journey
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      target="_blank"
                    >
                      Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      target="_blank"
                    >
                      Education
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
