'use client'

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  GraphicArticle,
  Input,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from '@landing-pages/ui-library'

import { useRef } from 'react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Seu nome deve conter ao menos duas letras',
  }),
  email: z.string(),
  phone: z.string(),
  message: z.string().min(1, {
    message: 'Por favor, deixe-nos uma mensagem',
  }),
  sendType: z.enum(['wtsp', 'email']),
})

const WTSP_BASE_URL = 'http://wa.me/+351932270602?text='
const EMAIL_BASE_URL =
  'mailto:impec.clean@outlook.com?subject=Olá%20venho%20pelo%20site&body='

export function EmailForm() {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      sendType: 'wtsp',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, phone, message, sendType } = values

    const nameLine = `Me%20chamo%20${name.split(' ').join('%20')}%0A`

    const emailLine = email ? `${email}%0A` : ''
    const phoneLine = phone ? `${phone}%0A` : ''

    const baseUrl = sendType === 'email' ? EMAIL_BASE_URL : WTSP_BASE_URL

    const messageLine = `%0A${message
      .replace(/\r\n|\n|\r/g, '%0A')
      .split(' ')
      .join('%20')}`

    const finalMessage = `${baseUrl}Olá%20equipa%20Impec%20Clean,%0A%0A${nameLine}${phoneLine}${emailLine}${messageLine}`

    if (linkRef.current) {
      linkRef.current.href = finalMessage
      linkRef.current.rel = 'noreferrer'
      linkRef.current.click()
    }
  }

  return (
    <div id="contact-form">
      <GraphicArticle.Root>
        <GraphicArticle.ContentRoot>
          <h2>Contacte-nos</h2>
          <p>Não encontra o que procura? Deixe-nos uma mensagem.</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="h-40" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sendType"
                defaultValue="wtsp"
                render={({ field }) => (
                  <FormItem className="items-start">
                    <FormLabel>Enviar por</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4 items-center"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="wtsp" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            WhatsApp
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="email" />
                          </FormControl>
                          <FormLabel className="font-normal">E-mail</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-6" size="lg" type="submit">
                Enviar
              </Button>
            </form>
          </Form>
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
