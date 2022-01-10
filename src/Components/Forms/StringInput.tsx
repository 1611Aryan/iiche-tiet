import React from "react"
import parse from "html-react-parser"
import { question } from "Store/Provider/forms"
import InputBaseStyle from "./Style"

const StringInput: React.FC<{
  question: question
  setInput: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string | string[]
    }>
  >
  input: {
    [key: string]: string | string[]
  }
}> = ({ question, setInput, input }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [question.name]: e.target.value }))

  return (
    <InputBaseStyle>
      <label htmlFor={question.name}>{parse(question.question)}</label>

      <input
        onChange={changeHandler}
        value={input[question.name]}
        name={question.name}
        required={question.required}
        type="text"
      />
    </InputBaseStyle>
  )
}

export default StringInput
