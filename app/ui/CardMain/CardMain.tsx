import Navbar from "@/app/ui/CardMain/Navbar/Navbar"
import Profile from "./Profile/Profile"

const CardMain = () => {
  const des = "I have an experience 1 year on position programmer."
  const prof = "/profile.jpg"
  const greed = "Hi, I am Wiwatsapon Lertworasirikul, I am Developer"
  return (
    <div className='bg-white w-full shadow-md h-auto flex flex-col'>
      <Navbar />
      <Profile description={des} image={prof} greeting={greed}/>
    </div>
  )
}

export default CardMain
