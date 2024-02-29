import Navbar from "@/app/ui/CardMain/Navbar/Navbar"
import Profile from "./Profile/Profile"
import CertPost from "./CertPost/CertPost"

const CardMain = () => {
  const des = "I have an experience 1 year on position backend developer. Thanks for interesting."
  const prof = "/profile.jpg"
  const greed = "Hi, I am Wiwatsapon, I am Developer"
  return (
    <div className='w-full shadow-md h-auto flex flex-col'>
      <Navbar />
      <Profile description={des} image={prof} greeting={greed}/>
      <CertPost  />
    </div>
  )
}

export default CardMain
