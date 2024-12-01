import { signOut } from "next-auth/react"

export const NavBar = () => {
  return (
    <div className="flex justify-between px-6 py-4  border-b-2 border-gray-200">
      <div className="flex items-center">
        <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6f0dc5c6-683d-4828-b787-548f944ad765/original=true,quality=90/Garou_One_Punch-Man_20240310000724_e000006_00.jpeg" className="rounded-full" height={48}  width={48} alt="img" />
        <div className="pl-4">Kishore Kumar</div>
      </div>
      <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={()=>{signOut()}}>Logout</button> 
    </div>
  )
}
