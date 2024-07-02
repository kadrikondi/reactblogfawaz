import React, { useEffect, useState } from "react";
import { fetchPost } from "../api/api";
import Placeholder from "react-bootstrap/Placeholder";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Blogpost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
              <Button variant="primary">Read More</Button>
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
