'use client'

import { FieldError, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'

interface Inputs {
  nome: 'email' | 'numero' | 'valorPremio' | 'nome' | 'cpfCNPJ' | 'coberturas'
  numero: string
  valorPremio: string
  email: string
  cpfCNPJ: string
  coberturas: string
}

type InputFieldTypes = {
  name: 'email' | 'numero' | 'valorPremio' | 'nome' | 'cpfCNPJ' | 'coberturas'
  placeholder: string
  error: FieldError | undefined
  errorMessage: string
  register: UseFormRegister<Inputs>
}

export function ModalFormInputField({
  name,
  placeholder,
  error,
  errorMessage,
  register,
}: InputFieldTypes) {
  return (
    <div className="flex flex-col gap-2">
      {error && (
        <p className="text-sm text-destructive" data-testid={`error-${name}`}>
          {errorMessage}
        </p>
      )}

      <Input
        className={`h-12 rounded-md border-b-[#E5E7EB] p-3 text-sm leading-6 text-[#6B7280] shadow-none ${error && 'border-destructive'}`}
        placeholder={placeholder}
        data-testid={name}
        {...register(name, { required: true })}
      />
    </div>
  )
}
