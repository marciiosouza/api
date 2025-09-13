import { routes } from "../routes/routes.js"

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url)
  })

  if (route) {
    const routeParms = request.url.match(route.path)
    const { ...params } = routeParms.groups

    request.params = params

    return route.controller(request, response)
  }

  return response.writeHead(404).end("Rota não encontrada!")

}