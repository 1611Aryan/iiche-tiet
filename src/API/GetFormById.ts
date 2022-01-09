import axios from "axios"
import { formData } from "Store/Provider/forms"
import { getFormById } from "./Endpoints"

const GetFormById = async (id: string) => {
  try {
    const res = await axios[getFormById.method]<{
      form: formData
    }>(getFormById.url, { id })
    return res.data.form
  } catch (err) {
    console.log(err)
  }
}

export default GetFormById
