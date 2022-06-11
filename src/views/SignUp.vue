<template>
  <div class="signUp">
    <div class="signUp__top">
      <h1 class="signUp__top__title">My Todo</h1>
    </div>
    <div class="signUp__form">
      <h1 class="signUp__form__title">Sign Up</h1>
      <form
      @submit.prevent.stop="handleSubmit" 
      class="signUp__form__content">
        <div class="signUp__form__content__name">
          <span class="signUp__form__content__name__title"> 姓名 </span>
          <input
            type="text"
            class="signUp__form__content__name__input"
            placeholder="Enter your name"
            required
            v-model="name"
          />
        </div>
        <div class="signUp__form__content__account">
          <span class="signUp__form__content__account__title"> 帳號 </span>
          <input
            type="text"
            class="signUp__form__content__account__input"
            placeholder="請輸入至少6位數"
            required
            v-model="account"
          />
        </div>
        <div class="signUp__form__content__email">
          <span class="signUp__form__content__email__title"> 信箱 </span>
          <input
            type="email"
            class="signUp__form__content__email__input"
            placeholder="xxx@example.com"
            required
            v-model="email"
          />
        </div>
        <div class="signUp__form__content__password">
          <span class="signUp__form__content__password__title"> 密碼 </span>
          <input
            type="text"
            class="signUp__form__content__password__input"
            placeholder="請輸入至少8位數"
            required
            v-model="password"
          />
        </div>
        <div class="signUp__form__content__checked-password">
          <span class="signUp__form__content__checked-password__title">
            確認密碼
          </span>
          <input
            type="text"
            class="signUp__form__content__checked-password__input"
            placeholder="請重新輸入密碼"
            required
            v-model="checkPassword"
          />
        </div>
        <div class="signUp__form__content__buttons">
          <button
            type="submit"
            class="signUp__form__content__buttons__siginIn"
          >
            Submit
          </button>
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

<script setup>
import authorizationAPI from "@/apis/authorization";
import { ref, reactive } from "vue";
import {useRoute, useRouter} from 'vue-router'

const account = ref("");
const name = ref("");
const password = ref("");
const checkPassword = ref("");
const email = ref("");
const router = useRouter();
const route = useRoute();

async function handleSubmit() {
  try {
    // input empty inform
    if (!account.value.trim() || !name.value.trim() || !password.value.trim() || !email.value.trim() || !checkPassword.value.trim()) {
      alert("Please complete your form!");
      return;
    }

    // check password and checked password
    if(password.value !== checkPassword.value) {
      alert('Password and CheckedPassword are not the same !')
      return
    }

    if(password.value.length < 8) {
      alert('Password and CheckedPassword need to be at least 8 words !')
      return
    }

    if(account.value.length < 6) {
      alert('Account needs to be at least 6 words!')
      return
    }

    const response = await authorizationAPI.signUp({
      account: account.value,
      name: name.value,
      password: password.value,
      email: email.value,
      checkPassword: checkPassword.value
    });

    alert('Submit Successfully')
    router.push({name: 'sign-in'})

  } catch (error) {
    console.log(error)
    alert('Your input did not meet the expectation!')
  }
}
</script>


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
      @include pad {
        font-size: 45px;
      }
      @include pc {
        font-size: 50px;
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
      margin-top: 60px;
      gap: 25px;
      @include flex(column, center, center);
      @include pad {
        gap: 45px;
      }
      &__account,
      &__password,
      &__name,
      &__checked-password,
      &__email {
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
          background-color: #e4e0e0;
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
        margin: 25px 0;
        @include pad {
          width: 70%;
          margin-top: 50px;
        }
        @include flex(column, center, center);
        gap: 15px;
        &__siginIn,
        &__siginUp {
          width: 100%;
          height: 35px;
          line-height: 35px;
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
            height: 50px;
            line-height: 50px;
          }
        }
      }
    }
  }
}
</style>