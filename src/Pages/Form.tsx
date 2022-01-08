import styled from "@emotion/styled"
import Header from "Components/Common/Header"
import StringInput from "Components/Forms/StringInput"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { form, useForms } from "Store/Provider/forms"

const Form = () => {
  const { formName } = useParams()
  const [selected, setSelected] = useState<form>()

  const { getFormByName } = useForms()

  useEffect(() => {
    console.log(formName)
    const form = getFormByName(formName || "")
    form && setSelected(form)
  }, [formName, getFormByName])

  return (
    <StyledForm>
      <Header />
      <section>
        <main>
          <h1>{selected?.name}</h1>
          <form>
            {selected?.questions.map(question => {
              if (question.responseType === "String")
                return <StringInput question={question} />
              return null
            })}
          </form>
        </main>
      </section>
    </StyledForm>
  )
}

const StyledForm = styled.main`
  width: 100%;
  min-height: 100%;
  background: var(--bg);

  section {
    display: flex;
    justify-content: center;
  }

  main {
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 2em;
    h1 {
      color: #fff;

      font-weight: 600;
      font-family: var(--cursive);
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 2em;
    }
  }
`

export default Form
