/* Bài 1 : Tính tiền Lương Nhân viên 
    Mô hình 3 khối :
    - Input :
        - Luong1Ngay
        - NgayCong
    - Xử lý :
        - Tạo biến cho Luong1Ngay vs NgayCong
        - Tạo biến TienLuong
        - Gán giá trị cho Luong1Ngay vs NgayCong
        - Sử đụng công thức để tính TienLuong = Luong1Ngay * NgayCong
    - Output :
        -  TienLuong = ??????
*/

document.getElementById('btntTinhTienLuong').onclick = function() {
        var luongMotNgay = document.getElementById('luongMotNgay').value;
        var soNgayCong = document.getElementById('soNgayCong').value;
        var tienLuong = 0;
        tienLuong = luongMotNgay * soNgayCong;
        document.getElementById('tienLuong').innerHTML = ' Lương được nhận :' + tienLuong.toString();

    }
    /* End Bài 1 */

/* Bài 2 : Tính giá trị trung bình
 Mô hình 3 khối :
    - Input :
        - So1
        - So2
        - So3
        - So4
        - So5
    - Xử lý :
        - Tạo biến cho So1 ,So2 ,So3 ,So4 ,So5
        - Tạo biến GiaTTB
        - Gán giá trị cho So1 ,So2 ,So3 ,So4 ,So5
        - Sử đụng công thức để tính GiaTTB = (So1 + So2 + So3 + So4 + So5)/5
    - Output :
        -  GiaTTB = ??????
*/
document.getElementById('btnTB').onclick = function() {
    var soT1 = Number(document.getElementById('soT1').value);
    var soT2 = Number(document.getElementById('soT2').value);
    var soT3 = Number(document.getElementById('soT3').value);
    var soT4 = Number(document.getElementById('soT4').value);
    var soT5 = Number(document.getElementById('soT5').value);
    var kQTTB = 0;
    kQTTB = (soT1 + soT2 + soT3 + soT4 + soT5) / 5;
    document.getElementById('txtTB').innerHTML = 'Kêt quả trung bình = ' + kQTTB;
}

/* End Bài 2 */

/* Bài 3 : Đổi tiền 
Mô hình 3 khối :
    - Input :
        - USD
    - Xử lý :
        - Tạo biến  USD
        - Tạo biến GiaUSD = 23500 
        - Tạo biến DoiTienVND 
        - Gán giá trị cho USD
        - Sử đụng công thức để tính DoiTienVND = USD * GiaUSD
    - Output :
        - DoiTienVND =  ?????
*/
document.getElementById('btnCur').onclick = function() {
        var uSD = document.getElementById('uSD').value;
        var doiTien = new Intl.NumberFormat("vn-VN").format(23500 * uSD);
        document.getElementById('txtCur').innerHTML = 'Money ' + doiTien;
    }
    /* End Bài 3 */

/* Bài 4 : Tính diện tích , chu vi hình chữ nhật 
    Mô hình 3 khối :
    - Input :
        - Dai
        - Rong
    - Xử lý :
        - Tạo biến cho Canh1 , Canh2
        - Tạo biến Chuvi , DienTich
        - Gán giá trị cho Canh1 , Canh2
        - Sử đụng công thức để tính ChuVi = (Dai + Rong)*2
        - Sử đụng công thức để tính DienTich = (Dai * Rong)
    - Output :
        - ChuVi =  ?????
        - DienTich = ?????
*/
document.getElementById('btnTinh').onclick = function() {
        var chieuDai = Number(document.getElementById('chieuDai').value);
        var chieuRong = Number(document.getElementById('chieuRong').value);
        var chuVi = 0;
        var dienTich = 0;
        chuVi = 2 * Number(chieuDai + chieuRong);
        dienTich = chieuDai * chieuRong;
        document.getElementById('txtTinh').innerHTML = `Chu vi =   ${chuVi} m ;  Dien Tich =   ${dienTich} m2`;
    }
    /* En Bài 4 */

/* Bài 5 : Tỏng 2 ký số 
Mô hình 3 khối :
    - Input :
        - So
    - Xử lý :
        - Tạo biến cho So
        - Tạo biến SoHangDv , SoHangChuc , Tong
        - Gán giá trị cho So
        - Sử đụng công thức để tính SoHangDV = So % 10 ;
        - Sử đụng công thức để tính SoHangChuc = So / 10 ;
        - Tong = SoHangDv + SoHangChuc
    - Output :
        - Tong =  ?????
*/
document.getElementById('btnTong').onclick = function() {
        var so2ChuSo = document.getElementById('so2ChuSo').value;
        var SoHangDV = Math.floor(so2ChuSo % 10);
        var SoHangChuc = Math.floor(so2ChuSo / 10);
        var tong = Number(SoHangDV + SoHangChuc);
        document.getElementById('Tong').innerHTML = 'Tổng 2 ký số = ' + tong;
    }
    /* End Bài 5 */