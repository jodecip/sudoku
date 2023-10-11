from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

from backend.add import router as add_router

api_app = FastAPI()
api_app.include_router(add_router)

app = FastAPI()
app.mount("/api", api_app)
app.mount("/", StaticFiles(directory="frontend/build", html=True), name = 'build')

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

handler = Mangum(app)

def lambda_handler(event, context):
    if "source" in event and event["source"] == "aws.events":
        print("This is a warm-up invocation.")
        return {}
    else:
        return handler(event,context)
    
