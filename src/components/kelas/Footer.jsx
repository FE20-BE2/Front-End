import React from "react";
import "./css/footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '/src/assets/logo/logo2.png';
import fb from '/src/assets/footer/fb.png'
import ig from '/src/assets/footer/ig.png'
import google from '/src/assets/footer/google.png'
import email from '/src/assets/footer/email.png'

function Footer () {
    return(
        <div id="footer" className="py-4">
            <div className="container">
            <div className="row">
                <div className="col-md-4 ">
                    <a className="d-block mb-3" href="#"><img className="logo" src={Logo} alt="logo1" border="0"/></a>
                    <p className="py-4">Remedial merupakan kegiatan yang akan Serrum 
                        lakukan selama 1 tahun di 2019. Kegiatan
                        berfokus pada pola konsumsi informasi dan 
                        pengetahuan berdasarkan perkembangan hari ini</p>
                    <a><img src={fb} /></a>
                    <a><img className="px-2" src={ig} /></a>
                    <a><img className="px-2" src={google} /></a>
                    <a><img className="px-2" src={email} /></a>
                </div>
                <div className="col-md-4 col-lg-2 mt-4 mt-md-0">
                    <h4 className="mb-2">Discover</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Benefit</a></li>
                        <li><a href="#">Course</a></li>
                        <li><a href="#">Reeview</a></li>
                        <li><a href="#">Sit Amet</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-2 mt-4 mt-md-0">
                    <h4 className="mb-2">Resources</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Patner</a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-lg-2 mt-4 mt-md-0">
                    <h4 className="mb-2">Company</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Footer;