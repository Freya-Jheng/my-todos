<template>
  <div class="todo-home__navbar">
    <div class="todo-home__navbar__left">
      <input type="checkbox" name="todo-home__navbar__left__input" id="todo-home__navbar__left__input"
        class="todo-home__navbar__left__input" />
      <label for="todo-home__navbar__left__input" class="todo-home__navbar__left__label">
        <font-awesome-icon class="todo-home__navbar__left__label__bars icons" :icon="['fa', 'bars']" />
      </label>
      <nav class="todo-home__navbar__left__nav">
        <ul class="todo-home__navbar__left__nav__items">
          <li v-for="item in items" :key="item.id" class="todo-home__navbar__left__nav__items__item">
            <router-link :to="item.path" class="todo-home__navbar__left__nav__items__item-link">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <router-link to="/signin" class="todo-home__navbar__left__nav__sign-out">
          <font-awesome-icon class="todo-home__navbar__left__nav__sign-out-icon"
            :icon="['fa', 'arrow-right-from-bracket']" />
        </router-link>
      </nav>
      <router-link to="/my-todo/today" class="todo-home__navbar__left__home">
        <font-awesome-icon class="home-icon icons" :icon="['fa', 'home']" />
      </router-link>
      <input type="checkbox" class="todo-home__navbar__left__search-input" name="todo-home__navbar__left__search-input"
        id="todo-home__navbar__left__search-input" />
      <label class="todo-home__navbar__left__search-label" for="todo-home__navbar__left__search-input">
        <font-awesome-icon class="todo-home__navbar__left__search-label-icon icons"
          :icon="['fa', 'magnifying-glass']" />
      </label>
      <input class="todo-home__navbar__left__search-bar" type="text" placeholder="搜尋..." />
    </div>
    <router-link to="/my-todo/today" class="todo-home__navbar__title">My Todo</router-link>
    <div class="todo-home__navbar__right">
      <div class="todo-home__navbar__right__plus" data-toggle="modal" data-target="#createTodoModal">
        <font-awesome-icon class="todo-home__navbar__right__plus__plus-icon icons" :icon="['fa', 'plus']" />
      </div>
      <!-- createTodoModal Start -->
      <div class="modal fade createTodoModal" id="createTodoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Todo</h5>
            </div>
            <div class="modal-body">
              <form class="modal-body__form">
                <input v-model="taskName" type="text" class="modal-body__form__task" placeholder="Task" />
                <textarea v-model="taskDescription" class="modal-body__form__description" placeholder="Description"
                  name="Description" id="" rows="3" cols="1"></textarea>
                <!-- <div class="modal-body__form__tags">
                  <button class="modal-body__form__tags__today">Today</button>
                  <button class="modal-body__form__tags__upcoming">
                    Upcoming
                  </button>
                </div>
                <div class="modal-body__form__categories">
                  <input
                    class="modal-body__form__categories__input"
                    type="checkbox"
                    name="modal-body__form__categories__input"
                    id="modal-body__form__categories__input"
                  />
                  <label
                    class="modal-body__form__categories__label"
                    for="modal-body__form__categories__input"
                  >
                    <font-awesome-icon
                      class="modal-body__form__categories__item"
                      :icon="['fa', 'tag']"
                    />
                  </label>
                  <ul class="modal-body__form__categories__priority">
                    <li class="modal-body__form__categories__priority__item">
                      Priority 1
                    </li>
                    <li class="modal-body__form__categories__priority__item">
                      Priority 2
                    </li>
                    <li class="modal-body__form__categories__priority__item">
                      Priority 3
                    </li>
                  </ul>
                </div> -->
              </form>
            </div>
            <div class="modal-footer">
              <button @click.prevent="createTodos" data-dismiss="modal" type="button" class="btn save">Save</button>
              <button type="button" class="btn cancel" data-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- createTodoModal End -->
      <input type="checkbox" name="todo-home__navbar__right__input" id="todo-home__navbar__right__input"
        class="todo-home__navbar__right__input" v-model="darkModeChecked" />
      <label @click="darkModeToggle" for="todo-home__navbar__right__input" class="todo-home__navbar__right__label">
        <font-awesome-icon v-show="darkModeChecked" class="todo-home__navbar__right__label__sun icons"
          :icon="['fa', 'sun']" />
        <font-awesome-icon v-show="!darkModeChecked" class="todo-home__navbar__right__label__moon icons"
          :icon="['fa', 'moon']" />
      </label>
      <img @click.prevent="handleBeforeSubmit" data-toggle="modal" data-target="#profileModal"
        class="todo-home__navbar__right__profile"
        src="https://user-images.githubusercontent.com/83488932/177002465-f468592f-2671-49ba-8090-bf8b41a0edbd.png"
        alt="avatar" />
      <!-- profile Modal Start -->
      <div class="modal fade profileModal" id="profileModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
            </div>
            <form @submit.prevent.stop="handleSubmit()">
              <div class="modal-body">
                <div class="modal-body__form__content">
                  <div class="modal-body__form__content__name">
                    <span class="modal-body__form__content__name__title">
                      姓名
                    </span>
                    <input v-model="user.name" type="text" class="modal-body__form__content__name__input"
                      placeholder="Enter your name" />
                  </div>
                  <div class="modal-body__form__content__account">
                    <span class="modal-body__form__content__account__title">
                      帳號
                    </span>
                    <input v-model="user.account" type="text" class="modal-body__form__content__account__input"
                      placeholder="請輸入至少6位數" />
                  </div>
                  <div class="modal-body__form__content__email">
                    <span class="modal-body__form__content__email__title">
                      信箱
                    </span>
                    <input v-model="user.email" type="email" class="modal-body__form__content__email__input"
                      placeholder="xxx@example.com" required />
                  </div>
                  <div class="modal-body__form__content__password">
                    <span class="modal-body__form__content__password__title">
                      密碼
                    </span>
                    <input v-model="user.password" type="text" class="modal-body__form__content__password__input"
                      placeholder="請輸入至少8位數" />
                  </div>
                  <div class="modal-body__form__content__checked-password">
                    <span class="modal-body__form__content__checked-password__title">
                      確認密碼
                    </span>
                    <input v-model="user.checkPassword" type="text"
                      class="modal-body__form__content__checked-password__input" placeholder="請重新輸入密碼" />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button :disabled="!user.id||!user.name||!user.email||!user.password||!user.checkPassword" type="submit"
                  class="btn save" :data-toggle="toggleStatus" data-target="#profileModal">Save</button>
                <button type="button" class="btn cancel" data-dismiss="modal">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- profile Modal End -->
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import listAPI from '@/apis/list.js';
import userAPI from '../apis/user';
import { useMyTodos } from "../stores/MyTodosStore";

