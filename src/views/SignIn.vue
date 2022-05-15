<template>
  <div class="signIn">
    <div class="signIn__top">
      <h1 class="signIn__top__title">My Todo</h1>
    </div>
    <div class="signIn__form">
      <h1 class="signIn__form__title">Sign In</h1>
      <form class="signIn__form__content">
        <div class="signIn__form__content__account">
          <span class="signIn__form__content__account__title"> 帳號 </span>
          <input
            type="text"
            class="signIn__form__content__account__input"
            placeholder="xxx@example.com"
          />
        </div>
        <div class="signIn__form__content__password">
          <span class="signIn__form__content__password__title"> 密碼 </span>
          <input
            type="text"
            class="signIn__form__content__password__input"
            placeholder="xxxxxxxx"
          />
        </div>
        <div class="signIn__form__content__buttons">
          <router-link
            to="/my-todo/today"
            class="signIn__form__content__buttons__siginIn"
          >
            Sign in
          </router-link>
          <router-link
            class="signIn__form__content__buttons__siginUp"
            to="/signup"
          >
            Sign up
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
    height: 70px;
    background-color: var(--banner-bg-color);
    color: var(--sub-font-color);
    text-align: center;
    line-height: 70px;
    &__title {
      font-size: 25px;
      font-family: "Barlow";
      font-weight: 400;
      @include pad {
        font-size: 35px;
      }
    }
  }
  &__form {
    width: 100%;
    margin-top: 70px;
    @include flex(column, space-around, center);
    &__title {
      position: relative;
      font-size: 30px;
      font-weight: 500;
      @include pad {
        font-size: 45px;
      }
      &::after {
        position: absolute;
        content: "";
        width: 120%;
        height: 2px;
        top: 125%;
        right: 50%;
        transform: translateX(50%);
        background-color: var(--main-font-color);
      }
    }
    &__content {
      width: 70%;
      max-width: 768px;
      margin-top: 50px;
      @include flex(column, center, center);
      gap: 45px;
      @include pad {
        margin-top: 100px;
      }
      &__account,
      &__password {
        width: 100%;
        @include pad {
          width: 70%;
        }
        @include flex(column, center, flex-start);
        gap: 5px;
        span {
          @include pad {
            font-size: 20px;
          }
        }
        input {
          width: 100%;
          max-width: 768px;
          height: 40px;
          padding: 0 10px;
          background-color: var(--input-bg-color);
          border-radius: 4px;
          @include pad {
            height: 50px;
          }
          &:focus,
          &:hover {
            border-bottom: 1px solid #2a2a2a;
          }
        }
      }
      &__buttons {
        width: 100%;
        max-width: 768px;
        margin-top: 50px;
        @include flex(column, center, center);
        gap: 15px;
        @include pad {
          width: 70%;
        }
        &__siginIn,
        &__siginUp {
          width: 100%;
          height: 35px;
          line-height: 35px;
          cursor: pointer;
          color: var(--main-font-color);
          text-align: center;
          border: 1px solid #e2dcdc;
          border-radius: 10px;
          &:hover,
          &:focus {
            background-color: var(--banner-bg-color);
            color: #ffffff;
          }
          @include pad {
            font-size: 25px;
            font-weight: 400;
            height: 50px;
            line-height: 50px;
          }
        }
      }
    }
  }
}
</style>