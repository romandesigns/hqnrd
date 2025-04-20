import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getTasks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const createTask = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const task = await ctx.db.insert("tasks", {
      text: args.text,
      isComplete: false,
    });
    return task;
  },
});