const taskName = ref('');
const taskDescription = ref('');
let toggleStatus = 'modal';
// const user = ref({
//   id: -1,
//   name: '',
//   account: '',
//   email: '',
//   password: '',
//   checkPassword: '',
// });
const myTodos = useMyTodos();
const user = ref({})
let darkModeChecked = ref(true);
let id = 0;
const items = reactive([
  {
    id: id++,
    title: "Today",
    path: "/my-todo/today",
  },
  {
    id: id++,
    title: "Upcoming",
    path: "/my-todo/upcoming",
  },
]);
myTodos.getTodos()
myTodos.getUser()

// functions
function darkModeToggle() {
  if (darkModeChecked.value) {
    document.documentElement.setAttribute("data-theme", "darkMode");
  } else {
    document.documentElement.removeAttribute("data-theme", "darkMode");
  }
}
function handleBeforeSubmit () {
  user.value = {...myTodos.currentUser}
  user.value.password=''
}
async function createTodos() {
  try {
    if (taskName.value.trim().length === 0) {
      return alert('Please type in valid words')
    }
    const response = await listAPI.createTodos({
      name: taskName.value,
      description: taskDescription.value
    })

    if (response.status !== 200) {
      throw new Error(response.statusText)
    }
    myTodos.todos.push(response.data.list)
    taskName.value = ''
    taskDescription.value = ''
  } catch (error) {
    console.log(error)
    alert('Cannot create todos from api!')
  }
}
async function handleSubmit () {
  try {
    if (user.value.password !== user.value.checkPassword) {
      alert('Password and CheckedPassword are not the same !')
      return
    }

    if (user.value.password.length < 8) {
      alert('Password and CheckedPassword need to be at least 8 words !')
      return
    }

    if (user.value.account.length < 6) {
      alert('Account needs to be at least 6 words!')
      return
    }
    const response = await userAPI.editCurrentUser({
      id: user.value.id,
      name: user.value.name,
      account: user.value.account,
      email: user.value.email,
      password: user.value.password,
      checkPassword: user.value.checkPassword,
    })

    if (response.statusText !== 'OK') {
      throw new Error(response.statusText)
    }
    user.value = {}
  } catch (err) {
    console.log(err)
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.todo-home__navbar {
  width: 100%;
  min-width: 376px;
  height: 70px;
  background-color: var(--banner-bg-color);
  padding: 0 10px;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 100%;
  position: relative;
  line-height: 70px;

  .icons {
    font-size: 20px;
    color: var(--sub-font-color);
    cursor: pointer;
  }

  &__title {
    grid-column: 2/3;
    font-size: 30px;
    font-family: "Barlow";
    font-weight: 400;
    color: var(--sub-font-color);
    text-align: center;

    @include pc {
      font-size: 35px;
    }
  }

  &__left {
    grid-column: 1/2;
    @include flex(row, space-around, center);

    &__input {
      display: none;

      &:checked~nav {
        transform: scale(1, 1);
        transform-origin: left;
        transition: transform 0.18s;
      }
    }

    &__nav {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 9;
      width: 10%;
      min-width: 250px;
      height: 100vh;
      background-color: var(--nav-bg-color);
      transform: scale(0, 1);
      @include flex(column, space-between, unset);

      &__items {
        height: 100%;
        padding: 20px 0;
        @include flex(column, flex-start, center);

        &__item {
          width: 100%;
          height: 30px;
          line-height: 35px;
          font-size: 20px;
          cursor: pointer;

          @include pad {
            font-size: 25px;
            height: 45px;
            line-height: 45px;
          }

          @include pc {
            font-size: 20px;
            height: 60px;
            line-height: 60px;
          }

          &:hover {
            background-color: var(--nav-hover-color);
            border-bottom: 1px solid var(--main-font-color);
          }

          a {
            padding-left: 25%;
          }
        }
      }

      &__sign-out {
        font-size: 30px;
        padding-left: 25%;
      }
    }

    &__home {
      display: none;

      @include pc {
        display: block;
      }
    }

    &__search-input {
      display: none;

      &:checked~.todo-home__navbar__left__search-bar {
        transform: scale(1, 1);
        transform-origin: left;
        transition: transform 0.1s;
      }
    }

    &__search-bar {
      position: absolute;
      top: 100%;
      left: 10%;

      @include pc {
        top: 25%;
        left: 23%;
      }

      width: 90%;
      max-width: 250px;
      height: 35px;
      background-color: #e4e0e0;
      border-radius: 5px;
      transform: scale(0, 1);
      padding-left: 10px;

      &:focus {
        border: 1px solid #bbb8b8;
      }
    }
  }

  &__right {
    grid-column: 3/4;
    @include flex(row, space-around, center);

    &__input {
      display: none;
    }

    &__profile {
      width: 50px;
      height: 50px;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;
    }
  }

  // Modals Start

  // createTodoModal
  .createTodoModal {
    .modal-dialog {
      .modal-content {
        font-size: 18px;

        .modal-header {
          .modal-title {
            font-size: 30px;
          }
        }

        .modal-body {
          &__form {
            width: 100%;

            &__task {
              width: 95%;
              height: 50px;
              background-color: var(--input-bg-color);
              padding-left: 10px;
            }

            &__description {
              width: 97.5%;
              padding-left: 10px;
              background-color: var(--input-bg-color);
            }
          }
        }
      }
    }
  }

  // profileModal
  .profileModal {
    .modal-dialog {
      .modal-content {
        font-size: 18px;

        .modal-header {
          .modal-title {
            font-size: 30px;
          }
        }

        .modal-body {
          &__form__content {

            &__name,
            &__account,
            &__email,
            &__password,
            &__checked-password {
              @include flex(column, center, flex-start);
              gap: 0px;
            }

            input {
              width: 95%;
              height: 35px;
              background-color: var(--input-bg-color);
              padding-left: 10px;
            }

            span {
              height: 35px;
              line-height: 35px;
            }
          }
        }
      }
    }
  }

  // modalFooter
  .modal-footer {
    color: var(--sub-font-color);

    .cancel,
    .save {
      all: unset;
      width: 90px;
      height: 35px;
      margin-left: 10px;
      line-height: 35px;
      cursor: pointer;
      text-align: center;
    }

    .cancel {
      background-color: var(--form-border);
      opacity: 0.5;

      &:focus {
        opacity: 1;
      }
    }

    .save {
      background-color: var(--banner-bg-color);
      opacity: 0.5;

      &:focus {
        opacity: 1;
      }
    }
  }

  // Modals End
}
</style>