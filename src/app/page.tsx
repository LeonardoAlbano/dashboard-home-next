'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import LogoMobileTrajeton from '@/assets/logo-mobile-trajeton'
import LogoTrajeton from '@/assets/logo-trajeton'
import { RecoverPassword } from '@/components/recover-password'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const passwordErrorMessage =
  'Senha inválida. Verifique se a senha tem pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente.'

const signInFormSchema = z.object({
  email: z.string().email({
    message:
      'E-mail inválido. Insira um endereço de e-mail no formato correto.',
  }),
  password: z
    .string()
    .min(8, passwordErrorMessage)
    .max(32, passwordErrorMessage)
    .regex(/[A-Z]/, passwordErrorMessage)
    .regex(/[a-z]/, passwordErrorMessage)
    .regex(/[0-9]/, passwordErrorMessage)
    .regex(/[^a-zA-Z0-9]/, passwordErrorMessage),
})

type SignInForm = z.infer<typeof signInFormSchema>

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  })

  const handleSignIn = async (data: SignInForm) => {
    console.log(data)

    const mockEmail = 'visitante@email.com'
    const mockPassword = 'Mudar@2024'

    if (data.email === mockEmail && data.password === mockPassword) {
      await new Promise((resolve) => setTimeout(resolve, 500))

      router.push('/home')
    } else {
      console.log('Credenciais inválidas')
    }
  }

  return (
    <section className="grid-rows-app grid min-h-screen md:grid-cols-2 md:grid-rows-1 md:pt-0">
      <div className="order-2 flex flex-col items-center justify-start md:order-1 md:flex-row md:justify-center">
        <div>
          <form
            id="SignIn"
            onSubmit={handleSubmit(handleSignIn)}
            className="relative w-[400px] space-y-4 px-8 pb-9"
          >
            <div className="space-y-2">
              <Label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Digite seu e-mail"
              />
              {errors.email && (
                <span className="flex text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="relative space-y-2">
              <Label htmlFor="password">
                Senha<span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  {...register('password')}
                  placeholder="Digite sua senha"
                />
                <div
                  className="absolute inset-y-0 right-0 top-1/2 flex -translate-y-1/2 transform cursor-pointer items-center pr-3 text-sm leading-5"
                  onClick={togglePasswordVisibility}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOffIcon size={20} className="text-blue-300" />
                  ) : (
                    <EyeIcon size={20} className="text-blue-300" />
                  )}
                </div>
              </div>
              {errors.password && (
                <span className="flex text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button className="border-none bg-none pt-4 text-xs text-blue-500">
                  Esqueci minha senha
                </button>
              </DialogTrigger>

              <RecoverPassword />
            </Dialog>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full rounded-xl"
              form="SignIn"
            >
              Enviar
            </Button>
          </form>
          <div className="space-y-3 px-8"></div>
        </div>
      </div>

      <div className="order-1 -mb-16 flex items-center justify-center md:order-2 md:mb-0 md:bg-muted md:pb-8">
        <div className="hidden md:block">
          <LogoTrajeton />
        </div>
        <div className="block md:hidden">
          <LogoMobileTrajeton />
        </div>
      </div>
    </section>
  )
}
