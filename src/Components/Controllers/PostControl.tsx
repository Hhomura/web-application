import { Authcontext } from "@/Context/AuthContext";

let control = {
    createDataApi: (title: string, body: string, context: any) => {
        let newId = context.dataApi[context.dataApi.length - 1].id + 1
        let newUserId = context.dataApi[context.dataApi.length - 1].userId + 1

        let post = {
            userId: newUserId,
            id: newId,
            title: title,
            body: body,
            comments: []
        }
        context.setDataApi([...context.dataApi, post]);
    },
    updateDataApi: (id: number, title: string, body: string, context: any) => {
        const updateData = context.dataApi.map((item: any) => {
            if (item.id === id) {
                return {
                    ...item,
                    title: title,
                    body: body,
                };
            }
            return item
        })
        context.setDataApi(updateData)
    },
    deleteDataApi: (id: number, context: any) => {
        const updatedData = context.dataApi.filter((item: any) => item.id !== id);
        context.setDataApi(updatedData)
    },

    createComent: (id: number, comment: string, context: any) => {
        const updatedData = context.dataApi.map((item: any) => {
            if (item.id === id) {
                return {
                    ...item,
                    comments: [...(item.comments || []), comment],
                };
            }
            return item;
        });

        context.setDataApi(updatedData);
        console.log('Novo dataApi:', updatedData);
    },

    deleteComment: (postId: number, commentIndex: number, context: any) => {
        const updatedData = context.dataApi.map((item: any) => {
            if (item.id === postId) {
                const updatedComments = item.comments.filter((_: string, index: number) => index !== commentIndex);
                return { ...item, comments: updatedComments };
            }
            return item;
        });

        context.setDataApi(updatedData);
    },

    updateComment: (postId: number, commentIndex: number, newComment: string, context: any) => {
        const updatedData = context.dataApi.map((item: any) => {
            if (item.id === postId) {
                const updatedComments = item.comments.map((comment: string, index: number) =>
                    index === commentIndex ? newComment : comment
                );
                return { ...item, comments: updatedComments };
            }
            return item;
        });

        context.setDataApi(updatedData);
    },
}

export default control