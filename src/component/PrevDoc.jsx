
export function PrevDoc({selectedFile}){
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
  <tbody>
    <tr>
      <th scope="row">{selectedFile.name}</th>
      <td>{selectedFile.type}</td>
     
    </tr>

  </tbody>
</table>  
           
        </div>
        
        </>
    );

}