import parse from "html-react-parser"
import React from "react"
import { question } from "Store/Provider/forms"
import InputBaseStyle from "./Style"

const CheckboxInput: React.FC<{
  question: question
  setInput: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string | string[]
    }>
  >
}> = ({ question, setInput }) => {
  console.log(question)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked)
      setInput(input => ({
        ...input,
        [question.name]: [...input[question.name], e.target.value],
      }))
    else
      setInput(input => {
        const options = input[question.name] as string[]
        return {
          ...input,
          [question.name]: options.filter(val => val !== e.target.value),
        }
      })
  }

  return (
    <InputBaseStyle>
      <label htmlFor="department" className="label__header">
        {parse(question.question)}
      </label>

      {question.options?.map((option, index) => (
        <div className="option" key={index}>
          <input
            type="checkbox"
            name={question.name}
            value={option}
            id={option}
            onChange={changeHandler}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </InputBaseStyle>
  )
}

export default CheckboxInput
