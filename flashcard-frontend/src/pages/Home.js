import { Link } from "react-router-dom";
import Game from "./Game";

const goToGame = () => <Link to="/play" />;

const Home = () => {
  return (
    <>
      <h2>This is a flash card application</h2>
      <Link to="/play">

      <button onClick={goToGame}>Go</button>
      </Link>
    </>
  );
};

export default Home;
