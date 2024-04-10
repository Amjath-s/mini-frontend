
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export function Result() {
    const location = useLocation();
    const { data, selectedFile } = location.state;
    const [imageUrl, setImageUrl] = useState(null);
    const [pdfUrl, setPdfUrl] = useState(null);
    console.log(data)

   
    useEffect(() => {
        if (!selectedFile) return;
    
        if (selectedFile.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = () => setImageUrl(reader.result);
        } else if (selectedFile.type === 'application/pdf') {
          setPdfUrl(URL.createObjectURL(selectedFile));
        }
      }, [selectedFile]);
    
      return (
        <div className="result-container">
          {data && (
            <div className="data-section">
              <h2>Data</h2>
              <p  className="dataview">{data.text}</p> {/* Access data.text here */}
            </div>
          )}
    
          {selectedFile && (
            <div className="preview-section">
              {imageUrl && (
                <div>
                  <h2>Selected Image</h2>
                  <img src={imageUrl} alt="Selected Image" width="100%" />
                </div>
              )}
    
              {pdfUrl && (
                <div>
                  <h2>Selected PDF Document</h2>
                  <iframe src={pdfUrl} title="PDF Document" width="100%" height="500px" />
                </div>
              )}
            </div>
          )}
    
          {!selectedFile && <div>No file selected</div>}
        </div>
      );
    }


