import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
// import Photo from "../asset/img/ASIWAJU TINUBU.jpg";
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/api";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsersApi = async () => {
      setLoading(true);
      try {
        const usersapi = await fetchUsers();
        console.log(usersapi);
        setUsers(usersapi);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchUsersApi();
  }, []);

  if (loading) {
    return (
      <p>
        {" "}
        <Card>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      </p>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <ListGroup className="flex row-auto">
        {users
          ? users.map((user) => (
              <ListGroup.Item>
                <Link to={`/user/${user.id}`}>
                  <div className="d-flex text-xl font-bold ml-2 hover:bg-blue-500 hover:text-white text-blue-700">
                    <img
                      src={user.avatar_url}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                      alt=""
                    />
                    <span className="hover:text-white">{user.login}</span>
                  </div>
                </Link>
              </ListGroup.Item>
            ))
          : null}
      </ListGroup>
    </>
  );
};

export default SideList;
