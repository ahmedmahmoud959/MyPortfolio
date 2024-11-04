import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    // <section id="Hero" className="container pt-8">
    //   <div className="flex flex-row-reverse flex-wrap md:justify-between gap-y-3 sm:justify-center">
    //     <div className="">
    //       <img
    //         src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729593622/WhatsApp_Image_2024-01-07_at_5.59.53_PM-transparent_background_1_g2pj4y.png"
    //         alt="Hero Image"
    //       />
    //     </div>
    //     <div className="flex flex-col py-16 ">
    //       <h3 className="text-5xl font-bold ">Hi, I am</h3>
    //       <h1 className="text-7xl text-primary font-bold my-8">
    //         Ahmed Mahmoud
    //       </h1>
    //       <h2 className="text-5xl font-bold">Full Stack Developer</h2>
    //       <div className="flex justify-between gap-x-5 text-4xl font-bold w-fit my-5">
    //         <Link className="hover:text-primary">
    //           <FaGoogle />
    //         </Link>
    //         <Link className="hover:text-primary">
    //           <FaLinkedin />
    //         </Link>
    //         <Link className="hover:text-primary">
    //           <AiFillGithub />
    //         </Link>
    //         <Link className="hover:text-primary">
    //           <FaWhatsapp />
    //         </Link>
    //       </div>
    //       <div className="space-x-6 mt-4">
    //         <Button label="contact me" size="large" rounded />
    //         <Button
    //           label="My Projects"
    //           size="large"
    //           severity="secondary"
    //           rounded
    //           outlined
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="Hero" className="container min-w-0 lg:h-hero pt-14 pb-20">
      <div className="h-full flex flex-col-reverse justify-center items-center gap-x-2 lg:flex-row flex-wrap lg:justify-between gap-y-3 sm:justify-center text-center lg:text-left">
        <div className="w-2/3 flex flex-col pt-12 items-center lg:items-start">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I am
          </h3>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-primary font-bold my-7 ">
            Ahmed Mahmoud
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Web Developer
          </h2>
          <p className="block mt-9 text-white font-semibold text-base text-wrap text-justify tracking-widest leading-7">{`
          a passionate web developer with one year of experience in building
            and developing websites and web applications. Over the past year,
            I've worked on a variety of projects that include designing and
            developing interactive and user-friendly websites
          `}
            
          </p>
          <div className="flex justify-between gap-x-5 text-2xl sm:text-3xl md:text-3xl font-bold w-fit my-6">
            <Link className="hover:text-primary">
              <FaGoogle />
            </Link>
            <Link className="hover:text-primary">
              <FaLinkedin />
            </Link>
            <Link className="hover:text-primary">
              <AiFillGithub />
            </Link>
            <Link className="hover:text-primary">
              <FaWhatsapp />
            </Link>
          </div>
          <div className="space-x-4 sm:space-x-6 mt-5">
            <Button label="Contact Me" size="large" rounded />
            <Button
              label="My Projects"
              size="large"
              severity="secondary"
              rounded
              outlined
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            className="w-[317px] h-[443px]"
            src="https://res.cloudinary.com/dbtk2voyv/image/upload/v1729593622/WhatsApp_Image_2024-01-07_at_5.59.53_PM-transparent_background_1_g2pj4y.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
