from aiohttp import web


async def index(request):
    return web.Response(text='Hello, Boba!')

async def hello(request):
    return web.Response(text='Hello, Trololo!')