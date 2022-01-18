import MLayoutLanding  from '../layout/layout-landing';
import MLandingContent from "../landing/content";

export default function Home() {
  return (
        <MLandingContent/>
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <MLayoutLanding>{page}</MLayoutLanding>
  )
}