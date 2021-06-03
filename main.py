import tornado.ioloop
import tornado.web

#class Application(tornado.web.Application):
#def __init__(self): handlers = [
 #   (r'/',MainHandler)]
  #  super(Application,self).__init__(handlers)

class MainHandler(tornado.web.RequestHandler):
    def send(self):
        self.name = 'John Smith'
        return self.name
        #self.render('index.html')

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler)
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()