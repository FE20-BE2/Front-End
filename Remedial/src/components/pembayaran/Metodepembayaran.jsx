import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsBank2 } from "react-icons/bs";
import bca from "../../assets/gambar/bca.png";
import BNI from "../../assets/gambar/BNI.png";
import Dana from "../../assets/gambar/Dana.png";
import gopay from "../../assets/gambar/gopay.png";
import linkaja from "../../assets/gambar/linkaja.png";
import mandiri from "../../assets/gambar/mandiri.png";
import Permatabank from "../../assets/gambar/Permatabank.png";
import ShopeePay from "../../assets/gambar/ShopeePay.png";
import { Image } from "react-bootstrap";

function Metodepembayaran() {
  return (
    <Container>
      <p className="text-center fw-bold mt-5 mb-6">DETAIL PEMBAYARAN</p>
      <Row>
        <Col sm={7} className="p-2 shadow-sm p-2 mb-5 bg-body-white rounded">
          <div>
            <span className="text-center">METODE PEMBAYARAN</span>
            <hr />
            <span className="my-4">
              TRANSFER BANK <BsBank2 className="ms-1" />
            </span>
            <hr />
            <div class="accordion-item">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <Image src={bca} className="mx-3" />
                Transfer Bank BCA
              </button>
              <button
                class="accordion-button mt-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <Image src={Permatabank} className="mx-3" />
                Transfer Bank BCA
              </button>
              <button
                class="accordion-button mt-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <Image src={mandiri} className="mx-3" />
                Transfer Bank BCA
              </button>
              <button
                class="accordion-button mt-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <Image src={BNI} className="mx-3" />
                Transfer Bank BCA
              </button>
            </div>
          </div>

          {/* <Card>
            <Card.Body>
              <Card.Title className="text-center">METODE PEMBAYARAN</Card.Title>
              <hr />
              <Card.Subtitle className="my-4">
                TRANSFER BANK
                <BsBank2 className="ms-1" />
              </Card.Subtitle>
              <hr />
              <ListGroup> 
              </ListGroup>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Metodepembayaran;
