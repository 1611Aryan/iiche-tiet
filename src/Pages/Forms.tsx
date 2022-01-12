import styled from "@emotion/styled"
import Header from "Components/Common/Header"
import ThumbnailForm from "Components/Forms/ThumbnailForm"
import { useEffect } from "react"

import { useForms } from "Store/Provider/forms"

const Forms = () => {
  const { forms } = useForms()

  useEffect(() => {
    document.title = "IIChE TIET ● Forms"
  }, [])

  return (
    <StyledForms>
      <Header />
      <h1>All Forms</h1>
      <ul>
        {forms?.map((form, index) => (
          <ThumbnailForm key={index} formName={form.formName} />
        ))}
      </ul>
    </StyledForms>
  )
}

const StyledForms = styled.main`
  width: 100%;
  min-height: 100%;
  background: var(--bg);
  h1 {
    margin-top: 1rem;
    padding: 0 var(--padding);
    color: #fff;
    font-size: clamp(2rem, 3vw, 4rem);
    font-family: var(--cursive);
  }
  ul {
    width: 100%;
    margin: 2rem 0;
    padding: 0 var(--padding);
    display: flex;

    align-items: center;
    flex-wrap: wrap;
    gap: clamp(1.5rem, 4vw, 3rem);
  }
`

export default Forms
