import axios from "axios";

export const AXIOS=axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmFkZGJiMGJmM2VjYWFiNGQ0YmIzMWZhZjg3NDQ1OSIsInN1YiI6IjVmZmViOThmMGZmMTVhMDAzZTVhZjFiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GzyT5u93meef03lx10MlH6y9VNSx2ZGKoRmEXQ3ZFAg'
    }
})