import { Header } from "./component/Header"
import './App.css'
import { FileBox } from "./component/FileBox"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Result } from "./component/Result";
import { Routes,Route} from "react-router-dom";
function App() {


  return (
    <>
    <div className="app">
      <Header/>
  
      
      
    <Routes>
        <Route path="/" element={<FileBox />} />
        <Route path="/fetchdata" element={<Result/>} />
        
      </Routes>

      
   
     




      {/* <Header></Header>
       <FileBox></FileBox>
           */}
       {/* <Header> </Header>
      <FileBox></FileBox> */}
     
    </div>
    
  
    </>
  )
}

export default App
