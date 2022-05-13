<template>
  <div class="signIn">
    <div class="signIn__top">
      <h1 class="signIn__top__title">My Todo</h1>
    </div>
    <div class="signIn__form">
      <h1 class="signIn__form__title">Sign In</h1>
      <form class="signIn__form__content">
        <div class="signIn__form__content__account input">
          <span class="signIn__form__content__account__title"> 帳號 </span>
          <input type="text" class="signIn__form__content__account__input"
          placeholder="xxx@example.com" 
          />
        </div>
        <div class="signIn__form__content__password input">
          <span class="signIn__form__content__password__title"> 密碼 </span>
          <input type="text" class="signIn__form__content__password__input"
          placeholder="xxxxxxxx"
           />
        </div>
        <div class="signIn__form__content__buttons">
          <button class="signIn__form__content__buttons__siginIn">
            Sign In
          </button>
          <router-link
            class="signIn__form__content__buttons__siginUp"
            to="/my-todo/signup"
          >
            <button>Sign Up</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.signIn {
  width: 100%;
  &__top {
    width: 100%;
    height: 50px;
    background-color: var(--banner-bg-color);
    color: var(--sub-font-color);
    text-align: center;
    line-height: 50px;
    &__title {
      font-size: 25px;
      font-family: "Barlow";
      font-weight: 400;
    }
  }
  &__form {
    width: 100%;
    height: 20rem;
    margin-top: 20%;
    @include flex(column, space-around, center);
    &__title {
      font-size: 30px;
      font-weight: 500;
      border-bottom: 2px solid var(--main-font-color);
    }
    &__content {
      @include flex (column, center, center);
      gap: 20px;
      .input {
        @include flex (column, center, flex-start);
        gap: 5px;
      }
      input {
        width: 15rem;
        height: 25px;
        border: 1px solid var(--main-font-color);
        border-radius: 3px;
      }
      &__account {

      }
      &__password {

      }
      &__buttons {
        all: unset;
        @include flex (column, center, center);
        gap: 10px;
        button {
          width: 90px;
        }
      }
    }
  }
}
</style>