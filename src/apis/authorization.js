import { apiHelper } from "@/utils/helpers";

export default {
  signIn({ account, password }) {
    return apiHelper.post('/login', {
      account,
      password,
    })
  },
  signUp({ account, password, name, email, checkPassword }) {
    return apiHelper.post('/register', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  },
}
