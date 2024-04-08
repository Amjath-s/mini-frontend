
import { useEffect, useState } from "react";
import { PrevDoc } from "./PrevDoc";
import { Popup } from "./Popup";
import { Result } from "./Result";

export function FileBox() 
{
  const [selectedFile, setSelectedFile] = useState(false);         //for file selection
  const [uploadedFiles, setUploadedFiles] = useState([ ]);         //uploading file to transmit to prevdoc for viewong recent files
  const [responsefetched, Setresponsefetched] = useState(false)     //to check response is get
  const[popup,Setpopup]=useState(false)                           //how recive pop up if no file is seclected
  const[data,Setdata]=useState([])                                //for response fetched on ocr


  const handlefilechange = (file) => {                           
    setSelectedFile(file);
 
  };
 
  const handlefileupload = async  (file) => {                               //uploading file to api and fetching rsult of ocr
    if (file) {
      const formdata = new FormData;
      formdata.append('file', file);
      try {
        const response = await fetch('https://f9010836-1670-49b0-bc06-f1aa54c12857-00-2e64mw8ouzabz.pike.replit.dev/', {
          method: 'POST',
          body: formdata,
          // headers: {
          //   'apikey': 'K85586486088957'
          // },


        });
        if (response.ok) {
          // Setresponsefetched(false)
          const data = await response.json();
          console.log("ocr resulr", data);
          Setresponsefetched(true)
          setUploadedFiles([selectedFile].concat(uploadedFiles))
          Setdata(data)
          setSelectedFile(false)
          
       
     
        }
        else {
          console.error('error', response.statusText);
        }
      }
      catch (error) {
        console.error('error', error)
      }
    }
    else {
      console.log('no file seleced');
      Setpopup(true);
    }
    console.log("gjhgh", selectedFile)



  };

  const handleclick = (event) => {
    const file = event.target.files[0];              //for selecting file form input 
    handlefilechange(file);
  };
  const handleDrop = (events) => {
    events.preventDefault();

    const files = events.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      handlefilechange(file);
    }


  };
  const handledragover=(event)=>{
    event.preventDefault();

  }
  const handleupload = () => {
    handlefileupload(selectedFile);                   
   
  };
  const handleClosePopup=()=>
  {
    Setpopup(false);
  };

  
  return (
    <> 

    <div className="maindiv">    
    <div className="prevfile">  
    {responsefetched&&<PrevDoc uploadedFiles={uploadedFiles}></PrevDoc>}       {/*for recent uploaded files    */}
    </div>
     <div className="outerdrag">             
     <div className="drag-drop"
        onDrop={handleDrop}
        onDragOver={handledragover}>
        <p className="paragraph"> Drag and Drop File here  </p>
        <p> -OR-</p>
        <label htmlFor="file-upload" > Click To Select the File   </label>
        <input type="file" onChange={handleclick} className="upload" id="file-upload"></input>
      </div> 
      <button onClick={handleupload}  className="submit"> submit</button>
    
      </div>
      { popup&&(<Popup onClose={handleClosePopup}></Popup>)}


      </div>
      <Result data={data}></Result>
    </>
    

  );

}