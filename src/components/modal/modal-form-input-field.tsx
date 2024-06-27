'use client'

import { FieldError, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'

interface Inputs {
  numero: string
  valorPremio: string
  nome: 'email' | 'numero' | 'valorPremio' | 'nome' | 'cpfCNPJ' | 'coberturas'
  email: string
  cpfCNPJ: string
  coberturas: string
}

interface InputFieldTypes extends Inputs {
  placeholder: string
  error: FieldError | undefined
  errorMessage: string
  register: UseFormRegister<Inputs>
}

export function ModalFormInputField({
  numero,
  valorPremio,
  name,
  email,
  cpfCNPJ,
  coberturas,
  placeholder,
  error,
  errorMessage,
  register,
}: InputFieldTypes) {
  return (
    <div className="flex flex-col gap-2">
      {error && <p className="text-sm text-destructive">{errorMessage}</p>}

      <Input
        className={`h-12 rounded-md border-b-[#E5E7EB] p-3 text-sm leading-6 text-[#6B7280] shadow-none ${error && 'border-destructive'}`}
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
    </div>
  )
}
