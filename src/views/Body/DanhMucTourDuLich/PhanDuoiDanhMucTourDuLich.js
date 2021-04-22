import React from 'react'

function PhanDuoiDanhMucTourDuLich() {
    return (
        <React.Fragment>
            <div>
  <section className="package-area pt-110 pb-118">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="package-top-bar mb-60 separator clearfix">
            <div className="package-search f-left">
              <form action="#">
                <input type="text" placeholder="Tìm kiếm" />
                <button><i className="fas fa-search" /></button>
              </form>
            </div>
            <div className="package-view text-right f-right">
              <ul className="nav package-tab justify-content-end" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="fas fa-th" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i className="fas fa-list-ul" /></a>
                </li>
              </ul>
            </div>
            <div className="package-search-result f-right">
              {/* <p>Showing 1- 5 of 20 results</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-md-wrap-reverse">
        <div className="col-lg-4">
          <div className="widget">
            <h3 className="book-now-title">FIND YOUR TRIP</h3>
            <div className="sidebar-booking">
              <div className="form-action">
                <ul className="select-bar">
                  <li className="location clearfix">
                    <select name="location" className="location-here">
                      <option value="Dhaka">Location </option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Chitagong">Chitagong</option>
                      <option value="SKhulna">SKhulna</option>
                    </select>
                  </li>
                  <li className="location clearfix">
                    <select name="location" className="location-here member">
                      <option value="Dhaka">Hotel</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Chitagong">Chitagong</option>
                      <option value="SKhulna">SKhulna</option>
                    </select>
                  </li>
                  <li className="location clearfix">
                    <form className="icon" action="#">
                      <input className="datepicker" type="text" placeholder="Check in" />
                    </form>
                  </li>
                  <li className="location clearfix">
                    <form className="icon" action="#">
                      <input className="datepicker" type="text" placeholder="Checkout" />
                    </form>
                  </li>
                </ul>
                <div className="filter-part">
                  <div className="range-wrapper">
                    <label htmlFor="amount">Budget Now :</label>
                    <div className="range-input">
                      <input type="text" id="amount" readOnly style={{border: 0, color: '#f6931f', fontWeight: 'bold'}} />
                    </div>
                    <div id="slider-range" />
                  </div>
                </div>
              </div>
              <div className="filter-button">
                <button type="submit">Tìm kiếm</button>
              </div>
            </div>
          </div>
          <div className="widget">
            <div className="advertise-area">
              <a href="#"><img src="img/blog/ads.jpg" alt="advertise-img" /></a>
            </div> {/* end ad area */}
          </div>
          <div className="widget">
            <div className="widget-title">
              <h5>LATEST NEWS</h5>
            </div>
            <div className="widget-body">
              <div className="widget-single-content">
                <div className="widget-thumb">
                  <img src="img/blog/latest-post1.jpg" alt="latest-news" />
                </div>
                <div className="widget-content">
                  <a href="#">
                    <h6>Louvre Museum in Paries,</h6>
                  </a>
                  <span>France</span>
                  <p>May 20, 2017</p>
                </div>
              </div>
              <div className="widget-single-content">
                <div className="widget-thumb">
                  <img src="img/blog/latest-post2.jpg" alt="latest-news" />
                </div>
                <div className="widget-content">
                  <a href="#">
                    <h6>Louvre Museum in Paries,</h6>
                  </a>
                  <span>France</span>
                  <p>May 20, 2017</p>
                </div>
              </div>
              <div className="widget-single-content">
                <div className="widget-thumb">
                  <img src="img/blog/latest-post3.jpg" alt="latest-news" />
                </div>
                <div className="widget-content">
                  <a href="#">
                    <h6>Louvre Museum in Paries,</h6>
                  </a>
                  <span>France</span>
                  <p>May 20, 2017</p>
                </div>
              </div>
              <div className="widget-single-content">
                <div className="widget-thumb">
                  <img src="img/blog/latest-post4.jpg" alt="latest-news" />
                </div>
                <div className="widget-content">
                  <a href="#">
                    <h6>Louvre Museum in Paries,</h6>
                  </a>
                  <span>France</span>
                  <p>May 20, 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div> {/* end widget area */}
        <div className="col-lg-8 md-space">
          <div className="tab-content package-style" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-package mb-50">
                    <div className="package-img">
                      <img src="img/package/pack-1.jpg" alt="package image" />
                      <div className="package-cost">$3000</div>
                    </div>
                    <h5>
                      <span>AMERICA</span> - 5 Days, 4 Nights</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                      some form, by injected.</p>
                    <a className="read-more" href="#">READ MORE
                      <i className="icofont icofont-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Single Package */}
                <div className="col-lg-6 col-md-6">
                  <div className="single-package mb-50">
                    <div className="package-img">
                      <img src="img/package/pack-2.jpg" alt="package image" />
                      <div className="package-cost">$3000</div>
                    </div>
                    <h5>
                      <span>THAILAND</span> - 4 Days, 3 Nights</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                      some form, by injected.</p>
                    <a className="read-more" href="#">READ MORE
                      <i className="icofont icofont-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Single Package */}
                <div className="col-lg-6 col-md-6">
                  <div className="single-package mb-50">
                    <div className="package-img">
                      <img src="img/package/pack-3.jpg" alt="package image" />
                      <div className="package-cost">$3000</div>
                    </div>
                    <h5>
                      <span>JAPAN</span> - 3 Days, 2 Nights</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                      some form, by injected.</p>
                    <a className="read-more" href="#">READ MORE
                      <i className="icofont icofont-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Single Package */}
                <div className="col-lg-6 col-md-6">
                  <div className="single-package mb-50">
                    <div className="package-img">
                      <img src="img/package/pack-1.jpg" alt="package image" />
                      <div className="package-cost">$3000</div>
                    </div>
                    <h5>
                      <span>AMERICA</span> - 5 Days, 4 Nights</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                      some form, by injected.</p>
                    <a className="read-more" href="#">READ MORE
                      <i className="icofont icofont-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Single Package */}
                <div className="col-lg-6 col-md-6">
                  <div className="single-package mb-50">
                    <div className="package-img">
                      <img src="img/package/pack-2.jpg" alt="package image" />
                      <div className="package-cost">$3000</div>
                    </div>
                    <h5>
                      <span>THAILAND</span> - 4 Days, 3 Nights</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                      some form, by injected.</p>
                    <a className="read-more" href="#">READ MORE
                      <i className="icofont icofont-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Single Package */}
                <div className="col-lg-6 col-md-6">
                  <div className="single-package mb-50">
                    <div className="package-img">
                      <img src="img/package/pack-3.jpg" alt="package image" />
                      <div className="package-cost">$3000</div>
                    </div>
                    <h5>
                      <span>JAPAN</span> - 3 Days, 2 Nights</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                      some form, by injected.</p>
                    <a className="read-more" href="#">READ MORE
                      <i className="icofont icofont-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* End Single Package */}
              </div>
            </div>
            <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="single-package p-list mb-50">
                <div className="package-img p-list">
                  <img src="img/package/package-thum-1.jpg" alt="package image" />
                </div>
                <div className="pack-content">
                  <div className="p-cost">$3000</div>
                  <h5>
                    <span>AMERICA</span> - 5 Days, 4 Nights</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                  <a className="read-more p-list" href="#">READ MORE
                    <i className="icofont icofont-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Single Package */}
              <div className="single-package p-list mb-50">
                <div className="package-img p-list">
                  <img src="img/package/package-thum-1.jpg" alt="package image" />
                </div>
                <div className="pack-content">
                  <div className="p-cost">$3000</div>
                  <h5>
                    <span>AMERICA</span> - 5 Days, 4 Nights</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                  <a className="read-more p-list" href="#">READ MORE
                    <i className="icofont icofont-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Single Package */}
              <div className="single-package p-list mb-50">
                <div className="package-img p-list">
                  <img src="img/package/package-thum-1.jpg" alt="package image" />
                </div>
                <div className="pack-content">
                  <div className="p-cost">$3000</div>
                  <h5>
                    <span>AMERICA</span> - 5 Days, 4 Nights</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                  <a className="read-more p-list" href="#">READ MORE
                    <i className="icofont icofont-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Single Package */}
              <div className="single-package p-list mb-50">
                <div className="package-img p-list">
                  <img src="img/package/package-thum-1.jpg" alt="package image" />
                </div>
                <div className="pack-content">
                  <div className="p-cost">$3000</div>
                  <h5>
                    <span>AMERICA</span> - 5 Days, 4 Nights</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                  <a className="read-more p-list" href="#">READ MORE
                    <i className="icofont icofont-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Single Package */}
              <div className="single-package p-list mb-50">
                <div className="package-img p-list">
                  <img src="img/package/package-thum-1.jpg" alt="package image" />
                </div>
                <div className="pack-content">
                  <div className="p-cost">$3000</div>
                  <h5>
                    <span>AMERICA</span> - 5 Days, 4 Nights</h5>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                  <a className="read-more p-list" href="#">READ MORE
                    <i className="icofont icofont-arrow-right" />
                  </a>
                </div>
              </div>
              {/* End Single Package */}
            </div>
          </div>
          <div className="pagination-area pt-50">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link pagi-icon" href="#">
                    <i className="fas fa-chevron-left" aria-hidden="true" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item ">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">6</a>
                </li>
                <li className="page-item">
                  <a className="page-link pagi-icon" href="#">
                    <i className="fas fa-chevron-right" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Start Promote Area */}
  <section className="promote-area gray-bg pt-110 pb-120">
    <div className="container">
      <div className="promote-content text-center">
        <h2>GET DISCOUNT <span>10-20% </span>OFF ANY TOUR PACKAGE</h2>
        <h4>WHEN YOU PURCHASE ANY PACKAGE &amp; GET NEXT TOUR</h4>
        <a className="btn-1" href="#">START YOUR TRIP NOW</a>
      </div>
    </div>
  </section>
  {/* End Promote Area */}
</div>

        </React.Fragment>
    )
}

export default PhanDuoiDanhMucTourDuLich
