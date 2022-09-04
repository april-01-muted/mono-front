
const url = "http://localhost:3000/users";
interface MyObj {
    id:string;
    name:string;
  }

  export async function getByIdRest(paraId:string){

    const re = await fetch("http://localhost:8080/getUsersById" + "?id=" + paraId,
    {
        mode: 'cors'
      });
    return re.json();

}

export async function getById(paraId:string){

    const re = await fetch("http://localhost:8080/getUsersById" + "?id=" + paraId);
    return re.json();

}

export async function getByName(paraName:string){

    const re = await fetch("http://localhost:8080/getUsersByName" + "?name=" + paraName);
    return re.json();

}

export async function insert(obj:MyObj){

    fetch("http://localhost:8080/insertUsers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
}

export async function update(obj:MyObj){

    const updUrl = "http://localhost:8080/updateUsers" + "?id=" + obj.id;
    fetch(updUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
}

export async function del(obj:MyObj){

    const delUrl = "http://localhost:8080/deleteUsers" + "?id=" + obj.id;
    fetch(delUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
}

export async function ins(obj:MyObj){

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });
}