import jsonServer from 'json-server'

export default function jsonServerModule() {
  const server = jsonServer.create()
  const router = jsonServer.router('content/db.json')
  const middlewares = jsonServer.defaults()

  const port = 8080

  server.use(middlewares)
  server.use(router)

  const startJsonServer = () => {
    server.listen(port, () => {
      // eslint-disable-next-line
      console.log(`JSON Server running at ${port}`)
    })
  }

  this.nuxt.hook('listen', () => {
    startJsonServer()
  })
}
