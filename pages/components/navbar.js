import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4 shadow-sm items-center">
        <Image src="/logofull.png" alt="logo alb" width="100" height="60" />
        <div>
          <ul className="flex">
            <Link href="/">
              <a>
                <li className="text-gray-500 font-semibold">Home</li>
              </a>
            </Link>

            <Link href="/">
              <a>
                <li className="text-gray-500 font-semibold ml-5">Produtos</li>
              </a>
            </Link>

            <Link href="/">
              <a>
                <li className="text-gray-500 font-semibold ml-5">Preços</li>
              </a>
            </Link>

            <Link href="/">
              <a>
                <li className="text-gray-500 font-semibold ml-5">Contato</li>
              </a>
            </Link>
          </ul>
        </div>
        <div>
          <button className=" text-blue-500 px-6 py-2 rounded-md font-semibold">
            Login
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}
