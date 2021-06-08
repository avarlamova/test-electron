import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        response = dict(name="John", age=25, position='manager')
        self.write(response)

def make_app():
    return tornado.web.Application([
        (r"/getData", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8889)
    tornado.ioloop.IOLoop.current().start()