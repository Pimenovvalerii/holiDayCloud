
const secret_key ='$2b$10$y852fwXQa1i/aSBh0BEY8ugRxHLshV9pVLd3IffDj8Rvqqfj.1irC';

function createBin(body){
    return fetch(`https://api.jsonbin.io/b`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'secret-key':   secret_key,
        },
        body : JSON.stringify( {users : []})
    })

}

function readBin(id){
    return fetch(`https://api.jsonbin.io/b/${id}`,{
        method: 'GET',
        headers: {
            'secret-key':secret_key,
        },
  
    })
    .then( response => response.json()) 
    // .then( res => console.log( res))
}

function updateBin(id,body){
    return fetch(`https://api.jsonbin.io/b/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
            'secret-key':secret_key,
            'versioning':'false',
        },
        body : JSON.stringify( body )
        // body : JSON.stringify( {homework:'-1'})
    }) 
}

function deleteBin(){
    return fetch(`https://api.jsonbin.io/b/5d978992de1e6569c2490df1/latest`,{
        method: 'DELETE',
        headers: {
            'secret-key':secret_key,
        },
        
    })
    .then( response => response.json()) 
    .then( res => console.log( res))

}
function save(obj,id){
    readBin(id)
    .then(res => {
        res.users.forEach((el,i) => {
            if(el.phone===obj.phone){
                res.users[i] = obj
            }
        });
        updateBin(id,res)
    })
}



export {updateBin , readBin ,save};