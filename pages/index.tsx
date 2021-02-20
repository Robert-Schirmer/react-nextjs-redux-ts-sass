import Layout from '../src/components/Layout'
import CountTracker from '../src/components/Counter'
import Logos from '../src/components/Logos'
import FetchData from '../src/components/FetchData'
import LoadingIcon from '../src/components/LoadingIcon'

const Index = () => {

  return (
    <Layout>
      <div className="container-column spacing-2">
        <div className="item container justify-center align-center">
          <Logos />
        </div>
        <div className="item container-column justify-center align-center">
          <div className="item">
            <h2>Hello ReactJS, Redux, Next.js, and Typescript 👋</h2>
          </div>
          <div className="item">
            <LoadingIcon />
          </div>
          <div className="item">
            <h3><i>A template app</i></h3>
          </div>
        </div>
        <div className="item container-row justify-center align-center">
          <CountTracker />
        </div>
        <div className="item container-row justify-center align-center">
          <FetchData />
        </div>
      </div>
    </Layout>
  )
}

export default Index
