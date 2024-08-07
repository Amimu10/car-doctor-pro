
import Banner from './Banner/Banner';
import About from './About/About';
import Team from './Team/Team';

const Homepage = () => {
    return (
        <div className=" container mx-auto">
          <Banner></Banner>
          <About></About> 
          <Team></Team>
        </div>
    );
};

export default Homepage;