import axios from 'axios';

const API_URL = 'https://api-remedial-production-ecd6.up.railway.app/api/articles';

const ArticleService = {
  getArticles: () => {
    return axios.get(API_URL).then((response) => response.data);
  },
};

export default ArticleService;