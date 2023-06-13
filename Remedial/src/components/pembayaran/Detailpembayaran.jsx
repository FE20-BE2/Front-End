import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { FormLabel, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { RiCoupon4Fill } from "react-icons/ri";
import off from "../../assets/gambar/off.png";

function Detailpembayaran() {
  return (
    <Container>
      <p className="text-center fw-bold mt-5 mb-6">DETAIL PEMBAYARAN</p>
      <Row>
        <Col sm={4}>
          <Image src={off} alt="" style={{ maxWidth: "100%" }} />
          <Card className="mt-3 shadow mt-4 p-3 mb-3 bg-body-white rounded">
            <Card.Body>
              <Card.Title>
                <RiCoupon4Fill /> Do you have coupon code?
              </Card.Title>
              <InputGroup className="mb-2">
                <Form.Control type="Text" />
                <Button variant="outline-secondary">Button</Button>
              </InputGroup>
            </Card.Body>
          </Card>
          <Card className="shadow mt-4 p-3 mb-3 bg-body-white rounded">
            <Card.Body>
              <Card.Title>REMDIAL OFFLINE</Card.Title>
              <Card.Subtitle>Remedial House, Jakarta Timur</Card.Subtitle>
              <hr />
              <Card.Title>Benefits</Card.Title>
              <Card.Text>
                Tersedia 3 Mata Pelajaran <br />
                Belajar di Ruang Kelas <br />
                Interaksi Langsung dengan Mentor <br />
                Sertifikat
                <br />
                <span
                  className="fw-bold fw-bold d-flex align-items-center justify-content-end"
                  style={{ color: "#B30000" }}
                >
                  Rp. 550.000
                </span>
                <hr />
                <div className="align-items-center">
                  <label className="d-flex align-items-center justify-content-between">
                    Discount
                    <span className="fw-bold" style={{ color: "#820000" }}>
                      Rp. 20.000
                    </span>
                  </label>
                  <label className="d-flex align-items-center justify-content-between">
                    Duration
                    <span className="fw-bold" style={{ color: "#820000" }}>
                      6 Months
                    </span>
                  </label>
                </div>
                <hr />
                <div className="total">
                  <label className="fw-bold d-flex align-items-center justify-content-between ">
                    Total
                    <span className="fw-bold" style={{ color: "#820000" }}>
                      Rp. 530.000
                    </span>
                  </label>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} className="p-2 shadow-sm p-2 mb-5 bg-body-white rounded">
          <Form>
            <Form.Group className="mb-3">
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl type="text" />
              <Row className="mt-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Nomer Hp</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Row>
              <Row className="mt-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Tempat Lahir</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Row>
              <Form.Label className="mt-3">Jenis Kelamin</Form.Label>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-2">
                  <Form.Check
                    inline
                    label="Laki-Laki"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Perempuan"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
              <FormLabel className="mt-3">Sekolah/Instansi</FormLabel>
              <Form.Control type="text" />
              <FormLabel className="mt-3">Instagram</FormLabel>
              <Form.Control type="text" />
              <FormLabel className="mt-3">Alamat Rumah</FormLabel>
              <Form.Control as="textarea" rows={3} />
              <FormLabel className="mt-3">Alasan Mengikuti Program</FormLabel>
              <Form.Control as="textarea" rows={3} />
              <FormLabel className="mt-3">Upload Portofolio</FormLabel>
              <Form.Control type="file" className="mb-3" />
              <Row>
                <Col className="d-flex align-items-center justify-content-between">
                  <Button variant="outline-dark">Cencel</Button>
                  <Button variant="outline-dark">Daftar</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Detailpembayaran;
