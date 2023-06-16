import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Artikel = () => {
  const [data, setData] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get(
        "https://api-remedial-production-ecd6.up.railway.app/api/articles"
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteartikel() {
    try {
      const response = await axios.delete(
        "https://api-remedial-production-ecd6.up.railway.app/api/admin/articles"
      );
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <NavLink to="/create-artikel">
        <Button>Tambahkan</Button>{" "}
      </NavLink>
      <Row xs={1} md={4} className="g-4">
        {data.map((artikel) => (
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{artikel.title}</Card.Title>
              <Card.Text>{artikel.content.slice(0, 100)}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
            <Button>Hapus</Button>
            <Button>Edit</Button>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default Artikel;
