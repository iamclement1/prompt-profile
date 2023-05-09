'use client'
import { useState, useEffect } from "react"
import { ProfileCard } from "."


const ProfileCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((profile) => (
        <ProfileCard 
        key={profile._id}
        profile={profile}
        handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}
const Feeds = () => {
  const [searchText, setSearchText] = useState("");
  const [profile, setProfile] = useState([]);
  const handleSearchChange = (event) => {

  }

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/profile');
      const data = await response.json();

      setProfile(data);
    }

    fetchProfile();
  }, [])
  return (
    <section className="feed">
      <form action=""
      className="w-full relative flex-center ">
        <input type="text" 
        placeholder="Search for profile"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer" />
      </form>

      <ProfileCardList
      data={profile}
      handleTagClick={() => {}} />
    </section>
  )
}

export default Feeds