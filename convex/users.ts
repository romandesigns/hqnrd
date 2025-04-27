import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    profileImage: v.string(),
    username: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      profileImage: args.profileImage,
      username: args.username,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isVerified: false,
      account: {
        role: "guest",
        isActive: true,
        isVerified: false,
      },
      settings: {
        quietMode: false,
      },
      reservations: [],
      favorites: [],
      name: undefined,
      lastName: undefined,
      phoneNumber: undefined,
      country: undefined,
      dob: undefined,
      physicalLimitations: { types: ["none"], otherDetails: undefined },
    });
    return user;
  },
});
