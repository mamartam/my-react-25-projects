import Accordion from "./projects/01-accordion/Accordion";
import SidebarFilter from "./projects/02-SidebarFilter/SidebarFilter";
import RandomColor from "./projects/03-random-color/RandomColor";
import StarRating from "./projects/04-star-rating/StarRating";
import StepProgress from "./projects/05-step-progress/StepProgress";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <SidebarFilter /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numberOfStars={10} /> */}
      <StepProgress numberOfSteps={8} />
    </>
  );
}

export default App;
