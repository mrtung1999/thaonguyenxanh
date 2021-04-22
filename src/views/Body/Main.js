import React from 'react'
import DanhMucTourDuLich from './DanhMucTourDuLich'
import LienHe from './LienHe'
import Index from './TrangChinh/Index'

function Main( {Tab} ) {
    switch(Tab){
        case 'Index':
            return (
                <React.Fragment>
                    <Index></Index>
                </React.Fragment>
            )
        case 'Du lịch Việt Nam':
            return (
                <React.Fragment>
                    <DanhMucTourDuLich Tab={Tab}></DanhMucTourDuLich>
                </React.Fragment>
        )
        case 'Du lịch Quốc tế':
            return (
                <React.Fragment>
                    <DanhMucTourDuLich Tab={Tab}></DanhMucTourDuLich>
                </React.Fragment>
        )
        case 'Tour':
            return (
                <React.Fragment>
                    <DanhMucTourDuLich Tab={Tab}></DanhMucTourDuLich>
                </React.Fragment>
        )
        case 'Liên Hệ':
            return (
                <React.Fragment>
                    <LienHe Tab={Tab}></LienHe>
                </React.Fragment>
        )
    }
}

export default Main
