'use client'

import { GraphicArticle } from "@landing-pages/ui-library"
import BackgroundImage from '../assets/hero-image.webp'
import { ChangeEvent, FormEvent, useReducer } from "react"

type FormState = {
  name: string
  email: string
  message: string
}

enum Actions {
  UpdateName = "name",
  UpdateEmail = "email",
  UpdateMessage = "message"
}

const formInitialState = {
  name: '',
  email: '',
  message: '',
}

export function EmailForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function formReducer(state: FormState, action: any) {
    const { type, payload } = action;
    switch (type) {
      case Actions.UpdateName:
        return {
          ...state,
          [Actions.UpdateName]: payload.name
        };
      case Actions.UpdateEmail:
        return {
          ...state,
          [Actions.UpdateEmail]: payload.email
        };
      case Actions.UpdateMessage:
        return {
          ...state,
          [Actions.UpdateMessage]: payload.message
        };
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(formReducer, formInitialState)

  const handleInputName = (payload: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Actions.UpdateName, payload })
  }

  const handleInputEmail = (payload: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Actions.UpdateEmail, payload })
  }

  const handleInputMessage = (payload: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: Actions.UpdateMessage, payload })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <GraphicArticle.Root>
      <GraphicArticle.ContentRoot>
        <h2>Contacte-nos</h2>
        <p>
        Não encontra o que procura? Deixe-nos o seu e-mail abaixo.
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input type="name" value={formState.name} onChange={handleInputName} />
          <input type="name" value={formState.email} onChange={handleInputEmail} />
          <textarea value={formState.message} onChange={handleInputMessage} />
        </form>
      </GraphicArticle.ContentRoot>
      <GraphicArticle.Image
        src={BackgroundImage.src}
        description="Serviços oferecidos pela Impec Clean"
      />
    </GraphicArticle.Root>
  )
}
