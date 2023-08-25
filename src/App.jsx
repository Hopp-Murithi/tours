import { useEffect, useState } from "react";
import "./App.css";
import Spinner from "./components/Spinner";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);



  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeTour=(id)=>{
setTours(tours.filter((tour)=> tour.id !== id))
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if(tours.length === 0){
return <div>
  <div className='title'>
    <h2>No more tours left...</h2>
    <button className="btn-delete" style={{marginTop:"1rem"}} onClick={fetchTours}>Fetch all tours</button>
  </div>
</div>
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour}/>
    </>
  );
}

export default App;
