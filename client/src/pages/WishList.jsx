import React from "react";
import "../styles/List.scss";
import Navbar from "../components/Navbar";
import ListingCart from "../components/ListingCard";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const WishList = () => {
  const wishList = useSelector((state) => state.user.wishList);
  return (
    <>
      <Navbar />
      <h1 className="title-list">Your wish List</h1>
      <div className="list">
        {wishList.map(
          ({
            _id,
            creator,
            listingPhotoPaths,
            city,
            province,
            country,
            category,
            type,
            price,
            booking=false,
          }) => (
            <ListingCart
            listingId={_id}
            creator={creator}
            listingPhotoPaths={listingPhotoPaths}
            city={city}
            province={province}
            country={country}
            category={category}
            type={type}
            price={price}
            booking={booking} />
          )
        )}
      </div>
      <Footer/>
    </>
  );
};

export default WishList;
