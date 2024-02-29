import Navbar from "@/app/ui/Home/Navbar/Navbar"
import Profile from "@/app/ui/Home/Profile/Profile"
import CertPost from "@/app/ui/Home/CertPost/CertPost"
import WorkPost from "@/app/ui/Home/WorkPost/WorkPost"

const Home = () => {
  const des = "I have an experience 1 year on position backend developer. Thanks for interesting."
  const prof = "/profile.jpg"
  const greed = "Hi, I am Wiwatsapon, I am Developer"
  return (
    <div className='w-full shadow-md h-auto flex flex-col'>
      <Navbar />
      <Profile description={des} image={prof} greeting={greed}/>
      <CertPost  />
      <WorkPost  />
    </div>
  )
}

export default Home
