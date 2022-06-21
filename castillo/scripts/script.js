const PROJECT_URL = "https://gteucwlnigyjwjajmzwm.supabase.co"
const API_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZXVjd2xuaWd5andqYWptendtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3Nzg5MjEsImV4cCI6MTk3MTM1NDkyMX0.6zvlshKZCEQG5C9ztOsdsg_2n_K-20tsDXkFZadUcAY"

const connection = supabase.createClient(PROJECT_URL, API_KEY)

async function createUser(userName, fName, lName, password){

    const {data, error} = await connection.from("users").
    insert({
        user_name: userName,
        first_name: fName,
        last_name: lName,
        password : password
    });

    if (data){
        console.log(data)
        getUsers()
    }
    if (error){
        console.log(error)
    }
}
async function getUsers(){
    let tbody = $("#tbody");
    let tr = "";

    const res = await connection.from("users").select("*");
    if (res){
        for (var i in res.data){
            tr +=`<tr>
            <td>${resr.data[i].id}</td>
            <td>${resr.data[i].user_name}</td>
            <td>${resr.data[i].first_name}</td>
            <td>${resr.data[i].last_name}</td>
            <td>${resr.data[i].password}</td>
            </tr>`
        }
        tbody.html(tr)
    }
    


}

$(document).ready(function(){

    $("#test-btn").click(function(){
        let userName = $("#userName").val()
        let fName = $("#fName").val()
        let lName = $("#lName").val()
        let password= $("#password").val()
        createUser(userName,fName,lName,password);
    })
    $("#getusers-btn").click(function(){
        getUsers();
    })

});