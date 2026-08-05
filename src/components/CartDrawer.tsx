"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import Image from "next/image";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, cartTotal } = useCart();
  const { t, dir } = useLanguage();

  const [orderType, setOrderType] = useState<"dine-in" | "takeaway">("dine-in");
  const [tableNo, setTableNo] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*New Order!*\n`;
    if (orderType === "dine-in") {
      message += `Type: Dine-In (Table ${tableNo || "N/A"})\n`;
    } else {
      message += `Type: Takeaway (Name: ${customerName || "N/A"})\n`;
    }
    
    message += `----------------\n`;
    cartItems.forEach(item => {
      message += `${item.quantity}x ${item.title} - ${item.price} SAR\n`;
    });
    message += `----------------\n`;
    message += `*Total: ${cartTotal} SAR*\n`;

    if (instructions.trim()) {
      message += `Note: ${instructions}\n`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923363118022?text=${encoded}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: dir === "rtl" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: dir === "rtl" ? "-100%" : "100%" }}
            transition={{ type: "tween", ease: "circOut", duration: 0.35 }}
            style={{ willChange: "transform" }}
            className="fixed top-0 bottom-0 end-0 z-[101] w-full max-w-md bg-espo-900 border-s border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-display text-espo-100">{t.cart.title}</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-2"
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <p className="text-white/50 text-center mt-10">{t.cart.empty}</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      {item.image && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-terracotta text-sm font-semibold">{item.price} SAR</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 bg-black/30 rounded-full px-2 py-1 border border-white/10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >-</button>
                        <span className="text-white text-sm w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >+</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Order Options */}
              {cartItems.length > 0 && (
                <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-white">
                      <input 
                        type="radio" 
                        name="orderType" 
                        value="dine-in" 
                        checked={orderType === "dine-in"}
                        onChange={() => setOrderType("dine-in")}
                        className="accent-terracotta"
                      />
                      <span>{t.cart.dineIn}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-white">
                      <input 
                        type="radio" 
                        name="orderType" 
                        value="takeaway" 
                        checked={orderType === "takeaway"}
                        onChange={() => setOrderType("takeaway")}
                        className="accent-terracotta"
                      />
                      <span>{t.cart.takeaway}</span>
                    </label>
                  </div>

                  <AnimatePresence mode="wait">
                    {orderType === "dine-in" ? (
                      <motion.div
                        key="dine-in"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <input 
                          type="text" 
                          placeholder={t.cart.tableNo} 
                          value={tableNo}
                          onChange={(e) => setTableNo(e.target.value)}
                          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terracotta transition-colors"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="takeaway"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <input 
                          type="text" 
                          placeholder={t.cart.customerName} 
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terracotta transition-colors"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <textarea 
                    placeholder={t.cart.instructions}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    rows={2}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-terracotta transition-colors resize-none"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/70">{t.cart.total}</span>
                  <span className="text-2xl font-bold text-white">{cartTotal} SAR</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-terracotta hover:bg-[#8f4633] text-white rounded-xl py-4 font-semibold shadow-lg shadow-terracotta/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t.cart.checkout}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
