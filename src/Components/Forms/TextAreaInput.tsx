import { question } from "Store/Provider/forms"
import parse from "html-react-parser"

import InputBaseStyle from "./Style"

const TextAreaInput: React.FC<{
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
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInput(input => ({ ...input, [question.name]: e.target.value }))

  return (
    <InputBaseStyle>
      <label htmlFor={question.name}>{parse(question.question)}</label>

      <textarea
        onChange={changeHandler}
        value={input[question.name]}
        name={question.name}
        required={question.required}
      />
    </InputBaseStyle>
  )
}

export default TextAreaInput
