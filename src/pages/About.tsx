export function About() {
  return (
    <>
      <h1>About Page</h1>

      <p>
        This project was created using React and Bootstrap 5. The banner on the
        homepage will generate a random item from the shop everytime querying
        the JSON data. The shopping cart is accessible from the whole site using
        React Context. Items added to the cart are stored in local storage so
        even if you refresh the page, they are still there. The cart will
        calculate the total price and allow to to remove items from it. The
        store page will also allow you to add and remove items from the cart.
        Overall this was a really fun project and great learning experience.
        Signing out, Nav
      </p>
    </>
  );
}
