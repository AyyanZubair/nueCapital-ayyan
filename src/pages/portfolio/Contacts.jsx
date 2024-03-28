import Contact from '../components/forms/Contact'
import { Container } from 'react-bootstrap'
import BannerDescription from './home/components/BannerDescription'

function Contacts() {
  return (
    <div>
      <BannerDescription
        name={"Connect with us"}
        heading={"Contact Us"}
        description={
          "Any question or remarks? Just write us a message!"
        }
      />
      <Container
          fluid
          style={{ backgroundColor: "#FAFBFC" }}
          className='pb-5 pt-5'
        >
          <Contact/>
        </Container>
    </div>
  )
}

export default Contacts