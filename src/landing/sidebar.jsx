import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { siderItems }  from '../core/data/siderItems';
const { Sider } = Layout;

export default function MSider() {
    const [state, setState] = useState(true);
    const onCollapse = (collapsed) => {
        setState(collapsed);
      };
    return(
        <Sider width={200} collapsible collapsed={state} onCollapse={ onCollapse }>
            <Menu mode='inline'>
                {
                    siderItems.forEach((el) => (
                        <Menu.Item key={el.key} >{el.name}  {el.count}</Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
}