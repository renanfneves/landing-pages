'use client'

import {
  GraphicArticle,
  Input,
  Label,
  Textarea,
} from '@landing-pages/ui-library'
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.334010006714!2d-8.410869584282961!3d41.56201519311364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24ffe6fd03329f%3A0x259c35b977af95e5!2sImpec%20Clean!5e0!3m2!1spt-PT!2scv!4v1677152754839!5m2!1spt-PT!2scv"
          style={{ border: 0, width: '100%' }}
          className="h-96 md:h-[80vh]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id="1734189114"
        ></iframe>
      </GraphicArticle.Root>
    </div>
  )
}
