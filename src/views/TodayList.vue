<template>
  <div class="todo-home__content-list__today">
    <h1 class="todo-home__content-list__today__title">Today</h1>
    <div class="todo-home__content-list__today__todos">
      <div class="todo-home__content-list__today__todos__created-todos">
        <!-- render todos here -->
        <div class="todo-home__content-list__today__todos__created-todos__created-box">
          <label class="todo-home__content-list__today__todos__created-todos__created-box__deleted">Circle</label>
          <div class="todo-home__content-list__today__todos__created-todos__created-box__content">
            <span class="todo-home__content-list__today__todos__created-todos__created-box__content__name">
                Task name
            </span>
            <span class="todo-home__content-list__today__todos__created-todos__created-box__content__description">
                Task description
            </span>
          </div>
        </div>
      </div>
      <div class="todo-home__content-list__today__todos__create-todos">
        <input v-model="checkbox" type="checkbox" name="add-todo-input" id="add-todo-input"
          class="todo-home__content-list__today__todos__create-todos__checkbox">
        <label
        v-show="checkbox" 
        class="todo-home__content-list__today__todos__create-todos__label" for="add-todo-input">
          <div class="plus-icon">+</div>
          <span class="plus-title">Add todo</span>
        </label>
        <div
        v-show="!checkbox" 
        class="todo-home__content-list__today__todos__create-todos__create-box">
          <div class="todo-home__content-list__today__todos__create-todos__create-box__inputs">
            <input type="text" class="name" placeholder="Task">
            <textarea wrap="hard" placeholder="Descriptioin" rows="7"></textarea>
          </div>
          <div class="todo-home__content-list__today__todos__create-todos__create-box__buttons">
            <button type="submit">Add todo</button>
            <label for="add-todo-input">
              <div>Cancel</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkbox = ref(true)
</script>

<style scoped lang="scss">
.todo-home__content-list__today {
  width: 70%;
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
      margin-bottom: 55px;
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
          gap: 10px;
          textarea {
            word-wrap : break-word;
          }
        }
        &__buttons {
          display: flex;
          flex-direction: row;
          gap: 30px;
          button, label {
            width: 100px;
            height: 35px;
            border-radius: 5px;
            text-align: center;
            line-height: 35px;
            opacity: 0.3;
            &:hover, &:focus {
              opacity: 1;
            }
          }
          button {
            background-color: var(--create-todo-focus);
            color: var(--sub-font-color);
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