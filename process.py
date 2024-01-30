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
     Study the following caption : {caption}
     You have to create an instagram caption according to the given parameters :{prompt}
     If the caption is empty then just say, "The caption is not generated well. Please try a Differnet Image".
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

