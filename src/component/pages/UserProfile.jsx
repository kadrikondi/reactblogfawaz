import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Container, Row, Col } from "react-bootstrap";

import Placeholder from "react-bootstrap/Placeholder";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api/api";
import SideList from "./sideList";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await fetchUser(id);
        setUser(data);
        console.log(data + "gooooooooo");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [id]);
  return (
    <>
      <Row>
        <Col>
          {" "}
          <SideList></SideList>
        </Col>
        <Col xs={6}>
          {" "}
          {user ? (
            <Card style={{ width: "25rem", textAlign: "center" }}>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>{user.bio}</Card.Text>
                <Button variant="primary" className="mr-5">
                  {" "}
                  Followers{" "}
                  {/* {user.followers_url ? user.followers_url.length : null} */}
                </Button>

                <Button variant="primary" className="m-2">
                  {" "}
                  Following
                </Button>
                <Button variant="primary" className="m-2">
                  {" "}
                  Message
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.vecteezy.com/vector-art/5724438-woman-lady-line-icon-girl-with-beauty-face-and-hairstyle-linear-pictogram-female-avatar-outline-icon-for-user-profile-business-woman-office-worker-isolated-vector-illustration"
              />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col> </Col>
      </Row>
    </>
  );
}

export default UserProfile;
