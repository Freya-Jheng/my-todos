import { apiHelper } from "../utils/helpers";

export default {
    getTodos() {
        return apiHelper.get('/lists/todos')
    },
    createTodos ({name}) {
        return apiHelper.post('lists/create', {
            name,
        })
    }
}