import styled from "@emotion/styled"
import { question } from "Store/Provider/forms"

const StringInput: React.FC<{ question: question }> = ({ question }) => {
  return (
    <StyledInput>
      <label htmlFor="">{question.question}</label>

      <input type="text" />
    </StyledInput>
  )
}

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  label {
    font-size: 1.5rem;
    color: #fff;
  }

  input {
    padding: calc(var(--padding) / 6) calc(var(--padding) / 4);
    font-size: 1.25rem;
  }
`

export default StringInput
