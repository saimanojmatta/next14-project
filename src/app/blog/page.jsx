import PostCard from "@/Components/PostCard/PostCard"
import styles from './blog.module.css'
// import { getPosts } from "@/lib/data"
const getData=async()=>{
  const res=await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}})
  if(!res.ok){
    throw new Error("something went wrong")
  }
  return res.json()
}
const BlogPage = async() => {
  //withApi
  const posts=await getData()
  //without api
  // const posts=await getPosts()
  return (
    <div className={styles.container}>
      {posts.map(post=>(
      <div className={styles.post} key={post._id}>
        <PostCard post={post}/>
      </div>
      ))}
    </div>
  )
}
export default BlogPage