"use client"
import { AddUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
const adminUserForm = () => {
  const [state, formAction] = useFormState(AddUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
    <h1>Add New User</h1>
    <input type="text" name="username" placeholder="username" />
    <input type="text" name="email" placeholder="email" />
    <input type="password" name="password" placeholder="password" />
    <input type="text" name="img" placeholder="img(upload url's only)" />
    <select name="isAdmin">
      <option value="false">Is Admin?</option>
      <option value="false">No</option>
      <option value="true">Yes</option>
    </select>
    <button>Add</button>
    {state?.error}
  </form>
  )
}
export default adminUserForm