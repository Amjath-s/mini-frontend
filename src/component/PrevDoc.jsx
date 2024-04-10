
export function PrevDoc({uploadedFiles})
{
 
  return(
      <>
      <div className="previousfile" > 
      <table class="table">
<thead>
  <tr>
    <th scope="col">filename</th>
    <th scope="col">type</th>
    <th scope="col">Last modified date</th>
    <th scope="col">Handle</th>
  </tr>
</thead>
<tbody>                                                                                       {/*for display files mapping through array   */}
  {Array.isArray(uploadedFiles)&&uploadedFiles.map((file,index)=>( <tr key={index}>             
    <td>{file.name}</td>
    <td> {file.type}</td>
    {/* <td>{file.lastModified}</td> */}
  </tr>))}
  {/* <tr>

    <th scope="row">{selectedFile.name}</th>
    <td>{selectedFile.type}</td>
   
  </tr> */}

</tbody>
</table>      
      </div>
      
      </>
  );

}