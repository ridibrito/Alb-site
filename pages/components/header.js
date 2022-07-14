import Image from "next/image"

export default function Header() {
  return(
<>
  <header className="flex">
    <div>
        header
    </div>
    <div>
        <Image src="/site.png" alt="capa site" width="1300" height="800" />
    </div>
        
  </header>

      
</>

)
}