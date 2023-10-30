import Config from './config';
import axios from 'axios';


// export default function useGetData() {
//     const [dataList, setDataList] = useState([]);

// }

// export async function getData(urlString) {
//     const configApi = 'https://api.themoviedb.org/3/configuration';

//     const response = await axios.get(urlString, {
//         headers: {
//             Authorization: `Bearer ${Config.TMDB_ACCESS_TOKEN}`,
//             Accept: 'application/json'
//         }
//     })
// }
export async function getMoviesData(movieSection: string) {
    const moviesUrl = `https://api.themoviedb.org/3/movie/${movieSection}?language=en-US&page=1`;

    try {
        const response = await axios.get(moviesUrl, {
            headers: {
                Authorization: `Bearer ${Config.TMDB_TOKEN}`,
                Accept: 'application/json'
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(`${movieSection} movies not available`)
    }
}

export default async function getConfig() {
    const configApi = 'https://api.themoviedb.org/3/configuration';

    try {
        const response = await axios.get(configApi, {
            headers: {
                Authorization: `Bearer ${Config.TMDB_TOKEN}`,
                Accept: 'application/json'
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.message)
    }

}
