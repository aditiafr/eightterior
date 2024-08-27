import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Layout, Menu, message, theme } from 'antd';
import {
    AppstoreOutlined,
    LikeOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    OneToOneOutlined,
    PieChartOutlined,
    SnippetsOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const { Header, Content, Footer, Sider } = Layout;

const MySidebar = ({ children }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    const [selectedKeys, setSelectedKeys] = useState(["1"]);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };
        if (mobile) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobile]);

    useEffect(() => {
        // Read the selected key and open keys from localStorage
        const storedSelectedKey = localStorage.getItem('selectedMenuKey');

        if (storedSelectedKey) {
            setSelectedKeys([storedSelectedKey]);
        }
    }, []);

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
        getItem("Category", "2", <AppstoreOutlined />, "/dashboard/category"),
        getItem("Project", "3", <SnippetsOutlined />, "/dashboard/project"),
        getItem("Carousel", "4", <OneToOneOutlined />, "/dashboard/carousel"),
        getItem("Review", "5", <LikeOutlined />, "/dashboard/review"),
    ];

    const handleMenuClick = (e) => {
        // Save the clicked menu key to localStorage
        if (mobile) {
            setCollapsed(true);
        }
        localStorage.setItem('selectedMenuKey', e.key);
        setSelectedKeys([e.key]);
    };

    const handleSignOut = () => {
        Cookies.remove('auth_token');
        localStorage.clear();
        navigate('/login');
        message.success('You have successfully Sign out.');
    }

    const menuItems = [
        {
            key: 'account',
            icon: <UserOutlined />,
            label: 'Profile Account',
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: <button onClick={handleSignOut}>Sign Out</button>,
        },
    ];

    const dataSession = JSON.parse(localStorage.getItem('data'));

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {!mobile || (mobile && !collapsed) ? (
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={250}
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
                        {!collapsed ? (
                            <img src="/assets/images/logo-text.png" alt="..." className="w-full" />
                        ) : (
                            <img src="/assets/images/logo.png" alt="..." className="w-12" />
                        )}
                    </div>
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={selectedKeys}
                        items={items}
                        onClick={handleMenuClick}
                    />
                </Sider>
            ) : null}
            <Layout
                style={{
                    marginLeft: mobile && collapsed ? 0 : (collapsed ? 80 : 250),
                    transition: "margin-left 0.2s",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 42,
                            height: 42,
                            marginLeft: mobile ? "8px" : 0,
                        }}
                    />
                    {mobile && !collapsed ?
                        ""
                        : (
                            <Dropdown menu={{ items: menuItems }} trigger={['click']}>
                                <div className="flex items-center justify-center gap-2 mr-5 cursor-pointer">
                                    <div className="border rounded-full p-2 flex items-center justify-center">
                                        <UserOutlined style={{ fontSize: '16px' }} />
                                    </div>
                                    <p>{dataSession ? dataSession.username : ''}</p>
                                </div>
                            </Dropdown>
                        )}
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
            </Layout>
        </Layout>
    );
};

export default MySidebar;
