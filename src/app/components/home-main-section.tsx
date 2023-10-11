import Image from "next/image"

export default function MainSection() {
  return (
    <section className="container bg-bg-100 rounded-lg p-6 text-text-100 mb-4 text-xl">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-primary-100">
        ¿Qué es el nanofortalecimiento?
      </h2>
      <p className="mb-3 font-normal text-text-200">
        <strong>Nanofortalacimiento</strong> es el concepto en el cual hemos en
        marcado nuestra <strong>estrategia</strong> de fortalecimiento
        empresarial.
      </p>
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-primary-100">
        La estrategia
      </h2>
      <p className="mb-3 font-normal text-text-200">
        Abstraemos la lógica de su negocio granulando toda su operación hasta
        llegar a esas <strong>unidades de operación mínimas</strong> para
        desarrollar indicadores que permitan sun control y seguimiento
      </p>
      <p className="mb-3 font-normal text-text-200">
        Con esas pequeñas piezas identifcadas desarrollamos sinergias pensando
        en su organización como un organismo controlado por sus células
      </p>
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-primary-100">
        ¿Por qué granular la operación?
      </h2>
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 lg:gap-3 my-8">

        <div className="max-w-[550px] p-6 bg-gradient-to-br from-bg-100 via-bg-200  to-bg-100  rounded-lg shadow">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-text-100  ">
            Lo más pequeño se adapta mejor a cualquier entorno
          </h5>
          <Image
            src="/minor-size.webp"
            alt="gráfico comparativo de tamaños"
            width={250}
            height={800}
          />
        </div>

        <div className="max-w-[550px] p-6 bg-gradient-to-br from-bg-100 via-bg-200  to-bg-100  rounded-lg shadow">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-text-100 ">
          Es mas facil tomar cualquier forma con piezas pequeñas que con piezas grandes
          </h5>
          <Image
            src="/more-shape.webp"
            alt="gráfico comparativo de tamaños"
            width={250}
            height={800}
          />
        </div>

      </section>
    </section>
  )
}
