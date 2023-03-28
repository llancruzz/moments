import { rest } from "msw";

const baseURL = "https://api-django-rest.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "lancruzz",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/llancruzz/image/upload/v1/media/images/profile-pic_vehyvv",
      })
    );
  }),
  rest.post(`${baseURL}d-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
