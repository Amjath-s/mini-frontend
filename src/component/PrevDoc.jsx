

export function PrevDoc({selectedFile}){
    const prevstyle = {
        border:'1px solid black',
        margin:'10px',
        background: 'lightseagreen',
        width: '150px',
        

       };
    return(
        <>
        <div className="previousfile" style={prevstyle}> 
            <p>
                {selectedFile.name}
                {selectedFile.type}</p>
        </div>
        
        
        
        </>
    );

}