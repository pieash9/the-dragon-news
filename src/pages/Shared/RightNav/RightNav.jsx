import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>

      <div className="mt-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
        <QZone />
        <div className="text-white" style={{ position: "relative" }}>
          <img className="w-100 rounded" src={bg} alt="" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <h2 className="mb-3">Create an Amazing Newspaper</h2>
            <p className="my-3">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button variant="danger">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
