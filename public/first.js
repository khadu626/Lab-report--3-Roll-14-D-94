console.log("I am connected");

const userDiv = document.getElementById("posts-container");

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            userDiv.innerHTML += `
                <tr class="hover:bg-gray-50 transition text-sm text-gray-800">
                    <td class="border-2 border-gray-400 p-3 text-center font-semibold">${post.userId}</td>
                    <td class="border-2 border-gray-400 p-3 text-center font-semibold text-gray-600">${post.id}</td>
                    <td class="border-2 border-gray-400 p-3 font-bold text-purple-700 capitalize">${post.title}</td>
                    <td class="border-2 border-gray-400 p-3 text-gray-700 capitalize">${post.body}</td>
                </tr>
            `;
        });
    })
    .catch(error => console.error("Error fetching data:", error));