import styles from './landscape.module.css';
import { Card, Button} from "antd";
import {landscapeInfo} from "../../core/data/landing/landscape";
import {useRouter} from "next/router";


export default function MLandscape() {
    const router = useRouter();


    return(
        <div className={styles.landscape + " vh-100 d-flex flex-column align-items-center justify-content-center pb-50"}>
            <Card className={styles.mcard + ""}
                actions={
                    landscapeInfo.btns.map((el) => (
                        <Button type={el.type} size="large" className="mr-30" ghost={true}
                            onClick={() => router.push(el.navigation)}
                        >{el.label}</Button>
                    ))
                }
            >
                <h1 className="font-48 c-white text-center">{ landscapeInfo.title }</h1>
                <h3 className="font-32 c-white">{ landscapeInfo.subtitle }</h3>
            </Card>
        </div>
    )
}