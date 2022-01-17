import axios from "axios"
import { form } from "Store/Provider/forms"
import { getForms } from "./Endpoints"

const GetForms = async () => {
  try {
    const res = await axios[getForms.method]<{
      forms: form[]
    }>(getForms.url)

    return res.data.forms
  } catch (err) {
    console.log(err)
  }
}

export default GetForms
