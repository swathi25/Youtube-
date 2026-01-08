import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" mt-32">
      <ButtonList />
      <div className="mt-6 flex flex-wrap gap-6">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
