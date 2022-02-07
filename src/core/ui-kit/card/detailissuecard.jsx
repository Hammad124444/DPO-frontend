import { Card } from 'antd';
import Image from 'next/image';
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import MButtonWithIcon from "../buttons/iconButton";
import {useRouter} from "next/router";

export default function MIssueDetailCard({ background, alt }) {
    const router = useRouter();
    const naviageTo = (url) => {
        router.push(router.asPath + url);
    }
    return(
        <Card
            bodyStyle={{padding: 0}}
            cover={
                <Image src={background} alt={alt} width={500} height={400}/>
            }
            actions={[
                <MButtonWithIcon type={'primary'} size={'large'} label={'Investors'} icon={<EyeOutlined />} action={() => naviageTo('/investors')}/>,
                <MButtonWithIcon type={'danger'} size={'large'} label={'Edit'} icon={<EditOutlined />} action={() => naviageTo('/edit')} />
            ]}
        />
    )
}