import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

export default {
  getData(url, obj, callback){
    axios(url,  obj).then((response) => {
//    console.log(response)
      callback(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
}
