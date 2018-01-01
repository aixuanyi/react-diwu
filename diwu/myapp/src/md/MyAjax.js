import axios from 'axios'

export default{
	getData(url,obj,callback){
		axios.get(url,obj).then((res) => {
			callback(res.data);
		}).catch((error)=>{
			console.log(error)
		})
	}
}
