import Gift from "../../../models/gift";
import { connectToDB } from "../../../utils/database";
export const dynamic = "force-dynamic";

export const GET = async (req, { params }) => {
  await connectToDB();

  // Extract tracking ID from query parameters

  const { id } = params;

  if (!id) {
    return new Response(
      JSON.stringify({ success: false, error: "Tracking ID is required" }),
      { status: 400 }
    );
  }

  try {
    // Find the package by tracking ID (case-insensitive)
    const gift = await Gift.findOne({
      trackingId: new RegExp(`^${id}$`, "i"),
    });

    if (!gift) {
      return new Response(
        JSON.stringify({ success: false, error: "Package not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(gift), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};

export const PATCH = async (req, { params }) => {
  await connectToDB();

  // Extract tracking ID from params
  const { id } = params;

  if (!id) {
    return new Response(
      JSON.stringify({ success: false, error: "Package ID is required" }),
      { status: 400 }
    );
  }

  try {
    // Parse the JSON data from the request body
    const { data } = await req.json();

    // Log data to confirm what is being updated

    // Find the package by ID and update it
    const updatedPackage = await Gift.findByIdAndUpdate(
      id,
      { ...data },
      { new: true, runValidators: true } // Ensures validators are applied to updated data
    );

    // Check if the package was found and updated
    if (!updatedPackage) {
      return new Response(
        JSON.stringify({ success: false, error: "Package not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(updatedPackage), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating package:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  await connectToDB();

  // Extract the package ID from params
  const { id } = params;

  if (!id) {
    return new Response(
      JSON.stringify({ success: false, error: "Package ID is required" }),
      { status: 400 }
    );
  }

  try {
    // Find the package by ID and delete it
    const deletedPackage = await Gift.findByIdAndDelete(id);

    // Check if the package was found and deleted
    if (!deletedPackage) {
      return new Response(
        JSON.stringify({ success: false, error: "Package not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Package deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting package:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};
