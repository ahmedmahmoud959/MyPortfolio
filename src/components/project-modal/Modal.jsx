import { Fragment } from "react";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Chip } from "primereact/chip";
import { PiPlanetFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { useEffect } from "react";

function Modal({ status, data, onHide }) {
  const projectData = data;
  const [visible, setVisible] = useState(false);

  const modalContent = ({ hide }) => (
    <div className="p-5 h-[90dvh] bg-secondy w-full flex flex-col justify-start border rounded-md border-primary-op  ">
      <div className="flex justify-between items-start w-full pb-6">
        <h5 className="text-white text-3xl font-bold">{projectData.title}</h5>

        <button
          className=" w-10 h-10 text-base font-bold rounded-full text-white outline-none border-2 border-primary-op/10 hover:border-primary bg-primary-op hover:text-primary"
          onClick={(e) => hide(e)}
        >
          X
        </button>
      </div>
      <div className="w-full overflow-hidden overflow-y-scroll custom-scrollbar px-5  py-3 grid grid-cols-1 md:grid-cols-[36%,64%] gap-x-6">
        <div className=" relative">
          <div className=" md:sticky md:top-0 md:left-0 pb-10">
            {projectData.link && (
              <span className="block mb-3 text-base group hover:cursor-pointer">
                <PiPlanetFill className="mr-2 text-primary text-3xl inline-block align-middle" />
                <a
                  href={projectData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base align-middl font-bold group-hover:text-primary group-hover:underline group-hover:decoration-primary group-hover:decoration-2 transition-all duration-500 ease-in-out	"
                >
                  {projectData.link}
                </a>
              </span>
            )}
            {projectData.githubLink && (
              <span className="block mb-3 text-base group hover:cursor-pointer">
                <FaGithub className="mr-2 text-primary text-3xl inline-block align-middle" />
                <a
                  href={projectData.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base align-middl font-bold group-hover:text-primary group-hover:underline group-hover:decoration-primary group-hover:decoration-2 transition-all duration-500 ease-in-out	"
                >
                  {projectData.githubLink}
                </a>
              </span>
            )}
            <h6 className="block text-primary text-xl font-bold ">
              Description
            </h6>
            <p
              className="block text-white text-sm font-semibold mt-6 leading-7 text-justify"
              dangerouslySetInnerHTML={{ __html: projectData.description }}
            ></p>
            <h6 className="block text-primary text-xl mt-9 font-bold">
              Skills and deliverables
            </h6>

            <div className="flex flex-row flex-wrap gap-3 mt-6">
              {projectData.skills.map((skill, index) => (
                <Chip
                  key={`${skill}-${index}`}
                  label={skill}
                  className="py-1 !text-white !bg-primary/15 border-none"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="h-full pr-4">
          <div>
            {projectData.video && (
              <ReactPlayer
                url={projectData.video}
                width="100%"
                controls
                className="rounded-md"
              />
            )}
          </div>
          <div className="flex flex-col gap-y-7 mt-7">
            {projectData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${projectData.techStack}-${index}`}
                className="block rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <Dialog
        header="Header"
        visible={status}
        onHide={onHide}
        style={{ width: "90vw" }}
        content={modalContent}
      ></Dialog>
    </Fragment>
  );
}

export default Modal;
