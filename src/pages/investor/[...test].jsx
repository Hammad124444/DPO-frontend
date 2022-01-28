import {useRouter} from "next/router";

export default function Mtest() {
    const router = useRouter();
    console.log(router.query);
    return(
        <h1>Test page</h1>
    )
}