import MPrimaryBtn from "../core/ui-kit/buttons/primaryBtn";

export default function MLandingCallUs() {
    return(
        <div className="container mt-30 pv-30 m-auto bg-green text-center">
            <h1 className="font-32 c-white">Call Us Today</h1>
            <h3 className="font-24 c-white">We help business raise capital! What re you </h3>
            <MPrimaryBtn label="Call Now 647-393-8417" size="large" type="default"/>
        </div>
    )
}