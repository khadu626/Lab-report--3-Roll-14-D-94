console.log("I am connected");

const userDiv = document.getElementById("posts-container");

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            userDiv.innerHTML += `
                <tr>
                    <td class="cell-center">${post.userId}</td>
                    <td class="cell-center">${post.id}</td>
                    <td class="cell-title">${post.title}</td>
                    <td class="cell-body">${post.body}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error("Error fetching data:", error));