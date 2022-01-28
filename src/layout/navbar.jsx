import { Layout, Menu } from 'antd';
import { menus }  from '../core/data/menu';
import Link from 'next/link';
import { UserOutlined, LoginOutlined, UsergroupAddOutlined } from '@ant-design/icons/lib/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

export default function MNavbar () {
    return (
        <Header className='header no-padding bg-white'>
            <div className="ant-row">
                <div className="text-center ant-col-6 ant-col-sm-24 ant-col-md-6 ant-col-xl-5 ant-col-xxl-4">
                    <Link href={"/"}>
                        <a id="logo">
                            <img alt="logo" src="/assets/icons/dpo-logo-header.png" />
                        </a>
                    </Link>
                </div>
                <div className="ant-col-18 menu-row ant-col-sm-0 ant-col-md-18 ant-col-xl-19 ant-col-xxl-20">
                    <Menu mode="horizontal" theme="light" className="justify-content-end">
                        {
                            menus.map((el) => (
                                <Menu.Item key={ el.key }>
                                    <Link href={ el.url }>
                                        { el.name }
                                    </Link>
                                </Menu.Item>
                            ))
                        }
                        <SubMenu key="SubMenu" icon={<UserOutlined />}>
                            <Menu.Item key="setting:1" icon={<LoginOutlined />}>
                                <Link href={"/auth/signin"}>
                                    <a>
                                        Sign In
                                    </a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting:2" icon={<UsergroupAddOutlined />}>
                                <Link href={"/auth/register"}>
                                    <a>
                                        Sign In
                                    </a>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        </Header>        
    );
}