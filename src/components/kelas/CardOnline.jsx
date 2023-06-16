import React from "react";
import "./css/kelasOffline.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import vector from "/src/assets/image/Vector.png";
import vector2 from "/src/assets/image/vektor2.png";
import vector3 from "/src/assets/image/vektor3.png";
import vector4 from "/src/assets/image/vektor4.png";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function CardOnline() {
  const [dataKelasonline, setDataKelasonline] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api-remedial-production-ecd6.up.railway.app/api/user/kelas-offline"
      );
      const data = await response.json();
      setDataKelasonline(data.kelas);
      console.log("data kelasonline", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="my-4 ">
      <div className="container px-3">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Card style={{ width: "33rem" }}>
              <Card.Body>
                <h5>
                  <Card.Title>Tentang Kelas</Card.Title>
                </h5>
                <Card.Text>
                  Metode pembelajaran yang dilakukan melalui jaringan internet.
                  Metode ini dapat dilakukan secara live atau asinkronus (tidak
                  live) dengan memanfaatkan berbagai platform belajar seperti
                  aplikasi pembelajaran, website, atau platform video
                  conferencing.
                </Card.Text>
                <p>
                  <img src={vector} alt="" /> Tersedia 10 Mata Pelajaran
                </p>
                <p>
                  <img src={vector2} alt="" /> Belajar Lebih Fleksibel
                </p>
                <p>
                  <img src={vector3} alt="" /> Forum Diskusi Online
                </p>
                <p>
                  <img src={vector4} alt="" /> Sertifikat
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "35rem" }}>
              <Card.Body>
                <h5>
                  <Card.Title>Pilihan Waktu</Card.Title>
                </h5>
                <div>
                  <DropdownButton
                    id="dropdown-button"
                    title="Pilih Pelajaran RemidiaL"
                  >
                    {dataKelasonline.map((kelasonline) => (
                      <Dropdown.Item href="#/action-1" key={kelasonline._id}>
                        {kelasonline.matkul}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div className="my-3">
                  <DropdownButton
                    id="dropdown-button"
                    title="Pilih Lokasi RemidiaL"
                  >
                    {dataKelasonline.map((kelasonline) => (
                      <Dropdown.Item href="#/action-1" key={kelasonline._id}>
                        {kelasonline.lokasi}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>

                <Card.Text>Tanggal Mulai Kelas</Card.Text>
                {dataKelasonline.map((kelasonline) => (
                  <Button variant="light" key={kelasonline._id} className="">
                    {kelasonline.tanggalMulai}
                  </Button>
                ))}
                <Card.Text className="my-2">Waktu Mulai Kelas</Card.Text>
                {dataKelasonline.map((kelasonline) => (
                  <Button variant="light" key={kelasonline._id} className="">
                    {kelasonline.waktu}
                  </Button>
                ))}

                <div className="d-grid gap-2 py-3">
                  <Button variant="dark">Gabung Sekarang</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card body>
              <h5>
                <Card.Title>Mentor</Card.Title>
              </h5>
              <div className="row row-cols-1 row-cols-md-2 g-4">
              {dataKelasonline.map((kelasonline) => (
                <Card
                  style={{ width: "20rem" }}
                  key={kelasonline._id}
                  className="mx-4 px-4"
                >
                  <Card.Body>
                    <Card.Img variant="top" src={kelasonline.mentor.photo} />
                    <h5>
                      <Card.Title>{kelasonline.mentor.nama}</Card.Title>
                    </h5>
                    <Card.Text>{kelasonline.mentor.spesialisasi}</Card.Text>
                    <Card.Text>{kelasonline.mentor.email}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
              </div>
              
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOnline;
