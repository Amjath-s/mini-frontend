
import { useEffect, useState } from "react";
import { PrevDoc } from "./PrevDoc";
import { Popup } from "./Popup";

export function FileBox({Onsave}) 
{
  const [selectedFile, setSelectedFile] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(false);
  const [responsefetched, Setresponsefetched] = useState(false)
  const[popup,Setpopup]=useState(false)

  const handlefilechange = (file) => {
    setSelectedFile(file);
 
  };
 
  const handlefileupload = async  (file) => {
    if (file) {
      const formdata = new FormData;
      formdata.append('file', file);
      try {
        const response = await fetch('https://api.ocr.space/parse/image', {
          method: 'POST',
          body: formdata,
          headers: {
            'apikey': 'K85586486088957'
          },


        });
        if (response.ok) {
          // Setresponsefetched(false)
          const data = await response.json();
          console.log("ocr resulr", data);
          Setresponsefetched(true)
          setUploadedFile(true)
       
     
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
    const file = event.target.files[0];
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
   
    {responsefetched&&uploadedFile&& <PrevDoc selectedFile={selectedFile}></PrevDoc>} 
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
      <button onClick={handleupload} className="submit"> submit</button>
    
      </div>
      { popup&&(<Popup onClose={handleClosePopup}></Popup>)}

      </div>
    </>
    

  );

}
