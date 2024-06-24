import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 border-t-2 bg-neutral-100">
      <div className="row md:grid  mx-auto hidden max-w-7xl grid-cols-5 py-16">
        <div className="">
          <ul>
            <span className="text-xs font-bold">Buy</span>
            <li>
              <Link href="" className="text-xs">
                Registration
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                eBay Money Back Guarantee
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Bidding & buying help
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Stores
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <span className="text-xs font-bold">Sell</span>
            <li>
              <Link href="" className="text-xs">
                Start selling
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Learn to sell
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Affiliates
              </Link>
            </li>
          </ul>
          <ul>
            <span className="text-xs font-bold">Tools & apps</span>
            <li>
              <Link href="" className="text-xs">
                Developers
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Security center
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Site map
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <span className="text-xs font-bold">Stay connected</span>
            <li>
              <Link href="" className="text-xs">
                eBay's Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <span className="text-xs font-bold">About eBay</span>
            <li>
              <Link href="" className="text-xs">
                Company info
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                News
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Investors
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Careers
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Government relations
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <span className="text-xs font-bold">Help & Contact</span>
            <li>
              <Link href="" className="text-xs">
                Seller Information Center
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Contact us
              </Link>
            </li>
          </ul>
          <ul>
            <span className="text-xs font-bold">Community</span>
            <li>
              <Link href="" className="text-xs">
                Announcements
              </Link>
            </li>
            <li>
              <Link href="" className="text-xs">
                Discussion boards
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* =====Mobile or tablet device===== */}
      <div className="md:hidden px-8 py-16">
        <ul className="flex gap-4 text-nowrap flex-wrap">
          <li className="text-xs">About eBay</li>
          <li className="text-xs">Announcements</li>
          <li className="text-xs">Community</li>
          <li className="text-xs">Security Center</li>
          <li className="text-xs">Seller Information Center </li>
          <li className="text-xs">Policies</li>
          <li className="text-xs">Affiliates</li>
          <li className="text-xs">Help & Contact</li>
          <li className="text-xs">Site map</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
