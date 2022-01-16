import { Layout, Menu } from 'antd';
import { menus }  from '../core/data/menu';
import Link from 'next/link';

const { Header } = Layout;

export default function MNavbar () {
    return (
        <Header className='header no-padding bg-white'>
            <div className="ant-row">
                <div className="text-center ant-col ant-col-sm-24 ant-col-md-6 ant-col-xl-5 ant-col-xxl-4">
                    <Link href={"/"}>
                        <a id="logo">
                            <img alt="logo" src="/assets/icons/dpo-logo-header.png" />
                        </a>
                    </Link>
                </div>
                <div className="ant-col menu-row ant-col-sm-0 ant-col-md-18 ant-col-xl-19 ant-col-xxl-20">
                    <Menu mode="horizontal" theme="light">
                        {
                            menus.map((el) => (
                                <Menu.Item key={ el.key }>{ el.name }</Menu.Item>
                            ))
                        }
                    </Menu>
                </div>
            </div>
        </Header>        
    );
}