<template>
  <div class="signUp">
    <div class="signUp__top">
      <h1 class="signUp__top__title">My Todo</h1>
    </div>
    <div class="signUp__form">
      <h1 class="signUp__form__title">Sign Up Your Account</h1>
      <form class="signUp__form__content">
        <div class="signUp__form__content__name">
          <span class="signUp__form__content__name__title"> 姓名 </span>
          <input
            type="text"
            class="signUp__form__content__name__input"
            placeholder="Enter your name"
          />
        </div>
        <div class="signUp__form__content__account">
          <span class="signUp__form__content__account__title"> 帳號 </span>
          <input
            type="text"
            class="signUp__form__content__account__input"
            placeholder="請輸入至少6位數"
          />
        </div>
        <div class="signUp__form__content__email">
          <span class="signUp__form__content__email__title"> 信箱 </span>
          <input
            type="email"
            class="signUp__form__content__email__input"
            placeholder="xxx@example.com"
            required
          />
        </div>
        <div class="signUp__form__content__password">
          <span class="signUp__form__content__password__title"> 密碼 </span>
          <input
            type="text"
            class="signUp__form__content__password__input"
            placeholder="請輸入至少8位數"
          />
        </div>
        <div class="signUp__form__content__checked-password">
          <span class="signUp__form__content__checked-password__title">
            密碼
          </span>
          <input
            type="text"
            class="signUp__form__content__checked-password__input"
            placeholder="請重新輸入密碼"
          />
        </div>
        <div class="signUp__form__content__buttons">
          <router-link
            to="/my-todo"
            class="signUp__form__content__buttons__siginIn"
          >
            Submit
          </router-link>
          <router-link
            class="signUp__form__content__buttons__siginUp"
            to="/signin"
          >
            Cancel
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.signUp {
  width: 100%;
  &__top {
    width: 100%;
    height: 70px;
    background-color: var(--banner-bg-color);
    color: var(--sub-font-color);
    text-align: center;
    line-height: 70px;
    &__title {
      font-size: 35px;
      font-family: "Barlow";
      font-weight: 400;
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
      margin-top: 60px;
      @include flex(column, center, center);
      gap: 45px;
      &__account,
      &__password,
      &__name,
      &__checked-password,
      &__email {
        width: 70%;
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
          height: 50px;
          padding: 0 10px;
          background-color: #e4e0e0;
          border-radius: 4px;
          &:focus,
          &:hover {
            border-bottom: 1px solid #2a2a2a;
          }
        }
      }
      &__buttons {
        width: 70%;
        max-width: 768px;
        margin-top: 50px;
        @include flex(column, center, center);
        gap: 15px;
        &__siginIn,
        &__siginUp {
          width: 100%;
          height: 50px;
          line-height: 50px;
          cursor: pointer;
          color: #2a2a2a;
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
          }
        }
      }
    }
  }
}
</style>