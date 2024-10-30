import { Chip } from "primereact/chip";
import { techIcon } from "../../assets/techIcon";

function Card({ data }) {
  const techChips = data.techStack.map((tech, index) => {
    return (
      <Chip
        key={`${data.id}${index}`}
        label={tech}
        icon={techIcon[tech]({ iconProps: {} }, `${data.id}${index}${tech}`)}
      />
    );
  });

  return (
    <div
      key={data.id}
      className="pro-card max-h-72 group w-full overflow-hidden relative hover:cursor-pointer border-[3px] rounded-xl hover:border-primary border-primary-op transition-all duration-700 ease-in-out"
    >
      {data.images[0] && (
        <img
          src={data.images[0]}
          alt="project"
          className="object-fill w-full h-full group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
      )}
      <div className="w-full h-full content-end py-4 px-5 group-hover:backdrop-blur-[1px] group-hover:bg-primary-op/5 absolute left-1/2 transform -translate-x-1/2 bottom-0 transition-all duration-700 ease-in-out">
        <h4 className="text-xl font-bold text-white py-1 px-2 bg-secondy/50 rounded-3xl">
          {data.title}
        </h4>
        <div className="flex flex-row flex-wrap gap-x-2 text-xs font-bold mt-3">
          {techChips}
        </div>
      </div>
    </div>
  );
}

export default Card;
