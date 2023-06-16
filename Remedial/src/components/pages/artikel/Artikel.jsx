import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Artikel = () => {
  const [data, setData] = useState([]);

  async function getArtikel() {
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
    getArtikel();
  }, []);
  return (
    <div>
      <div className="m-4 d-flex justify-content-between">
        <h3>ARTIKEL</h3>
        <NavLink to="/create-artikel">
          <Button>Tambahkan</Button>
        </NavLink>
      </div>

      <Row xs={1} md={3} className="g-4">
        {data.map((artikel) => (
          <Card>
            <Card.Img variant="top" src={artikel.articleImgUrl} />
            <Card.Body>
              <Card.Title>{artikel.title}</Card.Title>
              <Card.Text>{artikel.content.slice(0, 100)}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{artikel.releaseDate}</small>
            </Card.Footer>
            <Row>
              <Col className="d-flex align-items-center justify-content-between">
                <Button>Hapus</Button>
                <Button>Edit</Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default Artikel;
