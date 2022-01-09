import axios from "axios"
import { getForms } from "./Endpoints"

const GetForms = async () => {
  try {
    const res = await axios[getForms.method]<{
      forms: { formName: string; _id: string }[]
    }>(getForms.url)

    return res.data.forms
  } catch (err) {
    console.log(err)
  }
}

export default GetForms
