import Banner from "./Banner/Banner";
import About from "./About/About";
import Team from "./Team/Team";
// import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import ChooseUs from "./ChooseUs/ChooseUs";
import Testimonial from "./Testimonial/Testimonial";
import Service from "./Service/Service";

const Homepage = () => {
  return (
    <div className=" container mx-auto">
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Team></Team>
      <ChooseUs></ChooseUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Homepage;
