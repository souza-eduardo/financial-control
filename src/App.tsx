import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';
import ItemsList from './components/ItemsList';

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Resume />
        <Form />
        <ItemsList />
      </main>
    </>
  );
}

export default App;
