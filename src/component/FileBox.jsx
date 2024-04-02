import { useEffect, useState } from "react";
import { PrevDoc } from "./PrevDoc";

export function FileBox()

{
    const [selectedFile,setSelectedFile]=useState(0);
    const [uploadedFile,setUploadedFile]=useState(false);


    const handleclick=(event)=>{
      setSelectedFile(event.target.files[0]);
      // console.log('file is ',selectedFile)
    
    };
    // useEffect(()=>{
    //   console.log("selected file",selectedFile)

    // },[selectedFile])

    const handleupload= async()=>{
      if(selectedFile){
        const formdata =new FormData;
        formdata.append('file',selectedFile);
        try{
          const response=await fetch('https://api.ocr.space/parse/image',{
            method:'POST',
            body:formdata,
            headers:{
              'apikey':'K86809603788957'
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
  
     
    
    
    return(
        <>
        <div className="button">
        <input type="file"  onChange={handleclick}></input>
        <button onClick={handleupload}> submit</button>
        
       {uploadedFile  && <PrevDoc selectedFile={selectedFile}></PrevDoc>}
        </div>
        
      
      
     
        
        
        
        </>
        
    );
}




