import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../log_in.css";

export default function Login({ handleLogin }) {
  const [error, setError] = useState("");

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = new FormData(document.querySelector("#login-form"));

    let req = await fetch("/login", {
      method: "POST",
      body: form,
    });

    if (req.ok) {
      handleLogin(true);
      setError("");
      history.push("/user");
    } else {
      let err = await req.json();
      setError(err.error);
    }
  };

  return (
    <>
      <div className="log-in-container">
        {error.length > 0 ? <p>{error}</p> : null}
        <Form id="login-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>

          <Button className="d-grid" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
