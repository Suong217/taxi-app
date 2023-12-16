function CuocGoiRow({ cuocGoi }) {
  const trangThai = cuocGoi.TrangThai ? 1 : 0;

  return (
    <tr>
      <td>{cuocGoi.id}</td>
      <td>{cuocGoi.ThoiGian}</td>
      <td>{cuocGoi.DiaChiDon}</td>
      <td>{cuocGoi.LoaiXe}</td>
      <td>{trangThai}</td>
    </tr>
  );
}

function CuocGoiTable({ cuocGois }) {
  const rows = [];

  cuocGois.forEach((cuocGoi) => {
    rows.push(<CuocGoiRow cuocGoi={cuocGoi} key={cuocGoi.id} />);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Thời gian</th>
          <th>Địa chỉ đón</th>
          <th>Loại xe</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export const List = ({ cuocGois }) => {
  return (
    <div>
      <h2>Các cuộc gọi gần nhất</h2>
      <CuocGoiTable cuocGois={cuocGois} />
    </div>
  );
};
