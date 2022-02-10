import {useState} from "react";
import { Layout, Menu } from 'antd';
import { UserOutlined, LoginOutlined, UsergroupAddOutlined } from '@ant-design/icons/lib/icons';
import Link from 'next/link';
import Image from 'next/image';
import { menus }  from '../core/data/layoutItems/menu';
const { Header } = Layout;
const { SubMenu } = Menu;
import styles from '../../styles/local/navbar.module.scss';

export default function MNavbar () {
    // const [currentMenu, setCurrentMenu] = useState('home');
    const handleMenuClick = (e) => {
        console.log(e);
        // setCurrentMenu(e.key);
    }

    return (
        <Header className='p-sticky top-0 no-padding z-10 bg-white'>
            <div className="ant-row d-flex ph-30">
                <Link href={"/"}>
                    <a className={'d-flex align-items-center ' + styles.logoarea} >
                        <Image alt="logo" src="/assets/icons/directprivateoffers-logo-bd.png" width={300} height={54}/>
                    </a>
                </Link>
                <Menu mode="horizontal" className={'d-block text-right ' + styles.menubar}>
                    {
                        menus.mainMenus.map((element) => (
                                <Menu.Item key={element.key}>
                                    <Link href={element.url}>
                                        {element.name}
                                    </Link>
                                </Menu.Item>
                            )
                        )
                    }
                    <SubMenu key='subMenu' icon={<UserOutlined />}>
                        {
                            menus.subMenus.map((el) => (
                                    <Menu.Item key={el.key} icon={el.icon}>
                                        <Link href={el.url}>
                                            {el.name}
                                        </Link>
                                    </Menu.Item>
                                )
                            )
                        }
                    </SubMenu>
                </Menu>
            </div>
        </Header>        
    );
}