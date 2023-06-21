import "../css/App.css";
import Routers from "./Routers";
import NavBar from "./NavBar";

const home = () => {
    return (
      <div className='home'>
        <NavBar/>
        <Routers />
      </div>
    );
  };
  export default home;
  
