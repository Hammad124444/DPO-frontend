import { Layout, Menu } from 'antd';
import { menus }  from '../core/data/menu';
const { Header } = Layout;

export default function MNavbar () {
    return (
        <Header className='header'>
            <div className="logo" />
            <Menu mode="horizontal" theme="dark">
                {
                    menus.map((el) => (
                        <Menu.Item key={ el.key }>{ el.name }</Menu.Item>
                    ))
                }
            </Menu>
        </Header>        
    );
}