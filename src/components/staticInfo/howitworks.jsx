import {Card, Divider } from "antd";
import MButtonWithIcon from "../../core/ui-kit/buttons/iconButton";
import { descriptions, actions } from "../../core/data/static/howitworks";
import {useRouter} from "next/router";
const { Meta } = Card;



export default function MSHowItWorks() {
    const router = useRouter();
    return(
        <div className={'container d-flex flex-column pt-40'}>
            <h1 className={'font-32 text-center font-bold c-green'}>How it works</h1>
            <Card
                className={'font-24'}
                style={{ width: '100%' }}
                actions={
                    actions.map((el) => (
                        <MButtonWithIcon action={() => router.push(el.url)} icon={el.icon} label={el.label}
                            type={'danger'} size={'large'}
                        />
                    ))
                }
            >
                {
                    descriptions.map((el, index, array) => {
                        if (index == array.length - 1) {
                            return(
                                <>
                                    <Meta
                                        avatar={el.avatar}
                                        description={el.description}
                                    />
                                </>
                            )
                        } else {

                            return(
                                <>
                                    <Meta
                                        avatar={el.avatar}
                                        description={el.description}
                                    />
                                    <Divider />
                                </>
                            )
                        }
                    })
                }
            </Card>
        </div>
    )
}

