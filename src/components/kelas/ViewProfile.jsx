import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Fotoprofile from "/src/assets/image/profile.jpg";
import Button from "react-bootstrap/Button";

function ViewProfile() {
  return (
    <div>
      <div className="py-5 ">
        <div className="container my-3 px-5 py-5">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <Card style={{ width: "20rem" }}>
              <Card.Title className="py-3">Foto Profil</Card.Title>
              <Card.Img variant="top" src={Fotoprofile} />
              <Card.Body>
                <div className="text-center">
                  <Button variant="outline-secondary">Ubah Foto</Button>
                </div>
              </Card.Body>
            </Card>

            <div className="px-4">
              <Card style={{ width: "45rem" }}>
                <p className="mx-2 mt-2">Nama Lengkap</p>
                <Card className=" mx-2">
                  <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <p className="mx-2 mt-2">Email</p>
                    <Card style={{ width: "20rem" }} className=" mx-2">
                      <Card.Body>Masukan Alamat Email</Card.Body>
                    </Card>
                  </div>
                  <div className="col">
                    <p className="mx-2 mt-2">Nomor HP</p>
                    <Card style={{ width: "20rem" }} className=" mx-2">
                      <Card.Body>Masukan Nomor HP</Card.Body>
                    </Card>
                  </div>
                  <div className="col">
                    <p className="mx-2 mt-2">Tempat Lahir</p>
                    <Card style={{ width: "20rem" }} className=" mx-2">
                      <Card.Body>Masukan Tempat Lahir</Card.Body>
                    </Card>
                  </div>
                  <div className="col">
                    <p className="mx-2 mt-2">Tanggal Lahir</p>
                    <Card style={{ width: "20rem" }} className=" mx-2">
                      <Card.Body>Masukan Tanggal Lahir</Card.Body>
                    </Card>
                  </div>
                </div>

                <p className="mx-2 mt-3">Asal Sekolah/Instaansi</p>
                <Card className=" mx-2">
                  <Card.Body>Masukan Asal Sekolah/Instansi</Card.Body>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
