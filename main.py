from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.test.router import app as test_app

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Twitter Clone API")

app.add_middleware(
       CORSMiddleware,
       allow_origins=["*"],  # В продакшене лучше указать конкретные домены
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )


app.include_router(test_app)
