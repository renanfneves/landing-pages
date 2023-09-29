'use client'

import {
  GraphicArticle,
  Input,
  Label,
  Textarea,
} from '@landing-pages/ui-library'
import BackgroundImage from '../assets/hero-image.webp'
import { ChangeEvent, FormEvent, useReducer } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

enum Actions {
  UpdateName = 'name',
  UpdateEmail = 'email',
  UpdateMessage = 'message',
}

const formInitialState = {
  name: '',
  email: '',
  message: '',
}

export function EmailForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function formReducer(state: FormState, action: any) {
    const { type, payload } = action
    switch (type) {
      case Actions.UpdateName:
        return {
          ...state,
          [Actions.UpdateName]: payload.name,
        }
      case Actions.UpdateEmail:
        return {
          ...state,
          [Actions.UpdateEmail]: payload.email,
        }
      case Actions.UpdateMessage:
        return {
          ...state,
          [Actions.UpdateMessage]: payload.message,
        }
      default:
        return state
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
    <div id="contact-form">
      <GraphicArticle.Root>
        <GraphicArticle.ContentRoot>
          <h2>Contacte-nos</h2>
          <p>Não encontra o que procura? Deixe-nos o seu e-mail abaixo.</p>
          <form className="flex flex-col gap-8 mt-8" onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                name="name"
                id="name"
                value={formState.name}
                onChange={handleInputName}
                className="border border-black"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                value={formState.email}
                onChange={handleInputEmail}
                className="border border-black"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                name="message"
                id="message"
                value={formState.message}
                onChange={handleInputMessage}
                className="border border-black"
              />
            </div>
          </form>
        </GraphicArticle.ContentRoot>
        <GraphicArticle.Image
          src={BackgroundImage.src}
          description="Serviços oferecidos pela Impec Clean"
        />
      </GraphicArticle.Root>
    </div>
  )
}
