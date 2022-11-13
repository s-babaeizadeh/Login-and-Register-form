import img from '../assets/images/welcome.svg';
import Wrapper from '../assets/wrappers/HomePage';

const Home = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h1>Welcome to home page!</h1>
      </div>
    </Wrapper>
  );
};

export default Home;
