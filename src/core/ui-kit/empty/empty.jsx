import { Empty, Button  } from 'antd';
import MPrimaryBtn from "../buttons/primaryBtn";

export default function MEmpty({ buttonlabel }) {
    return(
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
                height: 60,
            }}
        >
            <Button type="primary">Create Now</Button>
            <MPrimaryBtn type="default" label={buttonlabel}/>
        </Empty>
    )
}