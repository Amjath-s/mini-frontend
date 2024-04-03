import { useEffect, useState } from "react";
import { PrevDoc } from "./PrevDoc";



export function FileBox()

{
    const [selectedFile,setSelectedFile]=useState(null);
    const [uploadedFile,setUploadedFile]=useState(false);


    const handlefilechange=(file)=>{
      setSelectedFile(file);
      // console.log('file is ',selectedFile)
    
    };
    // useEffect(()=>{
    //   console.log("selected file",selectedFile)

    // },[selectedFile])

    const handlefileupload = async(file)=>{
      if(file){
        const formdata =new FormData;
        formdata.append('file',file);
        try{
          const response=await fetch('https://api.ocr.space/parse/image',{
            method:'POST',
            body:formdata,
            headers:{
              'apikey':'K85586486088957'
            },
            
            
          });
          if(response.ok){
            const data=await response.json();
            console.log("ocr resulr",data);
            setUploadedFile(true)
          }
          else{
            console.error('error',response.statusText);
          }
        }
        catch(error){
          console.error('error',error)
        }
      }
       else{
        console.log('no file seleced');
       }
       console.log("gjhgh",selectedFile) 
       
        
      };
      const handleclick=(event)=>
      {
        const file=event.target.files[0];
        handlefilechange(file);
      };
      const handleDrop=(event)=>
      {
        event.preventDefault();
        // const files = event.dataTransfer.files;
        // if (files.length > 0) {
        //   const file = files[0];
        //   handlefilechange(file);
        //}
     
      };
      const handleDrag=(event)=>{
        event.preventDefault();
        const file=event.traget.files[0]
        handlefilechange(file);

      };
      const handleupload=()=>{
        handlefileupload(selectedFile);
        

      };
  
     
    
    
    return(
        <>
        <div className="drag-drop" 
        onDrop={handleDrop}
        onDragOver={handleDrag}>
          <p className="paragraph"> Drag and Drop File here  </p>
          <label htmlFor="file-upload" > Click To Select the File   </label>
         
          <input type="file"  onChange={handleclick} className="upload"  id="file-upload"></input>
          
        </div>
       { selectedFile &&   (<button onClick={handleupload} className="submit"> submit</button>  
        )}  
        
          {uploadedFile  && <PrevDoc selectedFile={selectedFile}></PrevDoc>} 
         
      
      
     
        
        
        
        </>
        
    );
}

