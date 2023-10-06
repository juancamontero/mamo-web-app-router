import { COMPANY_NAME } from "@/lib/constants"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <section className="bg-back-color text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[100vh] lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-accent-3 via-success to-accent-2 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              <Link href="/">NO ENCONTRADO - {COMPANY_NAME}</Link>
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              El servicio no existe o no está disponible actualmente. Por favor,
              intente más tarde. Gracias.😉
            </p>
            <h3 className="text-accent-3 font-underline sm:text-2xl mt-1">
              <Link href="/">Volver al inicio</Link>
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}
