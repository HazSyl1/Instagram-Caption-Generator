import uvicorn
from fastapi import FastAPI, File, UploadFile
import warnings
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from script import generate_caption
from PIL import Image
import io

app = FastAPI()

warnings.filterwarnings("ignore")

@app.get("/")
def home():
    return {"hello": "HELLO WORLD"}

@app.post('/get_caption')
async def get_caption(file: UploadFile = File(...)):
    contents = await file.read()
    
    pil_image = Image.open(io.BytesIO(contents)).resize((224, 224))
    image_array = img_to_array(pil_image)
    cap, captions = generate_caption(image_array)
    print("\n")
    print("Image Caption: ", cap)
    print("Suggested Captions: ", captions)
    
    return {
        "caption": cap,
        "suggestions": captions,
    }

if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=8000, debug=True)
