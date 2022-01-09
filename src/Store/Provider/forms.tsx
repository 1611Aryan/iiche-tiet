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
          name: "name",
          required: true,
        },
        {
          question: "Email",
          responseType: "Email",
          name: "email",
          required: true,
        },
        {
          question: "Roll No.",
          responseType: "Number",
          name: "rollNumber",
          required: true,
        },
        {
          question: "Your Branch",
          responseType: "String",
          name: "branch",
          required: true,
        },
        {
          question: "Year of Study",
          responseType: "String",
          name: "year",
          required: true,
        },
        {
          question: "Department of Interest",
          responseType: "Checkbox",
          name: "department",
          options: [
            "Technical",
            "Content",
            "Designing",
            "Marketing and PR",
            "Engagement",
          ],
          required: true,
        },

        {
          question: "Whatsapp no.",
          responseType: "Phone",
          name: "phone",
          required: true,
        },
        {
          question:
            "Mention the skills you possess? How well you know about it?",
          responseType: "Text",
          name: "skills",
          required: false,
        },
        {
          question: "Attach your work, if any?",
          responseType: "Text",
          name: "work",
          required: true,
        },
        {
          question: "What are your expectations from IICHE?",
          responseType: "Text",
          name: "expectations",
          required: true,
        },
        {
          question:
            "If you had a choice between two superpowers, being invisible or flying, Which will you choose and why?",
          responseType: "Text",
          name: "superpowers",
          required: true,
        },
        {
          question:
            "Is it better to do work that's perfect but late, or average but on time?",
          responseType: "Text",
          name: "work_ethic",
          required: true,
        },
        {
          question: "What is an unpopular opinion you hold?",
          responseType: "Text",

          name: "opinion",

          required: true,
        },
        {
          question: "Any suggestion or ideas for us?",
          responseType: "Text",
          name: "suggestion",
          required: false,
        },
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
    return form ? form : navigate("forms")
  }

  return (
    <FormsContext.Provider value={{ forms, formNames, getFormByName }}>
      {children}
    </FormsContext.Provider>
  )
}
