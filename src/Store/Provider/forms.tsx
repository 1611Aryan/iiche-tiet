import React, { useContext, createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export type form = {
  name: string
  active: boolean
  questions: question[]
  _id: string
}

type forms = {
  forms: form[]
  formNames: string[]
  getFormByName: (formName: string) => void | form
}

export type question = { question: string; responseType: string }

const FormsContext = createContext<forms>({
  forms: [],
  formNames: [],
  getFormByName: () => ({ _id: "", name: "", active: false, questions: [] }),
})

export const useForms = () => useContext(FormsContext)

export const FormsProvider: React.FC<{
  children: JSX.Element | JSX.Element[]
}> = ({ children }) => {
  const [forms] = useState([
    {
      name: "Recruitments",
      active: true,
      _id: "",
      questions: [
        {
          question: "Your Name",
          responseType: "String",
        },
        {
          question: "Year",
          responseType: "String",
        },
        {
          question: "Your Branch",
          responseType: "String",
        },
        {
          question: "Email Id",
          responseType: "Email",
        },
        { question: "Phone Number", responseType: "Phone" },
      ],
    },
  ])

  const [formNames, setFormNames] = useState<forms["formNames"]>([])

  useEffect(() => {
    setFormNames(() => forms.map(form => form.name))
  }, [forms])

  const navigate = useNavigate()

  const getFormByName = (formName: string) => {
    const form = forms.filter(form => form.name === formName)[0]
    return form ? form : navigate("/")
  }

  return (
    <FormsContext.Provider value={{ forms, formNames, getFormByName }}>
      {children}
    </FormsContext.Provider>
  )
}
