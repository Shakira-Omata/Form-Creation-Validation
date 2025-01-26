// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Data container

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);

        // Check if response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display user names
        const userList = document.createElement('ul');

        // Loop through each user and add their name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
// Function to refresh user data
function refreshUserData() {
    fetchUserData();
}

// Add event listener to refresh button
document.getElementById('refresh-button').addEventListener('click', refreshUserData);