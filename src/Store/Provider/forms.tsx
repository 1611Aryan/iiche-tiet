import GetFormById from "API/GetFormById"
import GetForms from "API/GetForms"
import React, { useContext, createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export type formData = {
  formName: string
  active: boolean
  questions: question[]
  _id: string
}

export type form = {
  formName: formData["formName"]
  _id: formData["_id"]
  active: formData["active"]
}

export type forms = {
  forms: form[] | undefined
  getFormByName: (formName: string) => Promise<void | formData>
}

// type forms = {
//   forms: form[]
//   formNames: string[]
//   getFormByName: (formName: string) => void | form
// }

export type question = {
  question: string
  responseType:
    | "String"
    | "Number"
    | "Phone"
    | "Email"
    | "Text"
    | "Checkbox"
    | string
  name: string
  options?: string[]
  required: boolean
}

const FormsContext = createContext<forms>({
  forms: [],

  getFormByName: async () => {},
})

export const useForms = () => useContext(FormsContext)

export const FormsProvider: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const [forms, setForms] = useState<form[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await GetForms()
      setForms(res || [])
    })()
  }, [])
  const navigate = useNavigate()

  const getFormByName = async (formName: string) => {
    const form = forms.filter(form => form.formName === formName)[0]
    if (!form) return navigate("forms")
    const formData = await GetFormById(form._id)
    return formData ? formData : navigate("forms")
  }

  return (
    <FormsContext.Provider value={{ forms, getFormByName }}>
      {children}
    </FormsContext.Provider>
  )
}
