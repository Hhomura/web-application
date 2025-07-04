import Api from "../Api";

const service = {
    getAllPost: (async () => {
        return Api.get('')
    }),

    createPost: async (post: any) => {
        return Api.post('/', post)
    },

    updatePost: async (id: number, updatedPost: any) => {
        return Api.put(`/${id}`, updatedPost)
    },

    deletePost: async (id: number) => {
        return Api.delete(`/${id}`)
    },
}

export default service;