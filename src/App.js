import { useState } from "react";
import "./App.css";
import { List } from "./List";

const CUOC_GOI_GAN_NHAT = [
  {
    id: 1,
    DiaChiDon: "01, Điện Biên Phủ, Phường 2, Quận 3, TPHCM",
    ThoiGian: "2023-10-12",
    LoaiXe: "1",
    TrangThai: true,
  },
  {
    id: 2,
    DiaChiDon: "01, Điện Biên Phủ, Phường 2, Quận 3, TPHCM",
    ThoiGian: "2023-10-12",
    LoaiXe: "1",
    TrangThai: true,
  },
  {
    id: 3,
    DiaChiDon: "01, Điện Biên Phủ, Phường 2, Quận 3, TPHCM",
    ThoiGian: "2023-10-12",
    LoaiXe: "1",
    TrangThai: true,
  },
  {
    id: 4,
    DiaChiDon: "01, Điện Biên Phủ, Phường 2, Quận 3, TPHCM",
    ThoiGian: "2023-10-12",
    LoaiXe: "1",
    TrangThai: true,
  },
  {
    id: 5,
    DiaChiDon: "01, Điện Biên Phủ, Phường 2, Quận 3, TPHCM",
    ThoiGian: "2023-10-12",
    LoaiXe: "1",
    TrangThai: true,
  },
  {
    id: 6,
    DiaChiDon: "01, Điện Biên Phủ, Phường 2, Quận 3, TPHCM",
    ThoiGian: "2023-10-12",
    LoaiXe: "1",
    TrangThai: true,
  },
];

function App() {
  const [inputs, setInputs] = useState({
    tenKH: '',
    sdt: '',
    soNha: '',
    duong: '',
    phuong:'',
    quan: '',
    thanhPho: '',
    loaiXe:''
  })

  const inputChangeHandler =()=>{
    setInputs((curInputs) =>{
      return{
        ...curInputs,
        value: inputs
      }
    })
  }

  const submitHandler = () =>
  {

  }
  return (
    <div class="form-container">
      <div>
        <List class="list" cuocGois={CUOC_GOI_GAN_NHAT} />
      </div>
      <form class="form-group">
        <input
          id="ten-KH"
          class="form-field"
          type="text"
          placeholder="Tên Khách Hàng"
          name="tenKH"
          onChange={inputChangeHandler.bind(this, 'tenKH')}
        />
        <input
          id="SDT"
          class="form-field"
          type="text"
          placeholder="Số điện thoại"
          name="SDT"
          onChange={inputChangeHandler.bind(this, 'sdt')}

        />
        <input
          id="so-nha"
          class="form-field"
          type="text"
          placeholder="Số nhà"
          name="soNha"
          onChange={inputChangeHandler.bind(this, 'soNha')}

        />
        <input
          id="Duong"
          class="form-field"
          type="text"
          placeholder="Đường"
          name="Duong"
          onChange={inputChangeHandler.bind(this, 'duong')}

        />
        <input
          id="Phuong"
          class="form-field"
          type="text"
          placeholder="Phường"
          name="Phuong"
          onChange={inputChangeHandler.bind(this, 'phuong')}

        />
        <input
          id="Quan"
          class="form-field"
          type="text"
          placeholder="Quận"
          name="Quan"
          onChange={inputChangeHandler.bind(this, 'quan')}

        />
        <input
          id="thanh-pho"
          class="form-field"
          type="text"
          placeholder="Thành Phố"
          name="thanhPho"
          onChange={inputChangeHandler.bind(this, 'thanhPho')}
        />
        <select onChange={inputChangeHandler.bind(this,'loaiXe')} title="Loại xe">
          <option>Xe 4 chỗ</option>
          <option>Xe 7 chỗ</option>
          <option>Xe VIP</option>
          <option>Xe giá rẻ</option>
        </select>

        <button class="form-field" type="submit" onSubmit={submitHandler}>
          Điều phối
        </button>
      </form>
    </div>
  );
}

export default App;
