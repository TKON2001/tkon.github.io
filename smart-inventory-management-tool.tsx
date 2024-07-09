import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bell, BarChart2, Package, TrendingUp, FileText } from 'lucide-react';

const DuBaoNhuCau = () => {
  const duLieu = [
    { thang: 'T1', thucTe: 4000, duBao: 2400 },
    { thang: 'T2', thucTe: 3000, duBao: 1398 },
    { thang: 'T3', thucTe: 2000, duBao: 9800 },
    { thang: 'T4', thucTe: 2780, duBao: 3908 },
    { thang: 'T5', thucTe: 1890, duBao: 4800 },
    { thang: 'T6', thucTe: 2390, duBao: 3800 },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Dự báo Nhu cầu</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={duLieu}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="thang" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="thucTe" fill="#8884d8" name="Thực tế" />
          <Bar dataKey="duBao" fill="#82ca9d" name="Dự báo" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const HeCanhBao = () => {
  const [canhBao] = useState([
    { id: 1, tinNhan: 'Hàng tồn kho thấp: iPhone 13 (còn 5 sản phẩm)' },
    { id: 2, tinNhan: 'Chênh lệch: Số lượng AirPods thực tế (50) khác với số liệu hệ thống (55)' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Cảnh báo</h2>
      <ul className="space-y-2">
        {canhBao.map((cb) => (
          <li key={cb.id} className="flex items-center text-red-600">
            <Bell className="mr-2" size={16} />
            {cb.tinNhan}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PhanTichABC = () => {
  const duLieu = [
    { nhom: 'A', giaTri: 80 },
    { nhom: 'B', giaTri: 15 },
    { nhom: 'C', giaTri: 5 },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Phân tích ABC</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={duLieu}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nhom" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="giaTri" fill="#8884d8" name="Giá trị (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CongCuQuanLyHangTonKhoThongMinh = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Công cụ Quản lý Hàng tồn kho Thông minh</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DuBaoNhuCau />
        <HeCanhBao />
        <PhanTichABC />
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Tối ưu hóa Đặt hàng</h2>
          <p>Số lượng đặt hàng tối ưu dựa trên tốc độ bán hàng và thời gian giao hàng.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Báo cáo Hiệu suất</h2>
          <p>Báo cáo chi tiết về hiệu suất hàng tồn kho, tỷ lệ quay vòng và chi phí.</p>
        </div>
      </div>
    </div>
  );
};

export default CongCuQuanLyHangTonKhoThongMinh;
