const getAllUsersQuery = "SELECT * FROM public.users";

const getSignUpUserQuery =
  "INSERT INTO public.users (name, email, password) VALUES ($1, $2, $3) RETURNING id";

const getUserByEmailQuery = "SELECT * FROM public.users WHERE email = $1";

// const Login =
//   "Select * from public.users where email = 'd@g.com'and password = '123456'";

module.exports = {
  getAllUsersQuery,
  getSignUpUserQuery,
  getUserByEmailQuery,
};
