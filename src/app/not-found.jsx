import Link from "next/link"

const NotFound = () => {
  return (
    <div style={{display:"flex",flexDirection:"column" ,gap:"20px",}}>
        <h2>401 Not Found!</h2>
        <p>Sorry,the page you are looking for does not exist.</p>
        <Link href={'/'} style={{color:"rebeccapurple"}}>Return Home</Link>
    </div>
  )
}
export default NotFound