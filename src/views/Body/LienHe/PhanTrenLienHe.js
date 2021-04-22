import React from 'react';


function PhanTrenLienHe({Tab}) {
    return (
        <React.Fragment>
           <section className="breadcrumb-area about-page" data-overlay={5} style={{backgroundImage: 'url(img/bg/about-breadcrumb.jpg)'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="breadcrumb-wrapper text-center">
                    <h3>CONTACT US</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active">{Tab}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </React.Fragment>
    );
}

export default PhanTrenLienHe;