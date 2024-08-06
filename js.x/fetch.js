let users=[

]
/* alert ("GA"); */
function getUsers(){
    let rows="";
    for (user of users){
        rows = rows +  <tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.address.city}</td>
                        <td>${user.company.name}</td>
        </tr>
    }
    document.getElementById("abc").innerHTML=rows;
}