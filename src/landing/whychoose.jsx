import Image from 'next/image';
import {useContext} from "react";
import NotificationContext from "../store/notification-context";
import { Button } from 'antd';
import {statusIcons} from "../core/data/config/statusIcons";

export default function MLandingWhyChoose({detail}) {
    const notificationCtx = useContext(NotificationContext);
    return(
        <div className="ant-row container pt-30">
            <h1 className="d-block font-32 m-auto">{detail.title}</h1>
            <h3 className="d-block font-28 m-auto">{detail.subTitle}</h3>
            <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-xl-12 pt-20">
                {
                    detail.paragraphs.map((el) => (
                        <div key={el.key}>
                            <p className="font-20 c-green font-bold">{el.title}</p>
                            <p className="font-16">{el.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className="pl-20 ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-xl-12 pt-20">
                <Image  alt="Why Choose Us"
                    src={detail.img} layout="responsive"
                        width={30}
                        height={30}
                />
            </div>

            <Button onClick={() => notificationCtx.showNotification({
                title: 'test',
                description: 'test',
                icon: statusIcons.nSuccess
            })}>Test</Button>
        </div>

    )
}