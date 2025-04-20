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
    });
    return user;
  },
});

// export const updateUser = mutation({
//   args: {
//     clerkId: v.string(),
//     email: v.string(),
//     profileImage: v.string(),
//     username: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const user = await ctx.db.get("users", args.clerkId).update({
//       email: args.email,
//       profileImage: args.profileImage,
//       username: args.username,
//     });
//     return user;
//   },
// });
// //     return NextResponse.json({
