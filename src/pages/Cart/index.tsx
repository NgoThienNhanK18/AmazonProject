export default function CartPage() {
  const listProductsString = window.localStorage.getItem('product');
  const listProductsParsed = listProductsString
    ? JSON.parse(listProductsString)
    : [];

  console.log('Cart items:', listProductsParsed);

  return (
    <div className="min-h-screen bg-white">
      <main className="p-4">
        <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
        <p className="mb-6 text-gray-600">Review your items before checkout.</p>
        {/* Cart items will be listed here */}
        <div className="rounded-lg bg-gray-100 p-4 shadow-md">
          {/* Placeholder for cart items */}
          <p className="text-gray-500">
            {listProductsParsed.map((item) => {
              return (
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mb-2 h-16 w-16"
                  />
                  <span key={item.id} className="mb-2 block">
                    {item.name} - ${item.price.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </p>
        </div>
      </main>
    </div>
  );
}
