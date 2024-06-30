"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Tabs = () => {
  const [tabs, setTabs] = useState<Element[] | null>(null);
  const showMoreElements = useRef<Node[]>([]);
  const lengthRef = useRef(0);
  const listRef = useRef<HTMLUListElement>(null);
  //TODO get ul width thats it
  // useEffect(() => {
  //   const handleLoad = () => {
  //     const htmlTabs = document.querySelectorAll('[data-attr="tab"]');
  //     setTabs(Array.from(htmlTabs));
  //     lengthRef.current = htmlTabs.length;
  //   };

  //   handleLoad(); // Call the function to set the initial length
  //   window.addEventListener("load", handleLoad);
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  // useEffect(() => {
  //   const onWindowResize = () => {
  //     console.log('call');
  //     if (!tabs) return;

  //     const windowWidth = window.innerWidth;
  //     let deltaWidth = windowWidth;

  //     // Calculate delta
  //     tabs.forEach((tab) => {
  //       deltaWidth -= tab.clientWidth - 100;
  //     });
  //     console.log(tabs);

  //     const tabParent = tabs[0].parentElement?.parentElement;

  //     // If delta is less than 100, remove the last tab and add it to showMoreElements
  //     if (deltaWidth < 100 && tabParent && tabParent.lastChild) {
  //       const lastChild = tabParent.lastChild;
  //       showMoreElements.current.push(lastChild);
  //       tabParent.removeChild(lastChild);
  //     }

  //     // If delta is more than 200, take the first element from showMoreElements and add it back to the document
  //     if (
  //       deltaWidth > 200 &&
  //       tabParent &&
  //       showMoreElements.current.length > 0
  //     ) {
  //       const firstChildOfArr = showMoreElements.current.shift();
  //       if (firstChildOfArr) {
  //         tabParent.appendChild(firstChildOfArr);
  //       }
  //     }
  //   };
  //   window.addEventListener("resize", onWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", onWindowResize);
  //   };
  // }, [tabs]);

  return (
    <div>
      <ul
        className="lg:overflow-x-hidden mx-auto flex max-w-7xl justify-center gap-4 overflow-x-scroll py-2 text-xs"
        ref={listRef}
      >
        <li className="text-nowrap">
          <Link href="/category/Saved" data-attr="tab">
            Saved
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Electronics" data-attr="tab">
            Electronics
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Motors" data-attr="tab">
            Motors
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Fashion" data-attr="tab">
            Fashion
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/collectibles-Art" data-attr="tab">
            Collectibles and Art
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/sports" data-attr="tab">
            Sports
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Health-beauty" data-attr="tab">
            Health & Beauty
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Industrial-equipment" data-attr="tab">
            Industrial equipment
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Home-Garden" data-attr="tab">
            Home & Garden
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Deals" data-attr="tab">
            Deals
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/category/Sells" data-attr="tab">
            Sell
          </Link>
        </li>
      </ul>
      <select name="more" id="show-more-tabs">
        {showMoreElements.current.map((el, index) => (
          <option key={index} value="">
            {(el as HTMLElement).textContent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Tabs;
