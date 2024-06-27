'use client'

import { X } from 'lucide-react'

import { ModalFormInputField } from '@/components/modal/modal-form-input-field'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useModal } from '@/hooks/useModal'

import { Loader } from '../loader'
import { Button } from '../ui/button'

export function ModalForm() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useModal()

  const inputs = [
    {
      name: 'numero',
      placeholder: 'Número',
      error: errors.numero,
      errorMessage: 'Número não pode ser vazio.',
      register,
    },

    {
      name: 'valorPremio',
      placeholder: 'Valor Prêmio',
      error: errors.valorPremio,
      errorMessage: 'Valor Prêmio não pode ser vazio.',
      register,
    },

    {
      name: 'nome',
      placeholder: 'Nome',
      error: errors.nome,
      errorMessage: 'Telefone não pode ser vazio e deve ser um número.',
      register,
    },

    {
      name: 'email',
      placeholder: 'Email',
      error: errors.email,
      errorMessage: 'Formato de email deve ser: exemplo@gmail.com.',
      register,
    },

    {
      name: 'cpfCNPJ',
      placeholder: 'CPF/CNPJ',
      error: errors.cpfCNPJ,
      errorMessage: 'CPF/CNPJ não pode ser vazio.',
      register,
    },

    {
      name: 'coberturas',
      placeholder: 'Coberturas',
      error: errors.coberturas,
      errorMessage: 'Coberturas não pode ser vazio.',
      register,
    },
  ]

  return (
    <Dialog>
      <Button asChild>
        <DialogTrigger className="max-w-max">Cadastrar item</DialogTrigger>
      </Button>

      <DialogContent>
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="max-w-max">Adicionar item</DialogTitle>

          <DialogClose className="!m-0 flex max-w-max items-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X height={20} width={20} />

            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {inputs.map((input) => {
            // @ts-expect-error: type error does not make sense.
            return <ModalFormInputField key={crypto.randomUUID()} {...input} />
          })}

          <Button
            className="w-full rounded p-6 text-sm font-normal leading-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : 'Criar minha conta'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
