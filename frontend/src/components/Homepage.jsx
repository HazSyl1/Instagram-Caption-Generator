import {React, useState} from 'react'
import "../styles/style_homepage.css"
import Navbar from './Navbar'
import img from "../assets/file.png"
const Homepage = () => {

    const [isDragging, setIsDragging] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [caption, setCaption] = useState("Chasing dreams and creating memories. ✨ #LifeIsAnAdventure")

    const handleDragEnter = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = () => {
      setIsDragging(false);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
  
      const files = e.dataTransfer.files;
      // Assuming only one file is dropped
      if (files.length > 0) {
        const imageFile = files[0];
        setUploadedImage(URL.createObjectURL(imageFile));
      }
    };
  
    const handleFileInput = (e) => {
      const file = e.target.files[0];
      if (file) {
        setUploadedImage(URL.createObjectURL(file));
      }
    };

    const handleCloseImage = () => {
        setUploadedImage(null);
      };


  return (
    <>  
    
    <div className='navbar-container'>
        <Navbar/>
        
    </div> 

    <div className='outercontainer'>
        <div className='innercontainer'>
            <div className='Lefthome'>
                <div className='img-container'>
                    <img src="../src/assets/left.png" alt="Instagram Demo Picture" className='instagram-image'/>
                </div>
            </div>
            <div className='Righthome'>
                <h2 >Create a Captivating and Mesmerizing , caption for your next perfect post.In only a matter of Seconds!!</h2>
            </div>
        </div>
    </div>

    <div className='outercontainer'>
        <div className='innercontainer'>
            <div
                className={`drag-drop-rectangle ${isDragging ? 'dragging' : ''}`}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {uploadedImage && (
                <div className="preview-container">
                    <img src={uploadedImage} alt="Uploaded" className="preview-image" />
                    <button className="close-button" onClick={handleCloseImage}>
                    &#10005;
                    </button>
                </div>
                )}
                {!uploadedImage && (
                <div className="upload-container">
                    <span className="upload-icon">
                        <img  className='icon-upload' src={img} alt="file upload icon" onClick={handleFileInput} />
                        </span>
                    <p>Drag & Drop your image here</p>
                    <label htmlFor="fileInput" className="upload-button">
                    Upload Logo
                    </label>
                    <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleFileInput}
                    style={{ display: 'none' }}
                    />
                </div>
                )}
            </div>
            <div className='Righthome'>
                {!uploadedImage && !isLoaded && <h2 >Express Yourself with Beautiful Caption</h2>}
                {uploadedImage && !isLoaded && <h2>Please Wait.. Caption Loading</h2>}
                {uploadedImage && isLoaded && <><p>Caption  : {caption}</p><div class="copy-container">
                <span class="copy-symbol" onclick="copyToClipboard()">Copy &#x2398;</span>
                </div></>
                }
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Homepage