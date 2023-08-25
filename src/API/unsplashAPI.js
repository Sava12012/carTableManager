
const UNSPLASH_ACCESS_KEY = 'rjVu-uqAzRMktjx0eRO5bKXNB51psi-uVe1wcG4CFWk';

export async function searchUnsplash(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query} car&client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();
    return data.results;
}
