import axios from 'axios'
export default function ajax(url,data={},type="GET"){
    return new Promise(function(resolve,reject){
        let promise;
        if(type=="GET"){
            let dataStr = "";
            Object.keys(data).forEach(key=>{
                dataStr+=key+'='+data[key]+'&';  //Object.keys(data),表示data对象的key组成的数组，foreach循环
                //dataStr = key=value&key2=value2&
            })
            if(dataStr!==''){
                dataStr=dataStr.substring(0,dataStr.lastIndexOf('&')); //截取从第一位到最后一个&之前
                url=url+'?'+dataStr;  //最后 url='/shopList?key=value&key2=value2'
            }
            promise=axios.get(url)
        }else{
            promise=axios.post(url,data)
        }
        promise.then(function(res){
            resolve(res.data)
        }).catch(function(error){
            reject(error)
        })
    })

}