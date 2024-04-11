// "use client"
import Image from 'next/image'
import styles from './contact.module.css'
// import dynamic from 'next/dynamic'
// import HydrationTest from '@/Components/hydrationTest'
// const HydrationTestSSR=dynamic(()=>import ("@/Components/hydrationTest"),{ssr:false})
export const metadata = {
  title: 'Contact page ',
  description: 'Next.js starter app contact description',
}
const ContactPage = () => {
  // const a=Math.random()
  // console.log(a)
  // console.log('check where its working')
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt='' 
        fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
      {/* {isClient && a}
      {a} */}
      {/* <HydrationTestSSR/> */}
      {/* <div suppressHydrationWarning>{a}</div> */}
        <form  className={styles.form}>
          <input type="text"placeholder='Name and Surname' />
          <input type="text"placeholder='Email Address' />
          <input type="text"placeholder='Phone Number(optional)' />
          <textarea placeholder="Message"name="" id="" cols="30" rows="10"></textarea>
          <button >Send</button>
        </form>
      </div>
    </div>
  )
}
export default ContactPage