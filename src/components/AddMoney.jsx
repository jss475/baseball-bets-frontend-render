import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function AddMoney() {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addMoney = document.querySelector("#add-money-form");
    const form = new FormData(addMoney);

    let req = await fetch("/add-money", {
      method: "PATCH",
      body: form,
    });

    req.ok ? history.push("/user") : console.error(req);
  };

  return (
    <Form id="add-money-form" className="mt-2" onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>How much would you like to add?</Form.Label>
        <Form.Control
          name="money"
          type="number"
          placeholder="give me your money"
        />
      </Form.Group>

      <Button className="d-grid" variant="primary" type="submit">
        do it
      </Button>
    </Form>
  );
}
