from views import index, hello


def setup_routes(app):
    app.router.add_get('/', index)
    app.router.add_get('/hello', hello)