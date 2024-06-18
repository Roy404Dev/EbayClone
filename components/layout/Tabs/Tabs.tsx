import Link from "next/link";
import React from "react";
//TODO extract links from file
const Tabs = () => {
  return (
    <div>
      <ul className="flex gap-4 max-w-7xl mx-auto justify-center py-2 text-xs">
        <li>
          <Link href="">Saved</Link>
        </li>
        <li>
          <Link href="">Electronics</Link>
        </li>
        <li>
          <Link href="">Motors</Link>
        </li>
        <li>
          <Link href="">Fashion</Link>
        </li>
        <li>
          <Link href="">Collectibles and Art</Link>
        </li>
        <li>
          <Link href="">Sports</Link>
        </li>
        <li>
          <Link href="">Health & Beauty</Link>
        </li>
        <li>
          <Link href="">Industrial equipment</Link>
        </li>
        <li>
          <Link href="">Home & Garden</Link>
        </li>
        <li>
          <Link href="">Deals</Link>
        </li>
        <li>
          <Link href="">Sell</Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
