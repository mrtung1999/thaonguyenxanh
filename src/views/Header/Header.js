import React, { useState } from 'react'
import LogoThaoNguyenXanh from '../../assets/logo.png'
function Header( {onTab} ) {

    const [Nganh_ThaoNguyenXanh,SetNganh_ThaoNguyenXanh] = useState([])

    const LayDuLieu = async ()=>{
        const Data = window.localStorage.getItem('Nganh_ThaoNguyenXanh') === null ? [] :
        JSON.parse(window.localStorage.getItem('Nganh_ThaoNguyenXanh'))
        SetNganh_ThaoNguyenXanh(Data)
    }
    React.useEffect(()=>{
        LayDuLieu()
    },[])
    console.log(Nganh_ThaoNguyenXanh)
    return (
        <React.Fragment>
{/* Start Header Area */}
<header className="header-area">
  <div className="container">
    <div className="header-top separator d-none d-md-block">
      <div className="row">
        <div className="col-lg-6 col-md-8">
          <div className="call-to-action">
            <span>Liên hệ với chúng tôi: </span>
            <i className="fas fa-phone" />
            Hotline: (+84)972.268.698 / 903.268.698
          </div>
        </div>
        <div className="col-lg-5 col-md-2">
          <div className="header-social-icon f-right">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
              <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
            </ul>
          </div>
        </div>
        {/* <div className="col-lg-1 col-md-2">
          <div className="user-account text-right">
            <a href="#">ACCOUNT</a>
          </div>
        </div> */}
      </div>
    </div>
    <div className="main-menu">
      <div className="row">
        <div className="col-lg-3 d-flex align-items-center">
          <div className="logo">
            <a href="index.html"><img src={LogoThaoNguyenXanh} alt="logo" style={{zoom:0.3}}/></a>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="basic-menu f-right">
            <nav id="mobile-menu">
              <ul>
                <li>
                  <a style={{cursor:'pointer'}} onClick={async ()=>{
                      onTab('Index')
                  }}>Trang chính </a>
                </li>
                {Nganh_ThaoNguyenXanh.map(x=>(
                <li>
                <a style={{cursor:'pointer'}} onClick={async ()=>{
                    onTab(x.ten_nganh_hang)
                 }}>{x.ten_nganh_hang}</a>
                     </li>
                ))}
                <li>
                  <a href="package-grid.html">Du lịch</a>
                </li>
                <li>
                  <a style={{cursor:'pointer'}} onClick={async ()=>{
                      onTab('Liên Hệ')
                  }}>Liên hệ</a>
                </li>

              </ul>
            </nav>
          </div>
          <div className="mobile-menu" />
        </div>
      </div>
    </div>
  </div>
</header>
{/* End Header Area */}

        </React.Fragment>
    )
}

export default Header
