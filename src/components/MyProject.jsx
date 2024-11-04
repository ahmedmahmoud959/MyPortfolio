import { portfolio } from "../data/data";
import Card from "./project-card/Card";
function MyProject() {
  const projectData = portfolio;


  const cardData = projectData.map((data) => (
    <Card key={data.id} data={data} />
  ));

  return (
    <section id="my-projects" className="relative bg-transparent">
      <div className="w-full h-full pt-32 pb-28 bg-secondy">
        <div className="container flex justify-start">
          <div className="w-full">
            <div>
              <h3 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                My Project
              </h3>
              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
                {cardData}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default MyProject;
