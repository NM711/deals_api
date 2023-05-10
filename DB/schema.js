module.exports.prodSchema = (_brand, name, currentPrice, originalPrice, message, img, link) => {
  return {
    brand: _brand,
    productName: name,
    currentProductPrice: currentPrice,
    originalProductPrice: originalPrice,
    inventoryMessage: message,
    productImage: img,
    linkToProduct: link
  }
}
