
import './App.css';
import Button from './components/Button/Button';
import ReactBenefits from './components/ReactBenifits/ReactBenifits';
import ReactLogo from './components/ReactLogo/ReactLogo';
function App() {
  return (
    <div className="App">
     <ReactLogo/>
     <ReactBenefits></ReactBenefits>
     <Button></Button>
    </div>
  );
}

export default App;
