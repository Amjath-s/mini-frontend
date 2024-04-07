export { FileBox } from "./FileBox"
export function Popup({onClose})
{

    return(
        <>
        <div className="popup">
      <div className="popup-inner">
        <h6>No File is Selected</h6>
        <button  className="close" onClick={onClose}>Close</button> 
      </div>
    </div>
        </>
    )
    
 }

