import React from 'react';

function PhanDuoiLienHe() {
    return (
        <React.Fragment>
        <div id="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14904.105453804023!2d107.0440239!3d20.9514564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d91bca48fc3a576!2zQ8O0bmcgdHkgQ1BUTSAmIER1IGxpzKNjaCBUaGHMiW8gTmd1ecOqbiBYYW5o!5e0!3m2!1sen!2s!4v1618935057586!5m2!1sen!2s" width={'100%'} height={450} style={{border: 0}} allowFullScreen loading="lazy" />

        </div>
        <div className="text-center mb-5 mt-3">
          <h3>THÔNG TIN LIÊN HỆ</h3>
          <p style={{fontSize:'18px'}} className="mt-3">Địa chỉ: Số 23 Vườn Đào, Đường Hạ Long, Tp Hạ Long, Quảng Ninh</p>
          <p style={{fontSize:'18px'}}>Add : No 23 Vuon Dao Street, Ha Long Road, Bai Chay Ward, Ha Long City</p>
          <p style={{fontSize:'18px'}}>Tel: (+84-33) 3848.288 - Fax: (+84-33) 3848.288</p>
          <p style={{fontSize:'18px'}}>Hotline: (+84)972.268.698 / 903.268.698</p>
          <p style={{fontSize:'18px'}}>Email: tnxtravel@gmail.com</p>
          <p style={{fontSize:'18px'}}>Website: www.thaonguyenxanhtravel.com - tnxtravel.com.vn</p>

        </div>
        
        <div className="contact-area">
          <div className="container">
            <div className="contact-info">
              <div className="row">
              </div>
            </div>
            <div className="contact-field">
              <form id="ajax-contact" action="https://www.devsnews.com/template/travelexpress/travelexpress/mail.php" method="post">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-contact-field">
                      <input type="text" name="name" className="text-field" id="name" placeholder="Họ tên" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single-contact-field">
                      <input type="text" name="last_name" className="text-field" id="l-name" placeholder="Tên và tên đệm" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single-contact-field">
                      <input type="email" name="email" className="text-field" id="email" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single-contact-field">
                      <input type="text" name="phone" className="text-field" id="phone" placeholder="Số điện thoại" required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="single-contact-field">
                      <input type="text" name="subject" className="text-field" id="subject" placeholder="Tiêu đề" required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="single-contact-field">
                      <textarea name="message" id="msg" placeholder="Nội dung" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 text-center mb-5">
                    <button type="submit" className="submit-btn">Gửi liên hệ</button>
                  </div>
                </div>
                <div id="form-messages" />
              </form>
            </div>
          </div>
        </div>

          </React.Fragment>
    );
}

export default PhanDuoiLienHe;