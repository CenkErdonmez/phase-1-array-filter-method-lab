// Code your solution here

// function findMatching(arr,){
//     const result= arr.filter("name")
//     console.log(result)
//     if(result === string){
//         return result
//     }else if(result == string){
//         return result
//     }else{
//         return
//     }
    
// }

// console.log(findMatching(drivers, name))





function findMatching(arr,adı){
    adı= adı.toLowerCase()
    let result= arr.filter(name =>name.toLowerCase()===`${adı}`)
    return result

}

function fuzzyMatch(arr,harf){
    let result= arr.filter(name => name[0]=== harf[0])
    return result
}

function matchName(arr,name2){
    let result =arr.filter(name => name.name === `${name2}`)
    return result
}