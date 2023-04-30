import { useState } from "react"
import axios from "axios"

function App() {
  const [name, setName] = useState("")
  const [profile, setProfile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('profile', profile);
    axios.post("http://localhost:8000/api/v1/courses", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  return (
    <>
     <form action="/profile" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="course name"/>
        <input type="file" onChange={(event) => setProfile(event.target.files[0])} /> <br /> <br />
        <button type="submit">Submit</button>
     </form>
    </>
  )
}

export default App
