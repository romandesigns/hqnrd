import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest, NextResponse } from "next/server";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function POST(req: NextRequest, res: Response) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`,
    );
    // console.log("Webhook payload:", evt.data);
    switch (eventType) {
      case "user.created":
        // Handle user created event
        try {
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
        } catch (error) {
          return NextResponse.json({
            status: 400,
            error,
          });
        }
        break;
      case "user.updated":
        // Handle user updated event
        console.log("User updated:", evt.data);

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
        break;
      case "user.deleted":
        // Handle user deleted event
        console.log("User deleted:", evt.data);
        break;
      default:
        console.log("Unhandled event type:", eventType);
        break;
    }
    // You can also use the event type to determine what action to take

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
