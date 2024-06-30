"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client/client";
import { Session } from "@supabase/supabase-js";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface JwtPayloadType extends JwtPayload {
  user_role: string;
}

const ProductForm = () => {
  const [productData, setproductData] = useState({
    product_name: "",
    category_id: 0,
  });
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession() ;
      if (error) {
        console.error('Error fetching session:', error);
      } else {
        setSession(data.session);
      }
    };

    fetchSession();

    const authListener = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        const jwt = jwtDecode<JwtPayloadType>(session.access_token);
        const userRole = jwt.user_role;
        setSession(session);
      }
    });

    return () => {
      authListener.data.subscription.unsubscribe();
    };
  }, []);


  const handleAddProduct = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (session) {
      const { error } = await supabase.from("products").insert({
        product_name: productData.product_name,
        category_id: productData.category_id,
        user_id: session.user.id,
      });
      console.error(error);
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="product name"
          onChange={(e) =>
            setproductData({ ...productData, product_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="category id"
          onChange={(e) =>
            setproductData({
              ...productData,
              category_id: Number(e.target.value),
            })
          }
        />
        <button
          className="cursor-pointer rounded-xl bg-violet-500 px-3 py-2 font-[500] text-white"
          onClick={(e) => handleAddProduct(e)}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
