const getAllEventsQuery = "SELECT * FROM public.events";

const SignUp =
  "insert into public.users (name, email, password) VALUES ('Moon3', 'f@g.com', '123456') RETURNING id";

const Login =
  "Select * from public.users where email = 'd@g.com'and password = '123456'";

module.exports = { getAllEventsQuery, SignUp, Login };
