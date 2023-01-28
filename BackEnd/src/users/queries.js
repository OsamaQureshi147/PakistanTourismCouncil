const getAllUsersQuery = "SELECT * FROM public.users";

const getSignUpUserQuery =
  "INSERT INTO public.users (name, email, password) VALUES ($1, $2, $3) RETURNING id";

const getUserByEmailQuery = "SELECT * FROM public.users WHERE email = $1";

module.exports = {
  getAllUsersQuery,
  getSignUpUserQuery,
  getUserByEmailQuery,
};
