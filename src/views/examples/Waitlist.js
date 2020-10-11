import React from "react";
import {Helmet} from "react-helmet";
import classnames from "classnames";
import SimpleFooter from "components/Footers/SimpleFooter.js"

import {
    Container,
    Row,
    Col,
    Badge,
    FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Button
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";

class Waitlist extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
    render() {
        return (
            <>
            <DemoNavbar />
            <Helmet>
            <style>{'body { background-color: #690BF5; }'}</style>
            </Helmet>
            <Container className="text-align-left">
                <div className="p-9 text-white text-center h1 font-weight-bold">
                    Join Waitlist Now
                    <p className="font-weight-bold">No Hidden Fees. No Joining Fees. No Annual Fees.</p>
                    <Row>
                        <Col className="text-left">
                        <h5 className="mt-6 text-white">Activate in just 3 steps</h5>
                        <p>100% paperless process. Zero annual fees</p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="white"
                            >
                              1
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                              Fill up the form
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="white"
                            >
                              2
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">Submit your documents</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="white"
                            >
                              3
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0 text-white">
                              Join the Waitlist
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                        </Col>
                        <Col>
                        <FormGroup
                        className={classnames("mt-5")}>
                                                    <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                        </FormGroup>
                        <FormGroup
                        className={classnames("mt-5")}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames("mt-5")}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-trophy" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="SIN Number"
                            type="number"
                            onFocus={e => this.setState({ numberFocused: true })}
                            onBlur={e => this.setState({ numberFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>   
                      <FormGroup
                        className={classnames("mt-5")}
                      >
                      <InputGroup className="input-group-alternative">
                          <Input
                            placeholder="Enter Phone no."
                            type="tel"
                            onFocus={e => this.setState({ telFocused: true })}
                            onBlur={e => this.setState({ telFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>  
                      <div>
                      <Button
                          block
                          className="btn-round"
                          size="lg"
                          color="warning"
                          type="button"
                        >
                          Join Now
                        </Button>
                        </div>       
                        </Col>
                    </Row>
                </div>
            </Container>
            <SimpleFooter/>
            </>
        )
    }
}

export default Waitlist;