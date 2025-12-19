import { useState } from "react";

export default function App() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>🔔 Nhắc việc xem code</h1>
      <p>Chọn dự án và bật nhắc việc tự động</p>

      <div style={{ marginTop: 20 }}>
        <h3>Dự án</h3>
        <select>
          <option>Website bán hàng</option>
          <option>Ứng dụng quản lý</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Lịch nhắc</h3>
        <select>
          <option>Mỗi 30 phút</option>
          <option>Mỗi 3 giờ</option>
          <option>Mỗi ngày</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />
          &nbsp; Bật nhắc việc
        </label>
      </div>

      <button style={{ marginTop: 20 }}>
        Lưu cài đặt
      </button>
    </div>
  );
}
