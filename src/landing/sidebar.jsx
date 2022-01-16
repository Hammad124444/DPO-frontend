import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { siderItems }  from '../core/data/siderItems';
import { UserSwitchOutlined, UsergroupAddOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
const { Sider } = Layout;

export default function MSider() {
    const [state, setState] = useState(true);
    const onCollapse = (collapsed) => {
        setState(collapsed);
      };
    return(

        <Sider width={200} collapsible collapsed={state} onCollapse={ onCollapse }>
            <Menu mode='inline'
                style={{ height: '100%', borderRight: 0 }}>
                {
                    siderItems.map((el) => (
                        <Menu.Item key={el.key}>{el.count}     {el.name}</Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
}