import { AddPost, DeletePost} from "@/lib/action"
const ServerActionTest = () => {
    // const ActionInComponent=async()=>{
    //     "use server"
    //     console.log('ActionInComponent is also working')
    // }
  return (
    <div>
        <form action={AddPost}>
            <input type="text" placeholder="title" name='title' />
            <input type="text" placeholder="desc"  name='desc'/>
            <input type="text" placeholder="slug" name='slug' />
            <input type="text" placeholder="userId" name='userId' />
            <button >Create</button>
        </form>
        <form action={DeletePost}>
          <input type="text"  placeholder="postId" name='id'/>
          <button>Delete</button>
        </form>
    </div>
  )
}
export default ServerActionTest