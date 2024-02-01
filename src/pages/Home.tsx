import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import { SkeletonLoader } from "../components/Loader";
import { CartItem } from "../types/type";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useLatestProductsQuery("");
  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };
  if (isError) toast.error("Cannot Fetch the products");

  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="FindMore">
          More
        </Link>
      </h1>

      <main>
        {isLoading ? (
          <SkeletonLoader width="80vw" />
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              photo={i.photo}
              handler={addToCartHandler}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
