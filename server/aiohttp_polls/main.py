import sys
import asyncio
import argparse

from aiohttp import web
from trafaret_config import commandline

from routes import setup_routes
from db import init_pg, close_pg
from utils import TRAFARET


def init(loop, argv):
    # to easy init app with argv-s
    ap = argparse.ArgumentParser()
    commandline.standard_argparse_options(ap, default_config='./config/polls.yaml')
    #
    # define your command-line arguments here
    #
    options = ap.parse_args(argv)
    config = commandline.config_from_options(options, TRAFARET)

    # setup application and extensions
    app = web.Application(loop=loop)

    # load config from yaml file in current dir
    app['config'] = config

    # working with DB:
    # create connection to the database
    app.on_startup.append(init_pg)
    # shutdown db connection on exit
    app.on_cleanup.append(close_pg)

    # setup views, routes, middlewares
    setup_routes(app)

    return app


def main(argv):
    # init event loop
    loop = asyncio.get_event_loop()
    # init app & run web client
    app = init(loop, argv)
    web.run_app(app, 
                host=app['config']['host'],
                port=app['config']['port'])


if __name__ == '__main__':
    main(sys.argv[1:])

