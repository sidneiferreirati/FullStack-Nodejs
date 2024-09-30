export async function jsonBodyHandler(request, response) {
  // Adicionar cada chunk
  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }
  try {
    // Concatena os chunk e converter para String.Em seguida converte a string para JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }
  response.setHeader("Content-type", "application/json");
}
