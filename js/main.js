getEle('inHD').setAttribute("disabled", true);

getEle('tinhTien').addEventListener('click', function() {
    var typeUber = document.querySelector('input[name=selector]:checked').id;
    var soKM = parseFloat(getEle('soKM').value);
    var time = parseFloat(getEle('time').value);
    var tongTien = TinhTien(typeUber, soKM, time);
    getEle('divThanhTien').style.display = 'block';
    getEle('xuatTien').innerHTML = tongTien;
    getEle('inHD').removeAttribute("disabled");
    getEle('inHD').addEventListener('click', function() {
        getEle('HD_typeUber').innerHTML = typeUber;
        getEle('HD_thoiGianCho').innerHTML = time + ' phút';
        getEle('HD_soKM').innerHTML = soKM + ' Km';
        getEle('HD_tongTien').innerHTML = tongTien + ' VND';
    })
})

var bangGiaUber = [
    [8000, 12000, 10000, 2000],
    [9000, 14000, 12000, 3000],
    [10000, 16000, 14000, 4000],
]

function TinhTien(typeUber, soKM, time) {
    var tongTien = 0;
    var bangGia = MenhGia(typeUber);
    if (soKM > 21) {
        tongTien = bangGiaUber[bangGia][0] + bangGiaUber[bangGia][1] * 20 + bangGiaUber[bangGia][2] * (soKM - 21);
    } else if (soKM > 1) {
        tongTien = bangGiaUber[bangGia][0] + bangGiaUber[bangGia][1] * (soKM - 1);
    } else if (soKM > 0) {
        tongTien = bangGiaUber[bangGia][0] * (soKM);
    }
    tongTien += bangGiaUber[bangGia][3] * time;
    return Math.round(tongTien);
}

function MenhGia(typeUber) {
    if (typeUber == 'uberX') {
        return 0;
    }
    if (typeUber == 'uberSUV') {
        return 1;
    }
    if (typeUber == 'uberBlack') {
        return 2;
    }
}

function getEle(id) {
    return document.getElementById(id);
}