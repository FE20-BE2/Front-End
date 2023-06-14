export async function fetchData() {
  try {
    const response = await fetch('https://api-remedial-production-ecd6.up.railway.app/api/articles');
    const jsonData = await response.json();
    setData(jsonData.data);
    setLoading(false);
  } catch (error) {
    setError(error.message);
    setLoading(false);
  }
}