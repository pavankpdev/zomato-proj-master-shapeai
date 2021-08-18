// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;

// :type

// delivery
// dining
// nightlife
// nutrition

// master -> type
