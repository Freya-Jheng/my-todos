import { defineStore } from 'pinia'
import listAPI from '../apis/list'
import userAPI from '../apis/user'
export const useMyTodos = defineStore("MyTodos",  {
    // state must be a function, then return the state you make
    state: () => {
        return {
           todos: [],
           userId: -1,
           currentUser: {},
        }
    },
    // actions
    actions: {
        async getTodos () {
            try {
                const response = await listAPI.getTodos()
                if (response.statusText !== 'OK') {
                    throw new Error(response.statusText)
                }
                this.todos = response.data.lists
                this.userId = this.todos[0].userId
            } catch (err) {
                console.log(error)
                alert('Cannot get todos from API!')
            }
        },
        async getUser() {
            try {
                const response = await userAPI.getCurrentUser({
                    userId: this.userId
                })
                if (response.statusText !== 'OK') {
                    throw new Error(response.statusText)
                }
                this.currentUser = response.data.user
            } catch (err) {
                console.log(err)
                alert('Cannot get user from API !!')
            }
        }
    }
    // getter
})
