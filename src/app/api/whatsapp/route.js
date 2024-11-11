import WhatsApp from "../../models/Whatsapp";
import { connectToDB } from "../../utils/database";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export const POST = async (req) => {
  await connectToDB();

  try {
    let { whatsappNumber } = await req.json();

    // Check if any WhatsApp number exists in the database
    const existingNumber = await WhatsApp.findOne({});

    // If a number exists, delete it
    if (existingNumber) {
      await WhatsApp.deleteOne({ _id: existingNumber._id });
    }

    // Create a new WhatsApp entry with the provided number
    const newWhatsApp = await WhatsApp.create({
      whatsappNumber: whatsappNumber,
    });

    return new Response(JSON.stringify(newWhatsApp), {
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
    const wallets = await WhatsApp.find({});
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
