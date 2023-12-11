'use client'

import {
  Button,
  GraphicArticle,
  Input,
  Label,
  Textarea,
} from '@landing-pages/ui-library'
import { FormEvent, useCallback, useRef } from 'react'

const BASE_URL = 'http://wa.me/+351932270602'

export function EmailForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = {
      name: nameRef.current?.value ?? '',
      email: emailRef.current?.value ?? '',
      message: messageRef.current?.value ?? '',
    }

    const nameLine = name
      ? `Me%20chamo%20${name.split(' ').join('%20')}%0A`
      : ''

    const emailLine = email ? `(${email})%0A%0A` : ''

    const messageLine = message
      ? `${message
          .replace(/\r\n|\n|\r/g, '%0A')
          .split(' ')
          .join('%20')}`
      : ''

    const finalMessage = `${BASE_URL}?text=Olá%20equipa%20Impec%20Clean,%0A%0A${nameLine}${emailLine}${messageLine}`

    if (
      nameRef.current &&
      emailRef.current &&
      messageRef.current &&
      linkRef.current
    ) {
      linkRef.current.href = finalMessage
      linkRef.current.click()

      nameRef.current.value = ''
      emailRef.current.value = ''
      messageRef.current.value = ''
    }
  }, [])

  return (
    <div id="contact-form">
      <GraphicArticle.Root>
        <GraphicArticle.ContentRoot>
          <h2>Contacte-nos</h2>
          <p>Não encontra o que procura? Deixe-nos o seu e-mail abaixo.</p>
          <form className="flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                name="name"
                id="name"
                className="border border-black"
                ref={nameRef}
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                id="email"
                className="border border-black"
                ref={emailRef}
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                name="message"
                id="message"
                className="border border-black h-40"
                ref={messageRef}
                placeholder="Escreva aqui a sua mensagem..."
                required
              />
            </div>

            <Button type="submit">Submeter</Button>
          </form>
        </GraphicArticle.ContentRoot>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.334010006714!2d-8.410869584282961!3d41.56201519311364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24ffe6fd03329f%3A0x259c35b977af95e5!2sImpec%20Clean!5e0!3m2!1spt-PT!2scv!4v1677152754839!5m2!1spt-PT!2scv"
          className="h-96 md:h-[50vh] w-full border-none md:w-[40%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id="1734189114"
        ></iframe>
      </GraphicArticle.Root>
      <a className="invisible" ref={linkRef} target="_blank" rel="noreferrer">
        Pedir orçamento grátis
      </a>
    </div>
  )
}
