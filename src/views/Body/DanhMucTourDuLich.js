import React from 'react'
import PhanDuoiDanhMucTourDuLich from './DanhMucTourDuLich/PhanDuoiDanhMucTourDuLich'
import PhanTrenDanhMucTourDuLich from './DanhMucTourDuLich/PhanTrenDanhMucTourDuLich'

function DanhMucTourDuLich({Tab}) {
    return (
        <React.Fragment>
            <PhanTrenDanhMucTourDuLich Tab={Tab}></PhanTrenDanhMucTourDuLich>
            <PhanDuoiDanhMucTourDuLich></PhanDuoiDanhMucTourDuLich>
        </React.Fragment>
    )
}

export default DanhMucTourDuLich
