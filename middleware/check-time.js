import axios from 'axios'

export default function ({ req, res, redirect }) {
  // If nuxt generate, pass this middleware
  if (!process.server) return

  return axios.get(process.env.base_url + '/api/isopenning').then(res=> {
    console.log(res)
    return redirect('/')
  })
  .catch((err)=>{
    console.log(err)
  })
}
