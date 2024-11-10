import User from "../../../models/user";
import { connectToDB } from "@/app/utils/database";

import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "365d" });
};

export const POST = async (request) => {
  const { email, password, username, role } = await request.json();
  try {
    if (username.length < 4) {
      return new Response(
        JSON.stringify({ error: "Username should be more than 4 letters!" }),
        {
          status: 400,
        }
      );
    }

    await connectToDB();

    try {
      let user;
      try {
        const lowercaseEmail = email.toLowerCase();

        user = await User.signup(lowercaseEmail, password, username, role);
      } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
        });
      }
      const token = createToken(user._id);

      user.token = token;
      return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error.message,
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
