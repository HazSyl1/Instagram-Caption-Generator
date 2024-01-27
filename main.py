from script import generate_caption
import warnings
warnings.filterwarnings("ignore")
cap,captions = generate_caption('k.jpg')
print("\n")
print("ImageCaption: ",cap)
print("Suggested Captions: ",captions)