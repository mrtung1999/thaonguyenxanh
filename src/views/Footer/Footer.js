import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            {/* footer start */}
            <footer className="footer-area">
            <div className="footer-top-area pt-110 pb-50">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 ">
                    <div className="footer-widget mb-30">
                        <h4 className="white">CONTACT US</h4>
                        <p className="white">If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                        <ul className="footer-social-icon">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                        <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-2">
                    <div className="footer-widget mb-30">
                        <h4 className="white">NEWS</h4>
                        <ul className="footer-link">
                        <li>
                            <a href="#">Subsciption</a>
                        </li>
                        <li>
                            <a href="#">New Apps</a>
                        </li>
                        <li>
                            <a href="#">Download now</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-2">
                    <div className="footer-widget mb-30">
                        <h4 className="white">COMPANY</h4>
                        <ul className="footer-link">
                        <li>
                            <a href="#">Screenshot</a>
                        </li>
                        <li>
                            <a href="#">Fetures</a>
                        </li>
                        <li>
                            <a href="#">Price</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                    <div className="footer-widget mb-30">
                        <h4 className="white">RESOURCES</h4>
                        <ul className="footer-link">
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy &amp; term</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-area pb-50">
                <div className="container">
                <p className="copyright text-center">TRAVELEXPRESS SERVICE U.S. DEPARTMENT OF INTERIOR</p>
                </div>
            </div>
            </footer>
            {/* footer end */}

        </React.Fragment>
    )
}

export default Footer
