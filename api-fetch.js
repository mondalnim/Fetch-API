const getUsers = (page = 1) => {
    const url = `https://reqres.in/api/users?delay=3${page}`;

    fetch(url)
        .then(response => {
            console.log("Status: " + response.status);
            return response.json();
        })
        .then(users => {
            console.log("Total de elementos: " + users.total);
            localStorage.setItem("users", JSON.stringify(users));
            let tableBody = "";
            for (let user of users.data)
                console.log(`${user.id} ${user.email} ${user.first_name} ${user.last_name} ${user.avatar}`);
                console.log(users.data)
                for (let i = 0; i < users.data.length; i++) {
                    tableBody += '<tr><td>'+ users.data[i].id +
                    '</td><td>'+ users.data[i].email +'</td><td>'+ users.data[i].first_name +
                    '</td><td>'+ users.data[i].last_name +'</td><td><img class="rounded-circle img-fluid" src="'
                    + users.data[i].avatar +'"></td></tr>'
                    document.getElementById('body-table').innerHTML = tableBody
                }
        })
        .catch(error => console.log(error));
}