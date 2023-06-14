// Store the API key and base URL
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const baseUrl = 'https://api.giphy.com/v1/gifs/random';

// Function to fetch a random gif based on user input
async function fetchRandomGif(category) {
  try {
    const url = `${baseUrl}?api_key=${apiKey}&tag=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    const gifUrl = data.data.images.original.url;
    return gifUrl;
  } catch (error) {
    console.error('Error fetching gif:', error);
    throw error;
  }
}

// Function to append a gif with delete button
function appendGif(gifUrl) {
  const container = document.getElementById('gifContainer');
  const gifElement = document.createElement('img');
  gifElement.src = gifUrl;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'DELETE';
  deleteButton.addEventListener('click', () => {
    container.removeChild(gifElement);
    container.removeChild(deleteButton);
  });

  container.appendChild(gifElement);
  container.appendChild(deleteButton);
}

// Handle form submission
const form = document.getElementById('searchForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchInput = document.getElementById('searchInput');
  const category = searchInput.value.trim();

  if (category) {
    try {
      const gifUrl = await fetchRandomGif(category);
      appendGif(gifUrl);
    } catch (error) {
      console.error('Error fetching gif:', error);
    }

    searchInput.value = '';
  }
});
