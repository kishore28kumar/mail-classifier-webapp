import { signOut } from "next-auth/react"
import { PrimaryButton } from "./Button"

export const NavBar = () => {
  return (
    <div className="flex justify-between px-6 py-4  border-b-2 border-gray-200">
      <div className="flex items-center">
        <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6f0dc5c6-683d-4828-b787-548f944ad765/original=true,quality=90/Garou_One_Punch-Man_20240310000724_e000006_00.jpeg" className="rounded-full" height={48}  width={48} alt="img" />
        <div className="pl-4">Kishore Kumar</div>
      </div>
      <PrimaryButton onClick={()=>{signOut()}}>Logout</PrimaryButton> 
    </div>
  )
}
