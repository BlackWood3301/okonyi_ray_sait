from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.test.router import app as test_app

app = FastAPI(title="Twitter Clone API")

app.include_router(test_app)
