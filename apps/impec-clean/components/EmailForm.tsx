'use client'

import {
  Button,
  GraphicArticle,
  Input,
  Label,
  Textarea,
} from '@landing-pages/ui-library'
import { FormEvent, useRef } from 'react'

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const name = nameRef.current?.value
  const email = emailRef.current?.value
  const message = messageRef.current?.value

  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  try {
    const response = await fetch('https://hook.eu1.make.com/mnuoy9ief698gwh6ep63sgap3l5f0v7l', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    if (response.ok) {
      alert('Mensagem enviada com sucesso!')
      // Optionally clear the form
      nameRef.current.value = ''
      emailRef.current.value = ''
      messageRef.current.value = ''
    } else {
      alert('Erro ao enviar a mensagem. Tente novamente.')
    }
  } catch (error) {
    console.error('Erro ao enviar para o webhook:', error)
    alert('Erro de rede ao enviar a mensagem.')
  }
}

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
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                className="border border-black"
                ref={emailRef}
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
              />
            </div>

            <Button type="submit">Submeter</Button>
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
