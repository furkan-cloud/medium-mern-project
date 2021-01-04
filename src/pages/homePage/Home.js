import SectionOne from "../../components/sectionOne/SectionOne";
import SectionTwo from "../../components/sectionTwo/SectionTwo";
import SectionThree from "../../components/sectionThree/SectionThree";
import ArticleDetails from "../articleDetail/ArticleDetails";
import Navbar from "../../components/navbar/Navbar";
//import PostEditor from "../../components/addpost/PostEditor";

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Home;
