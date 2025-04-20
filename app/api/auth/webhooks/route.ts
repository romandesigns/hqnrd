import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    const { id } = evt.data;
    const eventType = evt.type;

    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`,
    );

    switch (eventType) {
      case "user.created": {
        const payload = {
          clerkId: evt.data.id,
          email: evt.data.email_addresses[0].email_address,
          profileImage: evt.data.image_url,
          username: evt.data.username || "n/a",
        };
        await fetchMutation(api.users.createUser, payload);

        return NextResponse.json({
          status: 200,
          message: "User info inserted",
        });
      }

      case "user.updated": {
        const updatePayload = {
          clerkId: evt.data.id,
          email: evt.data.email_addresses[0].email_address,
          profileImage: evt.data.image_url,
          username: evt.data.username || "n/a",
        };
        // await fetchMutation(api.users.updateUser, updatePayload);

        return NextResponse.json({
          status: 200,
          message: "User info updated",
        });
      }

      case "user.deleted": {
        console.log("User deleted:", evt.data);
        // Optional: add deletion logic here
        return NextResponse.json({
          status: 200,
          message: "User deleted event received",
        });
      }

      default:
        console.log("Unhandled event type:", eventType);
        return NextResponse.json({
          status: 200,
          message: `Unhandled event type: ${eventType}`,
        });
    }
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
