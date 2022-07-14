import Image from "next/image"

export default function Header() {
  return(
<>
  <header className=" flex items-center ">


    <div className="w-1/2 pl-16">
       <h4 className=" text-gray-700 text-lg font-semibold">Tudo em um só lugar.</h4> 
       <h1 className="text-gray-700 text-6xl font-bold">Alb 360º. Seu espaço de trabalho completo.</h1>
       <li><strong className="text-blue-600">CRM</strong> - Leads, negócios, contatos, empresas</li>
       <li><strong className="text-blue-600">Meio de pagamentos</strong> - Receba por boleto, cartão de crédito, débito e pix</li>
       <li><strong className="text-blue-600">Gestão financeira</strong> - Fluxo de caixa, geração de cobranças</li>

       <button className="bg-blue-600 text-white font-semibold px-20 py-4 rounded-md mt-3 text-center items-center">Teste grátis</button>
       
       
        
     
    </div>
    <div>
        <Image src="/site1.png" alt="capa site" width="1300" height="800" />
    </div>
        
  </header>

      
</>

)
}