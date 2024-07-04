import React, { useEffect, useState } from "react";
import { fetchPost, fetchSinglePost } from "../api/api";
import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Blogpost = () => {
  const [posts, setPosts] = useState([]);
  const [singlepost, setSinglePost] = useState({});
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    setShow(true);
    try {
      const post = await fetchSinglePost(id);
      console.log(post);
      setSinglePost(post);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchPostApi = async () => {
      setLoading(true);
      try {
        const post = await fetchPost();
        console.log(post);
        setPosts(post);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchPostApi();
  }, []);

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{singlepost.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{singlepost.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              {singlepost.id}Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {loading && (
        <>
          <p aria-hidden="true">
            <Placeholder xs={6} />
          </p>
          <Placeholder.Button xs={4} aria-hidden="true" />
        </>
      )}

      {error && <p>Error: {error.message}</p>}

      {!loading && !error && posts.length === 0 && <p>No posts available.</p>}

      {posts ? (
        posts.map((post) => (
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant="primary" onClick={() => handleShow(post.id)}>
                Read More {post.id}
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>No post</h1>
      )}
    </div>
  );
};

export default Blogpost;
