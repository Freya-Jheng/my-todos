import { apiHelper } from "../utils/helpers";

export default {
    getTodos() {
        return apiHelper.get('/lists/todos')
    },
    createTodos ({name, description}) {
        return apiHelper.post('/lists/create', {
            name,
            description,
        })
    },
    deleteTodos ({todoId}) {
        return apiHelper.delete(`/lists/${todoId}`)
    },
    editTodos ({todoId}) {
        return apiHelper.put(`/lists/${todoId}/edit`)
    }
}