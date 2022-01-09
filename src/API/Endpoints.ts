type Endpoint = {
  url: string
  method: Method
}
enum Method {
  "POST" = "post",
  "GET" = "get",
  "PATCH" = "patch",
  "PUT" = "put",
  "DELETE" = "delete",
}

const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://iiche-forms-api.herokuapp.com/"

export const getForms: Endpoint = {
  url: `${baseUrl}`,
  method: Method.GET,
}

export const getFormById: Endpoint = {
  url: `${baseUrl}/formById`,
  method: Method.POST,
}

export const addResponse: Endpoint = {
  url: `${baseUrl}/addResponse`,
  method: Method.POST,
}
