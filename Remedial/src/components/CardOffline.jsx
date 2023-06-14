import React from "react";
import "../css/kelasOffline.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import vector from "../assets/image/Vector.png";
import vector2 from "../assets/image/vektor2.png";
import vector3 from "../assets/image/vektor3.png";
import vector4 from "../assets/image/vektor4.png";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function CardOffline() {
  const [dataKelasoffline, setDataKelasoffline] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api-remedial-production-ecd6.up.railway.app/api/user/kelas-offline"
      );
      const data = await response.json();
      setDataKelasoffline(data.kelas);
      console.log("data kelasoffline", data);
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
                  Metode pembelajaran yang dilakukan secara langsung dan tidak
                  melalui jaringan internet. Metode ini melibatkan interaksi
                  langsung antara guru dan siswa dalam sebuah ruang kelas atau
                  lingkungan belajar yang telah disiapkan.
                </Card.Text>
                <p>
                  <img src={vector} alt="" /> Tersedia 3 Mata Pelajaran
                </p>
                <p>
                  <img src={vector2} alt="" /> Belajar di Ruang Kelas
                </p>
                <p>
                  <img src={vector3} alt="" /> Interaksi Langsung dengan Mentor
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
                    {dataKelasoffline.map((kelasoffline) => (
                      <Dropdown.Item href="#/action-1" key={kelasoffline._id}>
                        {kelasoffline.matkul}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div className="my-3">
                  <DropdownButton
                    id="dropdown-button"
                    title="Pilih Lokasi RemidiaL"
                  >
                    {dataKelasoffline.map((kelasoffline) => (
                      <Dropdown.Item href="#/action-1" key={kelasoffline._id}>
                        {kelasoffline.lokasi}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>

                <Card.Text>Tanggal Mulai Kelas</Card.Text>
                {dataKelasoffline.map((kelasoffline) => (
                  <Button variant="light" key={kelasoffline._id} className="">
                    {kelasoffline.tanggalMulai}
                  </Button>
                ))}
                <Card.Text className="my-2">Waktu Mulai Kelas</Card.Text>
                {dataKelasoffline.map((kelasoffline) => (
                  <Button variant="light" key={kelasoffline._id} className="">
                    {kelasoffline.waktu}
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
            {dataKelasoffline.map((kelasoffline) => ( 
            <Card style={{ width: "30rem" }} key={kelasoffline._id} className="px-4"> 
              <Card.Body>
                <div>{kelasoffline.mentor.photo}</div>
                <h5>
                  <Card.Title>{kelasoffline.mentor.nama}</Card.Title>
                </h5>
                <Card.Text>{kelasoffline.mentor.spesialisasi}</Card.Text>
               
              </Card.Body>
            </Card>
            
          ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOffline;
