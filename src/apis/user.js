import { apiHelper } from "../utils/helpers";

export default {
    getCurrentUser ({userId}) {
        return apiHelper.get(`/users/${userId}`)
    },
    editCurrentUser({ userId, name, account, email, password, checkPassword }) {
        return apiHelper.put(`/users/${userId}/edit`, { name, account, email, password, checkPassword })
    }
}