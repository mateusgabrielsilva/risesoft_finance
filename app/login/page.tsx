import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignIn, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2">
      {/* Esquerda */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-4 sm:p-8">
        <Image
          src="/logo.svg"
          width={255}
          height={39}
          alt="Logo Risesoft Finance"
          className="mb-4 sm:mb-8"
        />
        <h1 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
          Bem-vindo
        </h1>
        <p className="mb-4 text-sm text-muted-foreground sm:mb-8 sm:text-base">
          O Risesoft Finance é uma plataforma de gestão financeira que utiliza
          IA para monitorar suas movimentações e oferecer insights
          personalizados, facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            Fazer login ou criar conta <LogInIcon className="mr-2" />
          </Button>
        </SignInButton>
      </div>
      {/* Direita */}
      <div className="relative hidden h-full w-full md:block">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
