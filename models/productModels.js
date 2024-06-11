import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a product name"],
    },
    img_url: {
        type: String,
        required: [true, "Please provide a product image"],
    },
    sub_img: {
        type: Array
    },
    price: {
        type: Number,
        required: [true, "Please provide a product price"],
    },
    oldPrice: {
        type: Number,
        required: [true, "Please provide a product price"],
    },
    category: {
        type: String,
        required: [true, "Please provide a product category"],
    },
    subtitle: {
        type: String,
        required: [true, "Please provide a product sub-title"],
    },
    description: {
        type: String,
        required: [true, "Please provide a product description"],
    },
    isStocked: {
        type: Boolean,
        required: [true, "If the product is in Stock or not"],
    },
    rating: {
        type: Number,
    },
    reviews: {
        type: Number,
    },
    head: {
        type: String
    },
    bestseller: {
        type: Boolean
    },
    allergens: {
        type: Array
    },
    tags: {
        type: Array
    }
})

const ProductDetails = mongoose.models.productDetails || mongoose.model("productDetails", ProductSchema);

export default ProductDetails;