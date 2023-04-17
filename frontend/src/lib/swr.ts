import axios from 'axios'

export const fetcher = async (url: string) => {
  return await axios.get(url).then((data) => {
    return data.data
  })
}
