export async function fetchData() {
  try {
    const response = await fetch('https://api-remedial-production-ecd6.up.railway.app/api/articles');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}