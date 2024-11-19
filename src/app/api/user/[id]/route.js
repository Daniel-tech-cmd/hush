import User from "../../../models/user";
import { connectToDB } from "../../../utils/database";
// export const dynamic = "force-dynamic";

export const GET = async (req, { params }) => {
  await connectToDB();

  // Extract tracking ID from query parameters

  const { id } = params;
  console.log(id);

  if (!id) {
    return new Response(
      JSON.stringify({ success: false, error: "User ID is required" }),
      { status: 400 }
    );
  }

  try {
    // Find the package by tracking ID (case-insensitive)
    const gift = await User.findById(id);

    if (!gift) {
      return new Response(
        JSON.stringify({ success: false, error: "User not found" }),
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
  try {
    await connectToDB();

    const { id } = params;

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: "User ID is required" }),
        { status: 400 }
      );
    }

    // Parse the request body
    const { data } = await req.json();
    const { role } = data;

    // Validate the role field
    if (!role) {
      return new Response(
        JSON.stringify({ success: false, error: "Role is required" }),
        { status: 400 }
      );
    }

    // Update the user's role
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true } // Return the updated document and enforce schema validators
    );

    if (!updatedUser) {
      return new Response(
        JSON.stringify({ success: false, error: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify({ success: true, data: updatedUser }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating user role:", error);
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
      JSON.stringify({ success: false, error: "User ID is required" }),
      { status: 400 }
    );
  }

  try {
    // Find the package by ID and delete it
    const deletedPackage = await User.findByIdAndDelete(id);

    // Check if the package was found and deleted
    if (!deletedPackage) {
      return new Response(
        JSON.stringify({ success: false, error: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "User deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting User:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};
