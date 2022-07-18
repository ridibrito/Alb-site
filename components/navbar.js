import Image from 'next/image'
import Link from 'next/link'
import MyDropdown from '../components/mydropdown'

export default function Navbar() {
  return (
    <>
      <div className="max-w-screen flex justify-around p-2  bg-white shadow-md items-center">
        <Image src="/logofull.png" alt="logo alb" width="160" height="80" />
        <div>
          <ul className="flex">
            <Link href="/">
              <a>
                <li className="text-gray-700 font-semibold hover:text-blue-500 duration-500">
                  Home
                </li>
              </a>
            </Link>

            <Link href="/precos">
              <a>
                <li className="text-gray-700 font-semibold ml-5 hover:text-blue-500">
                  Preços
                </li>
              </a>
            </Link>

            <Link href="/blog">
              <a>
                <li className="text-gray-700 font-semibold ml-5 hover:text-blue-500">
                  Blog
                </li>
              </a>
            </Link>

            <Link href="#">
              <a>
                {' '}
                <MyDropdown />
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
