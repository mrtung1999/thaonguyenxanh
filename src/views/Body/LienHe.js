import React from 'react'
import PhanDuoiLienHe from './LienHe/PhanDuoiLienHe'
import PhanTrenLienHe from './LienHe/PhanTrenLienHe'

function LienHe( {Tab} ) {
    return (
        <React.Fragment>
            <PhanTrenLienHe Tab = {Tab}></PhanTrenLienHe>
            <PhanDuoiLienHe></PhanDuoiLienHe>
        </React.Fragment>
    )
}

export default LienHe
