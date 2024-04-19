import BlankLayout from "src/@core/layouts/BlankLayout"
import BannerDescription from "../home/components/BannerDescription"
import PublicLayout from "../layout"
import ContactInfo from "./components/ContactInfo"
import SocialIcons from "./components/SocialIcons"
import ContactForm from "./components/ContactForm"

function Contacts() {
  return (
    <PublicLayout>
    <div>
      <BannerDescription
        name={"Connect with us"}
        heading={"Contact Us"}
        description={
          "Any question or remarks? Just write us a message!"
        }
      />
      <div
          style={{ backgroundColor: "#FAFBFC" }}
          className='pb-5 pt-5'
        >
           <section className="flex justify-center">
      <div className="bg-white rounded-xl xl:w-[80%] lg:w-[90%] md:w-[80%] w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="bg-themeDarkGreen">
            <div className="bg-contactpattern bg-no-repeat bg-right-bottom  rounded-md pb-8 text-start basis-[42%]">
              <ContactInfo />
              <SocialIcons />
            </div>
          </div>
          <div className="lg:pl-9 p-4 basis-[58%]">
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
        </div>
    </div>

    </PublicLayout>
  )
}
Contacts.getLayout = page => <BlankLayout>{page}</BlankLayout>
Contacts.guestGuard = true;

export default Contacts