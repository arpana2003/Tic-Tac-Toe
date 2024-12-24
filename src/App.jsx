import Grid from './components/Grid/Grid'
import './App.css'
import Card from './components/Card/Card';

function App() {

  return (
    <>
      {/* <Card />
      <Card player="X"/>
      <Card player="O"/> */}

      <Grid numberOfCards={9} />

    </>
  )
}

export default App;
