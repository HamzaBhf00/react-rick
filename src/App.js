import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";



function App() {
  return <div className="App">

    <h1 className="text-center ubuntu my-5">Rick & Morty <span className="text-primary">React</span></h1>
    <div className="container">
      <div className="row justify-content-center text-center">
  <Cards/>
        

      </div>
    </div>


  </div>
}

export default App;
