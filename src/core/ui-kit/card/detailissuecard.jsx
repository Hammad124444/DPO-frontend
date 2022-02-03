import { Card } from 'antd';
import Image from 'next/image';
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import MButtonWithIcon from "../buttons/iconButton";

export default function MIssueDetailCard({ background, alt }) {
    return(
        <Card
            bodyStyle={{padding: 0}}
            cover={
                <Image src={background} alt={alt} width={500} height={400}/>
            }
            actions={[
                <MButtonWithIcon type={'primary'} size={'large'} label={'Investors'} children={<EyeOutlined />} />,
                <MButtonWithIcon type={'danger'} size={'large'} label={'Edit'} children={<EditOutlined />} />
            ]}
        />
    )
}