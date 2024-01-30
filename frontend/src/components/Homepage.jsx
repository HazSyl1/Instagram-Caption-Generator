import {React, useState,useEffect} from 'react'
import "../styles/style_homepage.css"
import Navbar from './Navbar'
import img from "../assets/file.png"
import axios from 'axios'
const Homepage = () => {


    const [click,setClick]=useState(false)
    const [inputText,setInputText] =useState(null);
    const [isImage,setImage]=useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [caption, setCaption] = useState(null)
    const [des , setDes]=useState(null);
    console.log("image",isImage)
    console.log("loaded",isLoaded)
    console.log('click',click)
    console.log('des',des)

    const handleSubmit = async ()=>{

      if (!isImage){
        alert("Please upload an image");
        setClick(false);
        return;
      }
      if(!inputText){
        alert("Please fill the input text");
        setClick(false);
        return;
      }

      const formData=new FormData();
      formData.append("file",isImage);
      formData.append("prompt",inputText)
      console.log("HANDLING SUBMIT")

      try
      {const response=await axios.post("http://127.0.0.1:8000/get_caption",formData,{
        headers:{
          'content-type':'multipart/form-data'
        }
      })
      setDes(response.data['caption'])
      setCaption(response.data['suggestions'])
      setIsLoaded(true);
      setClick(false);
      
    }

      catch (error){
        console.error("Error Uploading Image:",error)
      }
      
      
    }
    const handleClick=() =>
    {
      setClick(true);
       //generating caption
       handleSubmit();
    }
    const handleTextChange=(e)=> {
      setInputText(e.target.value)
      // console.log("INPUT",inputText)
    };

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
        setImage(e.target.files[0])
        const imageFile = files[0];
        setUploadedImage(URL.createObjectURL(imageFile));
        
      }
    };
  
    const handleFileInput = (e) => {
      // setUploadedImage(e.target.files[0]);
      // handleSubmit();
      setImage(e.target.files[0])
      // console.log(e.target.files[0])
      

      const file = e.target.files[0];
      if (file) {
        setUploadedImage(URL.createObjectURL(file));
        console.log("IMAGE ADDED")
        
      }
    };
    
    const handleCloseImage = () => {
       // THIS SHOULD REST THE STATES SO THE WEBAPP IS NOT SHOWING ANY SUGGETSIONS OR DESCRIPTION
        setUploadedImage(null);
        setCaption(null);
        setIsLoaded(false);
        // console.log("REESET")
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
        <div className='inputBar'>
            <div
                className={`drag-drop-rectangle ${isDragging ? 'dragging' : ''} `}
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
                    accept=".jpg , .png , .jpeg"
                    onChange={handleFileInput}
                    style={{ display: 'none' }}
                    />
                    
                </div>
                
                )}
                
                
            </div>
            <div className='inputText' ><input type="text" value={inputText} onChange={handleTextChange} placeholder='What kind of caption do you want?' required/>
            <button  onClick={handleClick}>Generate!</button>
            
            </div>
            {des && <p className='des'>Detected in Image: {des} </p>}
            </div>
            <div className='Righthome'>
                {!isLoaded && !click &&<h2 >Express Yourself with Beautiful Caption</h2>}
                {inputText&&uploadedImage && !isLoaded && click && <h2>Please Wait.. Caption Loading</h2>}
                {uploadedImage && isLoaded && !click &&
                <>
                <p>{caption}</p>
                <div class="copy-container">
                <span class="copy-symbol" onclick="copyToClipboard()">Copy &#x2398;</span>
                </div>
                </>
                } 
            </div>
            
        </div>
        
    </div>
    
    </>
  )
}

export default Homepage