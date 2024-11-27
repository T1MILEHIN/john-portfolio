import img from "../assets/images/services.png"
import Footer from "../components/footer"

const About = () => {
  return (
    <div>
      <div className="md:px-20">
        <div className="md:py-20 md:p-0 p-10">
          <h1 className="lg:w-[842px] w-full text-5xl leading-[80px]">Helping Brands Stand Out with Unique Design</h1>
        </div>
        <hr className="border-[#636363]" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:p-20 p-10">
        <div className="flex flex-col gap-10 text-[#2E2A2A]">
          <p>As a passionate designer, I believe that effective design has the power to transform brands and businesses. My goal is to help you stand out in a crowded market with unique, tailored designs that capture your brand&apos;s essence and values.</p>
          <p>With expertise in graphics and product design, I&apos;ll work closely with you to create stunning visuals and innovative solutions that drive results. From logos to branding, print to digital, I&apos;ll help you make a lasting impression on your audience.</p>
          <p className="font-bold">Let&apos;s collaborate to bring your brand to life and make it shine</p>
          <button className="ml-auto md:mx-auto z-10 py-12 px-5 rounded-[40px] bg-[#407BFF] text-white w-fit">Get In Touch</button>
        </div>
        <img src={img} alt="" />
      </div>

      <div className="md:p-20 p-4">
        <h1 className="text-[55px]">My Services</h1>

        <div className="py-16 flex flex-wrap md:flex-nowrap gap-24 md:gap-10">
          <div className="relative flex flex-col gap-5">
            <h2 className="font-medium text-2xl">Graphic Design</h2>
            <p className="text-[#2E2A2A] text-[15px] leading-[40px]">With a strong portfolio, I possess 5 years of extensive experience in graphics design, delivering high-quality visuals with precision expertise.</p>
            <p className="font-bold absolute -bottom-40 text-[212px] text-[#63636386]">01</p>
          </div>
          <div className="relative flex flex-col gap-5">
            <h2 className="font-medium text-2xl">UI/UX Design</h2>
            <p className="text-[#2E2A2A] text-[15px] leading-[40px]">Utilizing 5 years of expertise, I craft intuitive UI/UX designs that elevate user experiences, drive engagement, and fuel business growth.</p>
            <p className="font-bold absolute -bottom-40 text-[212px] text-[#63636386]">02</p>
          </div>
          <div className="relative flex flex-col gap-5">
            <h2 className="font-medium text-2xl">Design Tutoring</h2>
            <p className="text-[#2E2A2A] text-[15px] leading-[40px]">With 2years of experience, I empower students as a design instructor, teaching UI/UX, graphics design, and product design with passion.</p>
            <p className="font-bold absolute -bottom-40 text-[212px] text-[#63636386]">03</p>
          </div>
        </div>
      </div>


      <div className="md:p-20 p-4">

        <h1 className="text-[55px]">Additional Skills</h1>
        <p className="text-[#2E2A2A] text-[15px] leading-[40px] md:leading-[20px]">In my 5years experience as a designer, I’ve been employed by different companies and worked together with various clients. Therefore, I’ve had the opportunity to explore more than one branch of design and built up a series of additional skills that I am now able to bring with me in a UX/UI role:</p>
        <ul className="py-5 list-disc list-inside text-[15px] leading-7">
          <li>Research Writing</li>
          <li>3d Design</li>
          <li>Designing on development tool (Framer and Webflow).</li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default About