import { HandleGithubLogin } from "@/lib/action"
// import { auth } from "@/lib/auth"
import styles from "./login.module.css";
import LoginForm from "@/Components/loginForm/LoginForm";
import { signIn } from "next-auth/react";
const LoginPage =async () => {
  // const session=await auth()
  // console.log(session)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={HandleGithubLogin}>
        <button  className={styles.github}>Login with Github</button>
      </form>
      {/* <form action={HandleGoogleLogin}>
        <button  className={styles.github}>Login with Google</button>
      </form> */}
      <LoginForm/>
      </div>
    </div>
  )
}
export default LoginPage