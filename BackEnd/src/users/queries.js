const getAllUsersQuery = "SELECT * FROM public.users";

const getSignUpUserQuery = ({ name, email, password }) => {
  return `INSERT INTO public.users (name, email, password) VALUES (${name}, ${email}, ${password}) RETURNING id;`;
};

const Login =
  "Select * from public.users where email = 'd@g.com'and password = '123456'";

module.exports = { getAllUsersQuery, getSignUpUserQuery, Login };
