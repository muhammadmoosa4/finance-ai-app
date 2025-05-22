
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png"
const  Themelogo = () =>{
    return(
        <>  
          <Link href={"/"}>

          <Image
            src={logo || "" }
            width={200}
            height={200}
            alt="logo image"
            
            
            
            
            />
            
          </Link>
        </>
    )
}


export default Themelogo