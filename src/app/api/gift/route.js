import Gift from "../../models/gift";
import { connectToDB } from "../../utils/database";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

async function generateUniqueTrackingId() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const codeLength = 7;

  function generateRandomCode() {
    let code = "";
    for (let i = 0; i < codeLength; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

  async function trackingIdExists(trackingId) {
    const existingGift = await Gift.findOne({
      trackingId: new RegExp(`^${trackingId}$`, "i"),
    });
    return existingGift !== null;
  }

  let trackingId;
  do {
    trackingId = generateRandomCode();
  } while (await trackingIdExists(trackingId));

  return trackingId.toLowerCase();
}

export const POST = async (req) => {
  await connectToDB();

  try {
    let { data } = await req.json();

    // Generate a unique tracking ID
    data.trackingId = await generateUniqueTrackingId();

    // Create a new Gift entry with the unique tracking ID
    const newWallet = await Gift.create(data);

    return new Response(JSON.stringify(newWallet), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400 }
    );
  }
};

export const GET = async (req) => {
  try {
    await connectToDB();
    const wallets = await Gift.find({});
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
