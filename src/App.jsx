import Accordion from "./projects/01-accordion/Accordion";
import SidebarFilter from "./projects/02-SidebarFilter/SidebarFilter";
import RandomColor from "./projects/03-random-color/RandomColor";
import StarRating from "./projects/04-star-rating/StarRating";
import StepProgress from "./projects/05-step-progress/StepProgress";
import ImagesSlider from "./projects/06-image-slider/ImagesSlider";
import ProductReviewsTab from "./projects/07-product-reviews-tab/ProductReviewsTab";
import LoadMoreButton from "./projects/08-load-more-button/LoadMoreButton";
import DynamicBlogFeed from "./projects/09-dynamic-blog-feed/DynamicBlogFeed";
import RecursiveNavigationMenu from "./projects/10-recursive-navigation-menu/RecursiveNavigationMenu";
import menus from "./projects/10-recursive-navigation-menu/data";
import ThreadedComments from "./projects/11-threaded-comments/ThreadedComments";

import arrayOfData from "./projects/11-threaded-comments/data";
import FileExplorer from "./projects/12-file-explorer/FileExplorer";

import fileData from "./projects/12-file-explorer/data";
import QRCodeGenerator from "./projects/13-qr-code-generator/QRCodeGenerator";
import ThemeSwitch from "./projects/14-theme-switch/ThemeSwitch";
function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <SidebarFilter /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numberOfStars={10} /> */}
      {/* <StepProgress numberOfSteps={8} /> */}

      {/* <ImagesSlider
        url={"https://api.thecatapi.com/v1/images/search"}
        limit={"10"}
      /> */}

      {/* <ProductReviewsTab
        url={"https://jsonplaceholder.typicode.com/comments?"}
        limit={"10"}
        numberOfStars={5}
      /> */}

      {/* <LoadMoreButton /> */}
      {/* <DynamicBlogFeed url={"https://dummyjson.com/posts"} pageSize={"50"} /> */}

      {/* <RecursiveNavigationMenu menus={menus} /> */}
      {/* <ThreadedComments arrayOfData={arrayOfData} /> */}
      {/* <FileExplorer fileData={fileData} /> */}

      {/* <QRCodeGenerator /> */}
      {/* <ThemeSwitch /> */}
    </>
  );
}

export default App;
