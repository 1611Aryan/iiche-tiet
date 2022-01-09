import axios from "axios"
import { addResponse } from "./Endpoints"

const SubmitResponse = async (
  response: {
    [key: string]: string | string[]
  },
  id: string,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const res = await axios[addResponse.method]<{
      message: string
    }>(addResponse.url, { response, id })
    return res.data.message
  } catch (error: any) {
    console.log(error)

    if (error.response.data.message) {
      return setError(error.response.data.message)
    } else console.log("Error", error.message)
    return setError("We encountered an Error please try again later")
  }
}

export default SubmitResponse
