'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCrud } from './useCrud'

export function useModal() {
  const { handleCreate } = useCrud()

  const ModalFormSchema = z.object({
    numero: z.string().min(1, 'Por favor, defina o número do assegurado.'),

    valorPremio: z
      .string()
      .min(1, 'Por favor, defina o valor prêmio do assegurado.'),

    nome: z.string().min(1, 'Por favor, escreva o nome do assegurado.'),

    email: z
      .string()
      .email()
      .min(6, 'Por favor, escreva o email do assegurado.'),

    cpfCNPJ: z.string().min(6, 'Por favor, escreva o CPF/CNPJ do assegurado.'),

    coberturas: z
      .string()
      .min(6, 'Por favor, defina as coberturas do assegurado.'),
  })

  type ModalFormInputs = z.infer<typeof ModalFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ModalFormInputs>({
    resolver: zodResolver(ModalFormSchema),
  })

  const onSubmit: SubmitHandler<ModalFormInputs> = async (
    data: ModalFormInputs,
  ) => {
    console.log(data)

    handleCreate(data)
  }

  return { register, handleSubmit, errors, isSubmitting, onSubmit }
}
