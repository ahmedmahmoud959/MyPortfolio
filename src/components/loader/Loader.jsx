import { ProgressSpinner } from "primereact/progressspinner";

const Loader = () => {
  return (
    <div className="loader fixed top-0 left-0 z-[9999] w-dvw h-dvh flex justify-center items-center ">
      <ProgressSpinner aria-label="Loading"  strokeWidth="8"  animationDuration=".7s" />
    </div>
  );
};

export default Loader;
