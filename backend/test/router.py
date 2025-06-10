from fastapi import APIRouter

app = APIRouter(prefix="/test",tags=["test"])

@app.get("")
async def test_get():
    return 1