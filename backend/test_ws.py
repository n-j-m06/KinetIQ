import asyncio
import websockets


async def test():
    async with websockets.connect(
        "wss://kinetiq-backend-9jlp.onrender.com/ws"
    ) as ws:
        while True:
            message = await ws.recv()
            print(message)


asyncio.run(test())