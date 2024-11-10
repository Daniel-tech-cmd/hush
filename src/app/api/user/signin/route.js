import User from "../../../models/user";
import { connectToDB } from "@/app/utils/database";

import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "365d" });
};

export const POST = async (request) => {
  const { email, password } = await request.json();
  try {
    await connectToDB();
    let user;
    try {
      const lowercaseEmail = email.toLowerCase();
      user = await User.login(lowercaseEmail, password);
      if (!user) {
        return new Response(
          JSON.stringify({
            error: error.message,
          }),
          { status: 400 }
        );
      }
      const dat = await User.findById(user._id);
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error.message,
        }),
        { status: 400 }
      );
    }

    const token = createToken(user._id);

    user.token = token;

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      { status: 400 }
    );
  }
};
