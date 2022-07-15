import Image from "next/image"
export default function Header() {
  return (
    <>
      <header className="flex container ml-10 sm:ml-40 md:ml-20 lg:ml-50">
        <div className="mx-auto w-3/5 mt-4">
          <h4 className=" text-gray-700 text-lg font-semibold">
            Tudo em um só lugar.
          </h4>
          <h1 className="text-blue-500 text-3xl pt-2 font-bold md:text-4xl lg:text-6xl">
            Alb 360º 
          </h1>
          <h1 className="text-gray-700 text-3xl pt-2 font-bold md:text-4xl lg:text-6xl">
           Seu espaço de trabalho completo.
          </h1>
          <h1 className="text-gray-700 text-lg pt-2 font-semibold">
             Atendimento, Venda, gerenciamento, cobrança, relatórios e muito mais...
          </h1>
          
          <button className="bg-blue-500 text-white font-bold px-8 py-4 rounded-md mt-3 text-center items-center md:px-32 lg:px-36 xl:px-full">
            Teste grátis
          </button>
        </div>
        <div className="mt-2 w-2/5"><Image src="/bgimg.png" alt="crm" width="400" height="400"/></div>
      </header>
    </>
  )
}
