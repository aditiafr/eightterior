import React, { useState } from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


const MySidebar = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    function getItem(label, key, icon, href, children) {
        return {
            key,
            icon,
            label: href ? <Link to={href}>{label}</Link> : label,
            children,
        };
    }

    const items = [
        getItem("Dashboard", "1", <PieChartOutlined />, "/dashboard"),
        getItem("Project", "2", <PieChartOutlined />, "/dashboard/project"),
    ];

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={250} // Menambahkan lebar Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    background: colorBgContainer,
                }}
            >
                <div className="demo-logo-vertical" />
                <div className="w-full px-4 py-2 flex items-center">
                    {/* {!collapsed ? (
                        <img src="/assets/images/logo-text.png" alt="..." className="w-full" />
                    ) : (
                        <img src="/assets/images/logo.png" alt="..." className="w-12" />
                    )} */}
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={items}
                />
            </Sider>
            <Layout
                style={{
                    marginLeft: collapsed ? 80 : 250, // Menyesuaikan margin kiri sesuai dengan lebar Sider
                    transition: "margin-left 0.2s",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: "24px 16px 0",
                        overflow: "initial",
                        flex: 1,
                    }}
                >
                    {children}
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default MySidebar;