import React from "react";
import "../css/kelasOffline.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import kelasoffline from '../assets/image/gambar2.png';

function KelasOffline () {
    return(
        <div className="py-5 ">
            <div className="container my-5 px-5 py-5">
            <div className="row gx-lg-3">
                <div className="col-lg-6 mb-5 px-3">
                    <h3>RemidiaL Offline</h3>
                    <p className="text-muted fw-light lh-lg my-4">Yuk, belajar bersama-sama! Dengan kelas ini, kita dapat meningkatkan 
                    kreativitas dan mengembangkan kemampuan ekspresi diri yang berbeda-beda. Ayo, jangan ragu untuk mencoba dan 
                    mengeksplorasi potensi diri kita dalam dunia seni. Segera bergabung dengan kelas seni dan temukan keindahan 
                    yang tersembunyi di dalamnya!</p>
                    <p className="text-danger">Rp. 500.000</p>
                    <Button variant="dark">Ikuti Kelas Ini</Button>
                </div>
                <div className="col-lg-6"> 
                    <img src={kelasoffline} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default KelasOffline;