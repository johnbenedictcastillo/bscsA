const PROJECT_URL = "https://gteucwlnigyjwjajmzwm.supabase.co"
const API_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZXVjd2xuaWd5andqYWptendtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3Nzg5MjEsImV4cCI6MTk3MTM1NDkyMX0.6zvlshKZCEQG5C9ztOsdsg_2n_K-20tsDXkFZadUcAY"

const connection = supabase.createClient(PROJECT_URL, API_KEY)

async function createUser(){

    const {data, error} = await connection.from("users").
    insert({
        user_name: "jbcastillo",
        first_name: "John Benedict",
        last_name: "Castillo",
        password : "password123"
    });

    if (data){
        console.log(data)
    }
    if (error){
        console.log(error)
    }
}

$(document).ready(function(){

    $("#test-btn").click(function(){
        createUser();
    })


});