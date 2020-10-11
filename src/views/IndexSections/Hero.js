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
import React from "react";
import {Helmet} from "react-helmet";

// reactstrap components
import { 
  Container, 
  Row, 
  Col, 
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button,
  Form} from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="background">
          {/* Hero for FREE version */}
            {/* Background circles */}
            <Helmet>
                <style>{'body { background-color: #690BF5; }'}</style>
            </Helmet>            
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-left" lg="7">
                    <h1 className="lead text-white font-weight-bold">
                      <b>We Completely Rethink <br/>
                        Everything About 
                        Credit Card</b>
                    </h1>
                    <div className="mt-2 text-white font-weight-bold">
                    <p><b>Canada's First e-Credit wallet Powered by Beezpay</b></p>
                    </div>
                    <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                          </InputGroup>
                        </FormGroup>
                        <div className="text-white">
                          <p>Get early access</p>
                        </div>

                      </Form>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100"> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              > */}
                {/* <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                /> */}
              {/* </svg> */}
            {/* </div> */}
        </div>
      </>
    );
  }
}

export default Hero;
