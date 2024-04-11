import Image from 'next/image'
import styles from './PostUser.module.css'
import { getUser } from '@/lib/data'
//fetchData using api
// const getData=async(userId)=>{
//   const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"})
//   if(!res.ok){
//     throw new Error('something went wrong bro!')
//   }
//   return res.json()
// }
const PostUser = async({userId}) => {
  //withApi
  // const user=await getData(userId)
  //without Api
  const user=await getUser(userId)
  console.log(user)
  return (
    <div className={styles.container}>
      <Image className={styles.avatar}
       src={user.img? user.img :"/noavatar.png"} width={50} height={50} alt=''/>
    <div className={styles.texts}>
    <span className={styles.title}>Author</span>
    <span className={styles.username}>{user.username}</span>
    </div>
  </div>
  )
}
export default PostUser