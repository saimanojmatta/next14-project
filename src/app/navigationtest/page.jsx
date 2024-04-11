"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
const NavigationTestPage = () => {
    const router=useRouter()
    const pathname=usePathname()
    const searchParams=useSearchParams()
    const q=searchParams.get('q')
    console.log(q)
    const handleClick=()=>{
        console.log('btn clicked')
        router.forward()
    }
  return (
    <div >
       <Link href="/" prefetch={false}>Click Here</Link>
       <button onClick={handleClick}>Click Here</button>
    </div>
  )
}
export default NavigationTestPage