import './App.css';

const Person = () =>{
  return(
    <>
      <h1>Name: Jay</h1>
      <h1>Last: Chavan</h1>
      <h1>Age: 21</h1>

    </>
  )
}

const App = () => {
  return (
    <div className="App">
    <h1>Hello World</h1>
    <Person />
      
    </div>
  );
}

export default App;
