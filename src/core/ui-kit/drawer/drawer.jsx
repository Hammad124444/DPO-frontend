import { Drawer, Button, Divider, Image } from 'antd';

export default function MKDrawer(props) {
    return(
        <Drawer
            placement={'bottom'}
            maskClosable={false}
            visible={props.visible}
            closable={false}
            height={'auto'}
        >
            <div className="container text-center">
                <Image src={props.logoUrl} layout="responsive"/>
                <p className='font-16'>{ props.description }</p>
                <Divider />
                <Button type='danger' size='large' className='font-bold' onClick={props.action}>{props.buttonLabel}</Button>
            </div>            
        </Drawer>
    )
}