import axios from 'axios'

class PostsService {
    constructor(){
        const instace = axios.create({
            baseURL: 'http://localhost:3000/api/'
        });
        this.client = instace;
    }

    async getAll(){
        const {data} = await this.client.get('posts');
        return data;
    }
}

export default new PostsService();