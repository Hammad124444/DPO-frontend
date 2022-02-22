import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

export default function MKRecaptcha({action}) {
    return(
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.reCaptchaKey}
        >
            <GoogleReCaptcha onVerify={action} />
        </GoogleReCaptchaProvider>
    )
}