import { routes } from "../routes.js";

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method == request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);
    console.log(routeParams)
    const { ...params } = routeParams.groups;
    request.params = params;
    return route.controller(request, response);
  }

  return response.writeHead(404).end("Rota não encontrado");
}
