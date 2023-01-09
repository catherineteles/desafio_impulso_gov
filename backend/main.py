from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from databases import Database

app = FastAPI()

database = Database('sqlite+aiosqlite:///dados.db')


@app.on_event("startup")
async def database_connect():
    await database.connect()


@app.on_event("shutdown")
async def database_disconnect():
    await database.disconnect()


@app.get("/")
async def fetch_data():
    query = "SELECT * FROM estabelecimentos"
    results = await database.fetch_all(query=query)

    return  results

@app.get("/{municipio_id}")
async def fetch_data(municipio_id: int):
    query = f"SELECT id_cnes, nome, latitude, longitude FROM estabelecimentos WHERE municipio_id_sus={municipio_id}"
    results = await database.fetch_all(query=query)

    return  results