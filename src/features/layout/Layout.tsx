import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import useComponent from "./useComponent";

function PrincipalLayout() {
  const { currentPage, menuItems, pageHeight, onMenuClick } = useComponent();

  const { Header } = Layout;

  return (
    <Layout
      style={{
        minHeight: pageHeight,
        height: "100%",
      }}
    >
      <Header style={{ background: "#ebebeb" }}>
        <Menu
          onClick={onMenuClick}
          selectedKeys={[currentPage]}
          mode="horizontal"
          items={menuItems}
          style={{ background: '#ebebeb', marginLeft: -35 }}
        />
      </Header>
      <Layout style={{ height: "100%" }}>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PrincipalLayout;
