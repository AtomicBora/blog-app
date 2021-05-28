import axios from 'axios'

class PostsService {
    constructor() {
        const instace = axios.create({
            baseURL: 'http://localhost:3000/api/'
        });
        this.client = instace;
    }

    async getAll() {
        const { data } = await this.client.get('posts');
        return data;
    }
    async getByID(id) {
        const { data } = await this.client.get(`posts/${id}`);
        return data;
    }
    async add(post) {
        await this.client.post('posts', post);
    }
    async edit(id, post) {
        await this.client.put(`posts/${id}`, post);
    }
    async delete(id) {
        await this.client.delete(`posts/${id}`);
    }
}

export default new PostsService();