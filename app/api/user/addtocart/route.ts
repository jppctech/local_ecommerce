import { connect } from "@/dbconnect/dbconnect";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { productWithQuantity, user } = reqBody;
    const { itemId, itemQuantity } = productWithQuantity;

    // Find user cart
    const userCart = await User.findById(user._id);

    if (!userCart) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the item already exists in the cart
    const existingItemIndex = userCart.cart_items.findIndex(
      (item: any) => item.itemId.toString() === itemId
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity but ensure it doesn't exceed 10
      const existingItem = userCart.cart_items[existingItemIndex];
      const newQuantity = Math.min(existingItem.itemQuantity + itemQuantity, 10); // Maximum quantity is 10
      userCart.cart_items[existingItemIndex].itemQuantity = newQuantity;
    } else {
      // If the item doesn't exist, add it to the cart
      userCart.cart_items.push({
        itemId: itemId,
        itemQuantity: Math.min(itemQuantity, 10), // Ensure initial quantity doesn't exceed 10
      });
    }

    // Save the updated cart
    await userCart.save();

    return NextResponse.json({
      message: "Item added or updated in cart successfully",
      data: true,
      cart: userCart.cart_items,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return NextResponse.json(
      {
        error: error,
        message: "Error while adding item to cart",
      },
      {
        status: 500,
      }
    );
  }
}
