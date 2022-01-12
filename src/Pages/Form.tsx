import styled from "@emotion/styled"
import Header from "Components/Common/Header"
import StringInput from "Components/Forms/StringInput"
import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { formData, useForms } from "Store/Provider/forms"
import FormBg from "Media/Form/formBg.jpg"
import TextAreaInput from "Components/Forms/TextAreaInput"
import FormLoader from "Components/Forms/Loader"
import CheckboxInput from "Components/Forms/CheckboxInput"
import SubmitResponse from "API/SubmitResponse"
import Success from "Components/Forms/Success"

const Form = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [success, setSuccess] = useState(false)
  const { formName } = useParams()
  const { getFormByName } = useForms()
  const [selected, setSelected] = useState<formData>()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState<{ [key: string]: string | string[] }>({})
  const [error, setError] = useState("")

  useEffect(() => {
    ;(async () => {
      const form = await getFormByName(formName || "")

      form && setSelected(form)
    })()
  }, [formName, getFormByName])

  useEffect(() => {
    setInput(() => {
      let temp = {}
      selected?.questions.forEach(question => {
        temp = {
          ...temp,
          [question.name]: question.responseType === "Checkbox" ? [] : "",
        }
      })
      return temp
    })
  }, [selected])

  useEffect(() => {
    if (error) ref.current?.scrollTo(0, 0)
  }, [error])

  useEffect(() => {
    document.title = `IIChE TIET ● ${selected?.formName}`
  }, [selected])

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setError("")
    e.preventDefault()
    setLoading(true)
    const res = await SubmitResponse(input, selected?._id || "", setError)
    if (res) setSuccess(true)
    setLoading(false)
  }

  return (
    <StyledForm>
      {loading && <FormLoader />}
      {success && <Success />}
      <img src={FormBg} alt="" className="bg" />

      <section>
        <div className="left">
          <Header />
          <div className="formName">
            <h1>{selected?.formName}</h1>
          </div>
        </div>

        <div className="right" ref={ref}>
          <div className="right_bg"></div>
          <form onSubmit={submitHandler}>
            <p className="error">{error}</p>
            {selected?.questions.map((question, index) => {
              if (
                question.responseType === "String" ||
                question.responseType === "Email" ||
                question.responseType === "Phone" ||
                question.responseType === "Number"
              )
                return (
                  <StringInput
                    key={index}
                    input={input}
                    setInput={setInput}
                    question={question}
                  />
                )
              if (question.responseType === "Text")
                return (
                  <TextAreaInput
                    key={index}
                    input={input}
                    setInput={setInput}
                    question={question}
                  />
                )
              if (question.responseType === "Checkbox")
                return (
                  <CheckboxInput
                    key={index}
                    setInput={setInput}
                    question={question}
                  />
                )

              return null
            })}

            <button>Submit</button>
          </form>
        </div>
      </section>
    </StyledForm>
  )
}

const StyledForm = styled.main`
  width: 100%;
  height: 100vh;
  background: var(--bg);

  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(25px);
  }

  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .left {
    width: 40%;
    height: 100%;
    .formName {
      width: 100%;
      height: 90vh;
      display: flex;
      align-items: center;
    }
    h1 {
      padding: 0 var(--padding);
      color: #fff;
      font-size: clamp(3rem, 5vw, 5rem);
      font-weight: 600;
      font-family: var(--cursive);
    }
  }

  .right {
    width: 60%;
    height: 100%;
    padding: calc(var(--padding) * 2) calc(var(--padding) * 3);

    overflow: hidden auto;

    background: #0008;

    form {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: clamp(2rem, 5vw, 4rem);

      .error {
        font-size: clamp(1rem, 2vw, 1.25rem);
        color: red;
      }

      button {
        align-self: flex-end;
        margin-bottom: calc(var(--padding) * 2);
        padding: calc(var(--padding) / 4) calc(var(--padding) / 3);
        font-size: clamp(1rem, 2vw, 1.25rem);
        background: #ffb66f;
        border-radius: 4px;
      }
    }

    ::-webkit-scrollbar {
      background: transparent;
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #fff;
    }
  }

  @media only screen and (max-width: 750px) {
    section {
      flex-direction: column;
      .left {
        width: 100%;
        height: auto;
        .formName {
          height: auto;
        }
      }
      .right {
        margin-top: 1rem;
        width: 100%;
        flex: 1;
        .right_bg {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    section {
      .right {
        padding: var(--padding);
      }
    }
  }
`

export default Form
