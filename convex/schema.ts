import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { features } from "process";

export default defineSchema({
  //  USERS TABLE
  // This table stores the user details for each user
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    profileImage: v.string(),
    username: v.string(),
    name: v.optional(v.string()),
    lastName: v.optional(v.string()),
    phoneNumber: v.optional(v.string()),
    country: v.optional(v.string()),
    dob: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
    reservations: v.array(v.id("reservations")),
    favorites: v.array(v.id("favorites")),

    physicalLimitations: v.optional(
      v.object({
        types: v.array(
          v.union(
            v.literal("none"),
            v.literal("mobility"),
            v.literal("visual"),
            v.literal("hearing"),
            v.literal("cognitive"),
            v.literal("speech"),
            v.literal("chronic"),
            v.literal("other"),
          ),
        ),
        otherDetails: v.optional(v.string()),
      }),
    ),

    settings: v.object({
      quietMode: v.boolean(),
    }),

    isVerified: v.boolean(),
    userPhotoId: v.optional(v.string()),
    emergencyContact: v.optional(
      v.object({
        name: v.string(),
        lastName: v.string(),
        relationship: v.union(
          v.literal("father"),
          v.literal("mother"),
          v.literal("sibling"),
          v.literal("friend"),
          v.literal("other"),
        ),
        phoneNumber: v.string(),
      }),
    ),
    account: v.object({
      isVerified: v.boolean(),
      isActive: v.boolean(),
      role: v.union(
        v.literal("developer"),
        v.literal("ceo"),
        v.literal("manager"),
        v.literal("admin"),
        v.literal("guest"),
        v.literal("receptionist"),
        v.literal("maintenance"),
        v.literal("housekeeping"),
      ),
    }),
  }).index("byEmail_and_clerkId", ["email", "clerkId"]),

  //  RESERVATIONS TABLE
  // This table stores the reservation details for each user
  reservations: defineTable({
    userId: v.id("users"),
    receptionistId: v.id("users"),
    checkIn: v.number(),
    checkOut: v.number(),
    createdBy: v.id("users"),
    adults: v.number(),
    children: v.number(),
    totalAmount: v.number(),
    totalPaid: v.number(),
    totalDiscount: v.number(),
    totalTax: v.number(),
    totalCompanions: v.number(),
    totalRooms: v.number(),
    applicableDiscount: v.number(),
    paymentMethod: v.string(),
    paymentStatus: v.union(
      v.literal("pending"),
      v.literal("paid"),
      v.literal("refunded"),
    ),
    days: v.number(),
    rooms: v.array(
      v.object({
        roomId: v.id("rooms"),
        pricePerNight: v.number(),
        message: v.optional(v.string()),
        companions: v.array(
          v.object({
            firstName: v.string(),
            lastName: v.string(),
          }),
        ),
      }),
    ),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled"),
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("byUserId", ["userId"]),

  // PAYMENTS TABLE
  // This table stores the payment details for each reservation
  payments: defineTable({
    userId: v.id("users"),
    reservationId: v.id("reservations"),
    totalAmount: v.number(),
    roomPricePerNight: v.number(),
    proccedBy: v.id("users"),
    paymentDate: v.number(),
    totalPaid: v.number(),
    totalDiscount: v.number(),
    totalTax: v.number(),
    paymentMethod: v.union(
      v.literal("credit_card"),
      v.literal("debit_card"),
      v.literal("bank_transfer"),
      v.literal("cash"),
      v.literal("paypal"),
      v.literal("apple_pay"),
      v.literal("google_pay"),
      v.literal("crypto"),
      v.literal("gift_card"),
      v.literal("other"),
    ),
    paymentStatus: v.union(
      v.literal("pending"),
      v.literal("paid"),
      v.literal("refunded"),
      v.literal("failed"),
      v.literal("cancelled"),
      v.literal("disputed"),
    ),
    paymentType: v.union(
      v.literal("full"),
      v.literal("partial"),
      v.literal("deposit"),
      v.literal("advance"),
      v.literal("final"),
      v.literal("security"),
      v.literal("other"),
    ),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("byUserId_and_reservationId", ["userId", "reservationId"]),

  // ROOMS TABLE
  // This table stores the room details for each reservation
  rooms: defineTable({
    roomNumber: v.string(),
    roomType: v.string(),
    roomDescription: v.string(),
    roomPrice: v.number(),
    roomCapacity: v.number(),
    privateBathroom: v.boolean(),
    parking: v.boolean(),
    rooftopAccess: v.boolean(),
    copyWriting: v.object({
      title: v.string(),
      description: v.string(),
    }),
    roomAmenities: v.array(v.string()),
    history: v.object({
      pastReservationsId: v.array(v.id("reservations")),
      currentReservationsId: v.array(v.id("reservations")),
      futureReservationsId: v.array(v.id("reservations")),
    }),
    roomStatus: v.union(
      v.literal("available"),
      v.literal("unavailable"),
      v.literal("booked"),
      v.literal("maintenance"),
      v.literal("cleaning"),
      v.literal("out_of_order"),
      v.literal("reserved"),
      v.literal("under_renovation"),
      v.literal("other"),
    ),
    roomImages: v.array(v.string()),
    roomSize: v.string(),
    roomViewCount: v.number(),
    roomRating: v.number(),
    roomFloor: v.number(),
    roomFeatures: v.array(v.string()),
    roomPolicies: v.array(v.string()),
    roomCreatedAt: v.number(),
    roomUpdatedAt: v.number(),
    roomCreatedBy: v.id("users"),
    features: v.array(v.string()),
    ameneties: v.array(v.string()),
    media: v.object({
      featured: v.string(),
      gallery: v.array(v.string()),
      video: v.string(),
      layout: v.string(),
    }),
  }).index("byRoomNumber", ["roomNumber"]),
});
