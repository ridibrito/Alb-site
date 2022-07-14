import Image from "next/image"

export default function Navbar() {
  return (
    <>
    <div className="flex justify-between p-4 shadow-sm pt-10">
    <Image src="/logofull.png" alt="logo alb" width="100" height="50" />
    <div>
      <ul className="flex">
        <li className="text-gray-700 font-semibold">Home</li>
        <li className="text-gray-700 font-semibold ml-3">Produtos</li>
        <li className="text-gray-700 font-semibold ml-3">Preços</li>
        <li className="text-gray-700 font-semibold ml-3">Contato</li>

      </ul>
    </div>
    <div><button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold">Login</button></div>
    </div>
    
    </>

  )
    
}