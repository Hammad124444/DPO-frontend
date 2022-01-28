import { Card, Button } from 'antd';
import Image from 'next/image';
import { EyeOutlined, EditOutlined } from "@ant-design/icons";

export default function MNormalCard({ background, alt }) {
    return(
        <Card
            // style={{width: 300, margin: 0}}
            bodyStyle={{padding: 0}}
            cover={
                <Image src={background} alt={alt} width={500} height={400}/>
            }
            actions={[
                <Button
                    type="primary"
                    size="large"
                    icon={<EyeOutlined />}
                >Investors</Button>,
                <Button
                    type="danger"
                    size="large"
                    icon={<EditOutlined />}
                >Edit</Button>
            ]}
        />
        // </Card>
    )
}