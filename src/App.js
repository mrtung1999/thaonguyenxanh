import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import Main from './views/Body/Main';
import hosting from './hosting/host' 
function App() {
  const [Tab,SetTab] = React.useState(
    window.localStorage.getItem('Tab') === null ? 'Index' : window.localStorage.getItem('Tab')
  )

  const onTab = (e)=>{
    // alert(tab)
    window.localStorage.setItem('Tab',e)

    if(e === 'Index'){
      window.location.href = "./"
    }
    
    SetTab(e)
  }
  console.log(Tab)

  const LayNganhHang = async ()=>{
    const response = await fetch(hosting.NganhHang)
    // const response = await fetch(hosting.NganhHang,{
    //   method:"POST",
      
    //   body:{},
    // })
    // POST Them
    // PUT Sua
    //DELETE Xoa
    const JsonData = await response.json()
    window.localStorage.setItem('Nganh_ThaoNguyenXanh',JSON.stringify(JsonData))
    console.log(JsonData)
  }

  React.useEffect(()=>{
    LayNganhHang()
  },[])
  return (
    <React.Fragment>

      <Header onTab = {onTab} > </Header>
      <Main Tab = {Tab} ></Main>
      <Footer></Footer>

    </React.Fragment>
  );
}

export default App;
