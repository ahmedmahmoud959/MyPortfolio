import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function ContactMe() {
  return (
    <section
      id="contact"
      className=" bg-[url('https://res.cloudinary.com/dbtk2voyv/image/upload/v1729593755/pexels-kevin-ku-92347-577585_ynzgbq.jpg')] bg-cover bg-top bg-no-repeat	"
    >
      <div className="w-full h-full py-20 bg-secondy/60 backdrop-blur-sm">
        <div className="container h-full grid grid-cols-1 justify-items-center ">
          <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Contact ME
          </h2>
          <h3 className="mt-14 text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">{`Let's Work Together !`}</h3>
          <div className="flex justify-between mt-10 gap-x-5 text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl  text-white w-fit my-6">
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
          <div className="flex justify-between mt-10 gap-x-5 text-center text-base  text-white w-fit my-6">
            <a className="hover:text-primary" href="#home">
              Home
            </a>
            <a className="hover:text-primary" href="#about-me">
              About Me
            </a>
            <a className="hover:text-primary" href="#skills">
              Skills
            </a>
            <a className="hover:text-primary" href="#my-projects">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
