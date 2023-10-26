from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Input(BaseModel):
    a: int
    b: int

class Output(BaseModel):
    sum: int

@router.post("/add", response_model=Output)
def add(input: Input):
    return Output(sum=input.a + input.b + input.a)
