import User from "../../models/user";
import { connectToDB } from "../../utils/database";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export const GET = async (req) => {
  try {
    await connectToDB();
    const wallets = await User.find({});
    return new Response(JSON.stringify(wallets), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400 }
    );
  }
};
