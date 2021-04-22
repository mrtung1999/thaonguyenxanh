import React from 'react'


function Index() {
    return (
        <React.Fragment>
<div>
  {/* ========= Start Slider Area========= */}
  <section className="slider-area">
    <div className="slider-active owl-carousel">
      <div className="single-slider" style={{background: 'url(img/slider/slider.jpg)'}}>
        <div className="container">
          <div className="slider-content text-center">
            <h1>POPULAR WORLD SCENE</h1>
            <h4>PERFECT WORLD TRAVEL AGENCY</h4>
            <a className="btn-1" href="#">EXPLORE MORE</a>
          </div>
        </div>
      </div>
      <div className="single-slider" style={{background: 'url(img/slider/slider.jpg)'}}>
        <div className="container">
          <div className="slider-content text-center">
            <h1>POPULAR WORLD SCENE</h1>
            <h4>PERFECT WORLD TRAVEL AGENCY</h4>
            <a className="btn-1" href="#">EXPLORE MORE</a>
          </div>
        </div>
      </div>
      <div className="single-slider" style={{background: 'url(img/slider/slider.jpg)'}}>
        <div className="container">
          <div className="slider-content text-center">
            <h1>POPULAR WORLD SCENE</h1>
            <h4>PERFECT WORLD TRAVEL AGENCY</h4>
            <a className="btn-1" href="#">EXPLORE MORE</a>
          </div>
        </div>
      </div>
    </div>
  </section> {/* End Slider Area */}
  {/* ========= Start Booking Area========= */}
  <div className="booking-area">
    <div className="container">
      <div className="booking-option">
        <div className="top-bar-option">
          <div className="top-button s-btn">
            Tìm kiếm ngay
          </div>
          {/* <div className="top-button theme-bg">
            <div className="top-button-inner icon-none">
              <img src="img/icon/hotel-icon.png" alt="" />
              <select name="location" id="hotel">
                <option value="Dhaka">HOTEL</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Chitagong">Chitagong</option>
                <option value="SKhulna">SKhulna</option>
              </select>
            </div>
          </div> */}
        </div>
        <div className="form-action form-action-one">
          <ul className="select-bar">
            <li className="location">
              <select name="location" className="location-here">
                <option value="Dhaka">Các nước </option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Chitagong">Chitagong</option>
                <option value="SKhulna">SKhulna</option>
              </select>
            </li>
            <li className="location">
              <select name="location" className="location-here">
                <option value="Dhaka">Thành phố </option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Chitagong">Chitagong</option>
                <option value="SKhulna">SKhulna</option>
              </select>
            </li>

            {/* <li className="location">
              <select name="location" className="location-here">
                <option value="Dhaka">Room</option>
                <option value="Rajshahi">Single</option>
                <option value="Chitagong">Double</option>
                <option value="SKhulna">Double</option>
              </select>
            </li> */}
            {/* <li className="location">
              <select name="location" className="location-here member">
                <option value="Dhaka">Member</option>
                <option value="Rajshahi">1 Person</option>
                <option value="Chitagong">2 Person</option>
                <option value="SKhulna">3 Person</option>
              </select>
            </li> */}
          </ul>
          <div className="filter-part">
            <div className="range-wrapper">
              <div className="range-input">
                <input type="text" id="amount" readOnly style={{border: 0, color: '#f6931f', fontWeight: 'bold'}} />
              </div>
              <label htmlFor="amount">Giá :</label>
              <div id="slider-range" />
            </div>
            <div className="filter-button">
              <button type="submit">Tìm kiếm {'&'} đặt lịch ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ========= Start Feature Area========= */}
  {/* feature-area start */}
  <section className="feature-area">
    <div className="container">
      <div className="separator pt-115 pb-110">
        <div className="row">
          <div className="col-lg-4 col-md-4">
          <div className="text-center">
                    <div className="feature-img">
                    <img src="img/icon/rate.png" alt="feature-img" />
                </div>
                </div>
            <div className="single-feature-item d-lg-flex align-items-center mt-3">

              <div className="feature-content text-center">
                <h4>TẬN TÂM VỚI KHÁCH HÀNG</h4>
                <p align="justify">Với đội ngũ nhân viên chuyên nghiệp, tận tâm và giàu kinh nghiệm cùng phương trâm "Khách hàng là số 1", chúng tôi sẽ mang đến cho khách hàng sự an tâm, hài lòng khi sử dụng sản phẩm, dịch vụ tại Thảo Nguyên Xanh travel.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
              <div className="text-center">
                <div className="feature-img">
                    <img src="img/icon/rate.png" alt="feature-img" />
                </div>
              </div>
            <div className="single-feature-item d-lg-flex align-items-center mt-3">
              <div className="feature-content text-center">
                <h4>CHẤT LƯỢNG TUYỆT HẢO</h4>
                <p align="justify">Giúp khách hàng có được những giải pháp và sản phẩm, dịch vụ tốt nhất, 
                phù hợp nhất với điều kiện và nhu cầu thực tế. Cam kết mang lại sự hài lòng cho quý khách hàng!
                {'   '}
                
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
              <div className="text-center">
                <div className="feature-img">
                    <img src="img/icon/notebook.png" alt="feature-img" />
                </div>
              </div>
            <div className="single-feature-item d-lg-flex align-items-center mt-3">
              <div className="feature-content text-center">
                <h4>CHI PHÍ MANG LẠI GIÁ TRỊ THỰC</h4>
                <p align="justify">Với quan điểm là một đơn vị "hào phóng cho đi và đón nhận tuyệt vời" Chúng tôi tin sẽ mang đến cho khách hàng một dịch vụ tuyệt hảo nhưng đảm bảo tiết kiệm tối đa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Feature Area */}
  {/* ========= Start Home Service Area========= */}
  <section className="service-home pt-115 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="service-home-img">
            <img src="img/service/service.png" alt="service-image" />
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="service-home-content">
            <h2>THẢO NGUYÊN XANH - ĐỒNG HÀNH MIỀN ĐẤT ƯỚC</h2>
            <h5>GREEN STEPPE - JOURNEY TO DREAMED LAND</h5>
            <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs.</p>
            <ul>
              <li><i className="icofont icofont-arrow-right" />First Class Flights</li>
              <li><i className="icofont icofont-arrow-right" />City Tours</li>
              <li><i className="icofont icofont-arrow-right" />Holiday &amp; Seasonal Tours</li>
              <li><i className="icofont icofont-arrow-right" />Specisl Packege Tours</li>
              <li><i className="icofont icofont-arrow-right" />Cultural &amp; Theater Tours</li>
              <li><i className="icofont icofont-arrow-right" />Wild &amp; Adventure Tours</li>
            </ul>
            <a className="btn-2" href="#">POINTS OF INTEREST</a>
          </div>
        </div>
      </div>
    </div>
  </section> {/* End Home Service Area */}
  {/* ========= Start Destination Area========= */}
  <section className="destination-area pt-115 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="destination-content">
            <h2>TOP DESTINATION</h2>
            <h5>EUROPE, PACKAGE SRARTED <span>$2500</span></h5>
            <div className="destination-rating">
              <ul>
                <li><i className="icofont icofont-ui-rating" /></li>
                <li><i className="icofont icofont-ui-rating" /></li>
                <li><i className="icofont icofont-ui-rating" /></li>
                <li><i className="icofont icofont-ui-rating" /></li>
                <li><i className="icofont icofont-ui-rating" /></li>
              </ul>
            </div>
            <p>Since, 1995 We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
            <div className="des-feature">
              <ul>
                <li><i className="icofont icofont-arrow-right" />5 Days, 4 Night</li>
                <li><i className="icofont icofont-arrow-right" />5 Star Accommodations</li>
                <li><i className="icofont icofont-arrow-right" />Handpicked Hotels</li>
                <li><i className="icofont icofont-arrow-right" />Given Transportation</li>
              </ul>
              <a className="btn-2 btn-des" href="#">POINTS OF INTEREST</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="destination-img">
            <img src="img/service/destination.png" alt="destination-image" />
          </div>
        </div>
      </div>
    </div>
  </section> {/* End Destination Area */}
  {/* ========= Start Package Area========= */}
  <section className="package-area home-package pt-110 pb-90" data-overlay={3}>
    <div className="container">
      <div className="section-title text-center pb-45">
        <h2 className="white">POPULAR PACKAGES</h2>
        <h4 className="white">TRAVEL EXPRESS PROVIDE</h4>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="single-package mb-30">
            <div className="package-img">
              <img src="img/package/pack-1.jpg" alt="package image" />
              <div className="package-cost">$3000</div>
            </div>
            <h5 className="white"><span>AMERICA</span> - 5 Days, 4 Nights</h5>
            <p className="white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
            <a className="read-more" href="#">READ MORE <i className="icofont icofont-arrow-right" /></a>
          </div>
        </div> {/* End Single Package */}
        <div className="col-lg-4">
          <div className="single-package mb-30">
            <div className="package-img">
              <img src="img/package/pack-2.jpg" alt="package image" />
              <div className="package-cost">$3000</div>
            </div>
            <h5 className="white"><span>THAILAND</span> - 4 Days, 3 Nights</h5>
            <p className="white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
            <a className="read-more" href="#">READ MORE <i className="icofont icofont-arrow-right" /></a>
          </div>
        </div> {/* End Single Package */}
        <div className="col-lg-4 ">
          <div className="single-package mb-30">
            <div className="package-img">
              <img src="img/package/pack-3.jpg" alt="package image" />
              <div className="package-cost">$3000</div>
            </div>
            <h5 className="white"><span>JAPAN</span> - 3 Days, 2 Nights</h5>
            <p className="white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
            <a className="read-more" href="#">READ MORE <i className="icofont icofont-arrow-right" /></a>
          </div>
        </div> {/* End Single Package */}
      </div>
      <div className="more-package text-center">
        <a className="btn-1 more-pack" href="#">MORE PACKAGE</a>
      </div>
    </div>
  </section>
  {/* ========= Start Blog Area========= */}
  <section className="blog-area pt-110 ">
    <div className="container">
      <div className="section-title text-center pb-45">
        <h2>LATEST NEWS FROM BLOG</h2>
        <h4>EXPERIENCE FROM TRAVELERS</h4>
      </div>
      <div className="section-devider pb-80">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-blog-post mb-30">
              <a href="#"><img src="img/blog/blog-1.jpg" alt="blog-image" /></a>
              <div className="single-blog-content">
                <span className="blog-date">10 July 2017</span>
                <a href="#">
                  <h4>What's Open in the Caribbean After Hurricanes Irma and Maria</h4>
                </a>
                <a className="read-more blog-btn" href="#">READ MORE
                  <i className="icofont icofont-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-blog-post mb-30">
              <a href="#"><img src="img/blog/blog-2.jpg" alt="blog-image" /></a>
              <div className="single-blog-content">
                <span className="blog-date">20 June 2017 </span>
                <a href="#">
                  <h4>First New louvre of the New Year: the Seabourn museum</h4>
                </a>
                <a className="read-more blog-btn" href="#">READ MORE
                  <i className="icofont icofont-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-blog-post mb-30">
              <a href="#"><img src="img/blog/blog-3.jpg" alt="blog-image" /></a>
              <div className="single-blog-content">
                <span className="blog-date">10 May 2017 </span>
                <a href="#">
                  <h4>Avalon Southeast Asia: A World of Difference site</h4>
                </a>
                <a className="read-more blog-btn" href="#">READ MORE
                  <i className="icofont icofont-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ========= Start Gallery Area========= */}
  <section className="gallery-area ptb-118">
    <div className="container-fluid no-padding">
      <div className="gallery-active owl-carousel">
        <div className="single-gallery-item">
          <img src="img/gallery/gallery-1.jpg" alt="gallery-image" />
          <div className="gallery-info">
            <a href="#"><h4>David Buin</h4></a>
            <h6>June 20, 2017</h6>
          </div>
          <div className="gallary-video">
            <a href="https://www.youtube.com/watch?v=6NC_ODHu5jg" className="video-play video-btn mfp-iframe">
              <i className="icofont icofont-ui-play" />
            </a>
          </div>
        </div>
        <div className="single-gallery-item">
          <img src="img/gallery/gallery-2.jpg" alt="gallery-image" />
          <div className="gallery-info">
            <a href="#"><h4>David Buin</h4></a>
            <h6>April 10, 2017</h6>
          </div>
          <div className="gallary-video">
            <a href="https://www.youtube.com/watch?v=6NC_ODHu5jg" className="video-play video-btn mfp-iframe">
              <i className="icofont icofont-ui-play" />
            </a>
          </div>
        </div>
        <div className="single-gallery-item">
          <img src="img/gallery/gallery-3.jpg" alt="gallery-image" />
          <div className="gallery-info">
            <a href="#"><h4>David Buin</h4></a>
            <h6>March 30, 2017</h6>
          </div>
          <div className="gallary-video">
            <a href="https://www.youtube.com/watch?v=6NC_ODHu5jg" className="video-play video-btn mfp-iframe">
              <i className="icofont icofont-ui-play" />
            </a>
          </div>
          <div className="gallary-video">
            <a href="https://www.youtube.com/watch?v=6NC_ODHu5jg" className="video-play video-btn mfp-iframe">
              <i className="icofont icofont-ui-play" />
            </a>
          </div>
        </div>
        <div className="single-gallery-item">
          <img src="img/gallery/gallery-2.jpg" alt="gallery-image" />
          <div className="gallery-info">
            <a href="#"><h4>David Buin</h4></a>
            <h6>July 30, 2017</h6>
          </div>
        </div>
        <div className="single-gallery-item">
          <img src="img/gallery/gallery-1.jpg" alt="gallery-image" />
          <div className="gallery-info">
            <a href="#"><h4>David Buin</h4></a>
            <h6>June 20, 2017</h6>
          </div>
          <div className="gallary-video">
            <a href="https://www.youtube.com/watch?v=6NC_ODHu5jg" className="video-play video-btn mfp-iframe">
              <i className="icofont icofont-ui-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ========= Start Footer Area========= */}
</div>

        </React.Fragment>
    )
}

export default Index
