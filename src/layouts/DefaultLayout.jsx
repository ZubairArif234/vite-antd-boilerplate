import { Layout, Space, Typography } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const { Title } = Typography;
const DefaultLayout = () => {
  return (
    <Space direction="vertical">
      <Title level={2}>Default Layout</Title>
      <Outlet />
    </Space>
  );
};

export default DefaultLayout;
