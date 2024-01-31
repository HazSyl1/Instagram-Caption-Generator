from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
import warnings
from langchain.output_parsers import CommaSeparatedListOutputParser
output_parser = CommaSeparatedListOutputParser()

warnings.filterwarnings("ignore")

load_dotenv(dotenv_path=".env" , override=True)

llm=ChatOpenAI(temperature=0.7)

prompt=ChatPromptTemplate.from_messages(
    ["""
     You are an instagram user and known for writing the most engaging and entertaining captions.
     Study the following description of the image the user has submitted ,it is as follows: {caption}
     You have to create an instagram caption according to the given text prompt ,the text prompt describes what the user expects from the caption and it is as follows:{prompt}
     Do not mention any color or gender .
     Your answer should be concise and not long than 4 lines.
     """
     ]
)



chain =prompt| llm |output_parser
def gen_chain(caption,prompt):
    response=chain.invoke({"caption": caption,"prompt":prompt })
    # response=str(response)
    response=' '.join(response)
    return response

