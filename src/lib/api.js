const PRODUCT_DOMAIN =
  'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74';

export async function getAllProduct() {
  const respone = await fetch(PRODUCT_DOMAIN);
  const data = await respone.json();
  if (!respone.ok) {
    throw new Error(data.message || 'Could not fetch products.');
  }

  const dataArr = [];
  for (const key in data) {
    const productObj = {
      id: key,
      ...data[key],
    };
    dataArr.push(productObj);
  }

  return dataArr;
}
