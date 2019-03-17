import axios from 'axios'

export default function ({ req, res }) {
  // If nuxt generate, pass this middleware
  if (!process.server) return

  return axios.get('http://localhost:3000/api/isopenning').then(res=> {
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
}
