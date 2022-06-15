<template>
  <div class="todo-home__content-list__today">
    <h1 class="todo-home__content-list__today__title">Today</h1>
    <div class="todo-home__content-list__today__todos">
      <div class="todo-home__content-list__today__todos__created-todos">
        <!-- render todos here -->
        <div v-for="item in todayLists" :key="item.id"
          class="todo-home__content-list__today__todos__created-todos__created-box">
          <input v-model="editingStatus" type="checkbox" name="editing" id="editing">
          <div :key="item.id" class="todo-home__content-list__today__todos__created-todos__created-box__edited">
            <div @click.prevent.stop="deletedTodos(item.id)"
              class="todo-home__content-list__today__todos__created-todos__created-box__edited__deleted"></div>
            <div class="todo-home__content-list__today__todos__created-todos__created-box__edited__content">
              <span class="todo-home__content-list__today__todos__created-todos__created-box__edited__content__name">
                {{ item.name }}
              </span>
              <span
                class="todo-home__content-list__today__todos__created-todos__created-box__edited__content__description">
                {{ item.description }}
              </span>
            </div>
            <label for="editing">
              <font-awesome-icon @click="editCurrentTodo(item)"
                class="todo-home__content-list__today__todos__created-todos__created-box__edited__edit"
                :icon="['fa', 'pen-to-square']" />
            </label>
          </div>
          <form v-if="item.id === currentTodo.id"
            :key="currentTodo.id" v-show="editingStatus"
            class="todo-home__content-list__today__todos__create-todos__create-box">
            <div class="todo-home__content-list__today__todos__create-todos__create-box__inputs">
              <input v-model="currentTodo.name" type="text" class="name" placeholder="Task">
              <textarea v-model="currentTodo.description" wrap="hard" placeholder="Descriptioin" rows="7"></textarea>
            </div>
            <div class="todo-home__content-list__today__todos__create-todos__create-box__buttons">
              <button class="add-todos" type="submit">Save</button>
              <label for="editing">
                <div>Cancel</div>
              </label>
            </div>
          </form>
        </div>
        <!-- render todos here -->
      </div>
      <div class="todo-home__content-list__today__todos__create-todos">
        <input v-model="checkbox" type="checkbox" name="add-todo-input" id="add-todo-input"
          class="todo-home__content-list__today__todos__create-todos__checkbox">
        <label v-show="checkbox" class="todo-home__content-list__today__todos__create-todos__label"
          for="add-todo-input">
          <div class="plus-icon">+</div>
          <button class="plus-title" type="button">Add todo</button>
        </label>
        <form @submit.prevent.stop="createTodos" v-show="!checkbox"
          class="todo-home__content-list__today__todos__create-todos__create-box">
          <div class="todo-home__content-list__today__todos__create-todos__create-box__inputs">
            <input v-model="taskName" type="text" class="name" placeholder="Task">
            <textarea v-model="taskDescription" wrap="hard" placeholder="Descriptioin" rows="7"></textarea>
          </div>
          <div class="todo-home__content-list__today__todos__create-todos__create-box__buttons">
            <button class="add-todos" type="submit" :disabled="!taskName">Add todo</button>
            <label for="add-todo-input">
              <div>Cancel</div>
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import listAPI from '@/apis/list.js'

const checkbox = ref(true)
const todayLists = ref([])
const taskName = ref('')
const taskDescription = ref('')
const currentTodo = ref({})
const editingStatus = ref(false)

async function getTodos() {
  try {
    const response = await listAPI.getTodos()
    if (response.statusText !== 'OK') {
      throw new Error(response.statusText)
    }

    todayLists.value = response.data.lists
  } catch (error) {
    console.log(error)
    alert('Cannot get todos from API!')
  }
}
async function createTodos() {
  try {
    if (taskName.value.trim().length === 0) {
      return
    }
    const response = await listAPI.createTodos({
      name: taskName.value,
      description: taskDescription.value
    })
    todayLists.value.push(response.data.list)
    taskName.value = ''
    taskDescription.value = ''
  } catch (error) {
    console.log(error)
    alert('Cannot create todos from api!')
  }
}
async function deletedTodos(todoId) {
  try {
    const response = await listAPI.deleteTodos({ todoId })
    if (response.status !== 200) {
      throw new Error(response.statusText)
    }
    todayLists.value = todayLists.value.filter(list => list.id !== todoId)

  } catch (error) {
    console.log(error)
    alert('Cannot delete todos from api!!')
  }
}
const editCurrentTodo = (todo) => {
  currentTodo.value = {
    ...todo
  }
}

getTodos()

</script>

<style scoped lang="scss">
.todo-home__content-list__today {
  width: 65%;
  min-width: 375px;
  height: 100vh;
  margin: 60px auto 0;
  padding: 15px;
  font-size: 18px;

  &__title {
    font-size: 25px;
    font-weight: 500;
  }

  &__todos {
    margin-top: 60px;

    &__created-todos {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      &__created-box {
        width: 100%;
        display: flex;
        flex-direction: column;

        &__edited {
          width: 100%;
          height: 65px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          padding-left: 10px;
          gap: 20px;
          border-bottom: 1px solid var(--input-bg-color);
          color: var(--create-todo-font);

          &:hover {
            color: var(--main-font-color);
            border-bottom: 1px solid var(--main-font-color);
          }

          &__deleted {
            width: 30px;
            height: 30px;
            border: 2px solid var(--input-bg-color);
            border-radius: 50%;
            position: relative;
            cursor: pointer;

            &:hover {
              &::after {
                content: '\2713';
                position: absolute;
                top: 50%;
                right: 50%;
                transform: translate(50%, -50%);
                font-size: 23px;
              }

              border: 2px solid var(--create-todo-font);
            }
          }

          &__content {
            display: flex;
            flex-direction: column;
            gap: 13px;
            width: 90%;

            &__description {
              font-size: 15px;
            }
          }

          &__edit {
            cursor: pointer;
          }
        }
      }
    }

    &__create-todos {
      &__label {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        gap: 20px;
        color: var(--create-todo-font);
        cursor: pointer;

        &:hover {
          :nth-child(1) {
            background-color: var(--create-todo-focus);
            color: var(--sub-font-color);
          }

          :nth-child(2) {
            color: var(--create-todo-focus);
          }
        }

        .plus-icon {
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
          font-size: 25px;
          color: var(--create-todo-focus);
        }
      }

      &__create-box {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__inputs {
          border: 2px solid var(--input-bg-color);
          border-radius: 7px;
          display: flex;
          flex-direction: column;
          padding: 15px;
          gap: 10px;

          input,
          textarea {
            cursor: text;

            &::placeholder {
              color: var(--create-todo-font);
            }
          }

          textarea {
            word-wrap: break-word;
          }
        }

        &__buttons {
          display: flex;
          flex-direction: row;
          gap: 30px;

          button,
          label {
            width: 100px;
            height: 35px;
            border-radius: 5px;
            text-align: center;
            line-height: 35px;
            opacity: 0.3;

            &:hover,
            &:focus {
              opacity: 1;
            }
          }

          button {
            background-color: var(--create-todo-focus);
            color: var(--sub-font-color);

            &:disabled {
              opacity: 0.3;
            }
          }

          label {
            background-color: var(--input-bg-color);
          }
        }
      }
    }
  }
}
</style>