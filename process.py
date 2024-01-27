from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
import warnings
warnings.filterwarnings("ignore")

load_dotenv(dotenv_path=".env" , override=True)

llm=ChatOpenAI(temperature=0.7)

prompt=ChatPromptTemplate.from_messages(
    ["""
     You are given the caption of what's going on in an Image.
     You are a writer and poet.
     
     Study the following caption : {caption}
     
     Generate 3 beautiful ,  charismatic , and poetic caption to put on instagram from the given caption.
     
     If the caption is empty then just say, "The caption is not generated well. Please try a Differnet Image".
     
     Your answer should be concise and not long than 4 lines.
     
     
     """
     ]
)



chain =prompt| llm 
def gen_chain(caption):
    response=chain.invoke({"caption": caption })
    response=str(response)
    print(response)
    return response
    
    