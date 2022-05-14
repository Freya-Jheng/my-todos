<template>
  <div class="todo-home__navbar">
    <div class="todo-home__navbar__left">
      <input
        type="checkbox"
        name="todo-home__navbar__left__input"
        id="todo-home__navbar__left__input"
        class="todo-home__navbar__left__input"
      />
      <label
        for="todo-home__navbar__left__input"
        class="todo-home__navbar__left__label"
      >
        <font-awesome-icon
          class="todo-home__navbar__left__label__bars icons"
          :icon="['fa', 'bars']"
        />
      </label>
      <nav class="todo-home__navbar__left__nav">
        <ul class="todo-home__navbar__left__nav__items">
          <li
          v-for="item in items"
          :key="item.id" 
          class="todo-home__navbar__left__nav__items__item">
            <router-link
            :to="item.path" class="todo-home__navbar__left__nav__items__item-link">
              {{item.title}}
            </router-link>
          </li>
        </ul>
        <!-- <select name="" id="">
          <option value="Categories">Categories</option>
          <option value="Life">Life</option>
          <option value="Job">Job</option>
          <option value="Travel">Travel</option>
          <option value="Study">Study</option>
        </select> -->
      </nav>
      <font-awesome-icon
        class="todo-home__navbar__left__home icons"
        :icon="['fa', 'home']"
      />
      <input type="checkbox"
      class="todo-home__navbar__left__search-input" 
      name="todo-home__navbar__left__search-input" id="todo-home__navbar__left__search-input">
      <label class="todo-home__navbar__left__search-label"
      for="todo-home__navbar__left__search-input"
      >
        <font-awesome-icon class="todo-home__navbar__left__search-label-icon icons" :icon="['fa', 'magnifying-glass']" />
      </label>
      <input class="todo-home__navbar__left__search-bar" type="text"
      placeholder="搜尋..."
      >
    </div>
    <router-link
    to="/my-todo/today" 
    class="todo-home__navbar__title">My Todo</router-link>
    <div class="todo-home__navbar__right">
      <font-awesome-icon
        class="todo-home__navbar__right__plus icons"
        :icon="['fa', 'plus']"
      />
      <input
        type="checkbox"
        name="todo-home__navbar__right__input"
        id="todo-home__navbar__right__input"
        class="todo-home__navbar__right__input"
      />
      <label
        for="todo-home__navbar__right__input"
        class="todo-home__navbar__right__label"
      >
        <font-awesome-icon
          class="todo-home__navbar__right__label__sun icons"
          :icon="['fa', 'sun']"
        />
        <font-awesome-icon
          class="todo-home__navbar__right__label__moon icons"
          :icon="['fa', 'moon']"
        />
      </label>
      <div class="todo-home__navbar__right__profile"></div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

let id = 0
const items = reactive([
  {
    id: id++,
    title: 'Today',
    path: '/my-todo/today'
  },
  {
    id: id++,
    title: 'Upcoming',
    path: '/my-todo/upcoming'
  }
])
</script>


<style scoped lang="scss">
@import "@/styles/mixins.scss";

.todo-home__navbar {
  width: 100%;
  height: 70px;
  background-color: var(--banner-bg-color);
  padding: 0 10px;
  @include flex(row, space-between, center);
  position: relative;
  .icons {
    font-size: 20px;
    color: var(--sub-font-color);
  }
  &__title {
    font-size: 25px;
    font-family: "Barlow";
    font-weight: 400;
    color: var(--sub-font-color);
  }
  &__left {
    @include flex(row, space-between, center);
    gap: 30px;
    &__input {
      display: none;
      &:checked ~ nav {
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
      height: 100%;
      width: 35%;
      min-height: 667px;
      background-color: var(--nav-bg-color);
      transform: scale(0, 1);
      &__items {
        // outline: 1px solid rebeccapurple;
        height: 100%;
        padding: 20px 0;
        @include flex (column, flex-start, center);
        &__item {
          width: 100%;
          height: 35px;
          line-height: 35px;
          &:hover {
            background-color: var(--nav-hover-color);
            border-bottom: 1px solid var(--main-font-color);
          }
          a {
            padding-left: 10px;
          }
        }
      }
    }
    &__home {
      display: none;
    }
    &__search-input {
      display: none;
      &:checked ~ .todo-home__navbar__left__search-bar {
        transform: scale(1, 1);
        transform-origin: left;
        transition: transform 0.1s;
      }
    }
    &__search-bar {
      position: absolute;
      top: 100%;
      left: 10%;
      width: 250px;
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
    &__input {

    }
    &__label {
      &__sun {
        display: none;
      }
      &__moon {

      }
    }
  }
}
</style>