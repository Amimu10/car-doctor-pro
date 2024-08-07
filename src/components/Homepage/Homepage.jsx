import Banner from "./Banner/Banner";
import About from "./About/About";
import Team from "./Team/Team";
// import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import ChooseUs from "./ChooseUs/ChooseUs";
import Testimonial from "./Testimonial/Testimonial";

const Homepage = () => {
  return (
    <div className=" container mx-auto">
      <Banner></Banner>
      <About></About>
      <Team></Team>
      <ChooseUs></ChooseUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Homepage;
