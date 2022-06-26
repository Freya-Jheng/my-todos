import { defineStore } from 'pinia'
import listAPI from '../apis/list'
export const useMyTodos = defineStore("MyTodos",  {
    // state must be a function, then return the state you make
    state: () => {
        return {
           todos: [],
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

            } catch (err) {
                console.log(error)
                alert('Cannot get todos from API!')
            }
        },
    }
    // getter
})
