import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { Products } from "/lib/collections";
import { registerSchema } from "/imports/plugins/core/collections";

export const ShopifyProduct = new SimpleSchema({
  shopifyId: {
    type: Number,
    optional: true,
    decimal: false
  }
});

registerSchema("ShopifyProduct", ShopifyProduct);

Products.attachSchema(ShopifyProduct, { selector: { type: "simple" } });
Products.attachSchema(ShopifyProduct, { selector: { type: "variant" } });
