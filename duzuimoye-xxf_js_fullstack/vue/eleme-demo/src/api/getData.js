import axios from 'axios'
const http = axios.create({
    baseURL:'HTTPS://elm.cangdu.org',
    timeout:1000
})
// address 文本？不能进行距离计算
// lbs lat lng
export const searchplace=(cityid,keyword) =>new Promise((resolve,reject)=>{
    const url=`/v1/pois?type=search&city_id=${cityid}&keyword=${keyword}`
    http.get(url) .then(res =>resolve(res.data));
    
})
export const currentcity = (cityid) => new Promise((resolve,reject)=>{
    const url = `/v1/cities/${cityid}`;
    http.get(url) .then(res =>{resolve(res)
    })
})
//ajax xhr
// fetch 一兼容性不好 二 api比较原始
export const cityGuess=() =>new Promise((resolve,reject)=>{
    fetch('https://elm.cangdu.org/v1/cities?type=guess')
    .then (res => res.json())
    .then (data => resolve(data))
    .catch (err => reject(err))
})
export const hotcity=() =>new Promise((resolve,reject)=>{
    fetch('https://elm.cangdu.org/v1/cities?type=hot')
    .then (res => res.json())
    .then (data => resolve(data))
    .catch (err => reject(err))
})

// export  const  cityGuess =() => fetch('https://elm.cangdu.org/v1/cities?type=guess')
// export  const  hotcity =() => fetch('https://elm.cangdu.org/v1/cities?type=hot')

export const getcaptchas =() =>new Promise((resolve,reject) =>{
    fetch('https://elm.cangdu.org/v1/captchas',{
        method:'POST',
        body:{},
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        
    }
})
.then (res => res.json())
.then (data => resolve(data))
.catch (err => reject(err))
})

export const msiteFoodTypes = (geohash)=>{
    return new Promise((resolve,reject)=>{
        http.get('/v2/index_entry',{
            geohash,
            group_type:'1',
            'flags[]':'F'
        }).then(res => resolve(res.data))
      
    })
}
