import { Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Outlet } from "react-router-dom";

const { Title } = Typography;
const DashboardLayout = () => {
  return (
    <Space direction="vertical">
      <Title level={2}>Default Layout</Title>
      <Outlet />
    </Space>
  );
};

export default DashboardLayout;
