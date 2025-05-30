// components/Wraps.js
import React from 'react'
import { useCartContext } from '@/context/CartContext'
import ProductModal from './ProductModal'

const wrapItems = [
  {
    id: 'syndicate-wrap',
    name: 'Syndicate Wrap',
    description:
      'Juicy grilled chicken glazed in bold Sweet Chilli sauce, layered with crisp lettuce, crunchy onions and premium toppings — all wrapped in a soft, warm tortilla.',
    price: 645,
    image: '/images/wraps/syndicate-wrap.jpg',
  },
  {
    id: 'hitman-wrap',
    name: 'Hitman Wrap',
    description:
      'Juicy grilled chicken thigh drenched in our Fiery Peri sauce, stacked with fresh lettuce, crisp onions and melted cheese — sealed inside a warm tortilla.',
    price: 645,
    image: '/images/wraps/fiery-peri-hitman.jpg',
  },
  {
    id: 'supreme-wrap',
    name: 'Supreme Wrap',
    description:
      'Creamy grilled chicken thigh folded with garlic mayo, premium lettuce, and classic toppings — all tucked into a soft, warm tortilla.',
    price: 645,
    image: '/images/wraps/malai-boti-supreme.jpg',
  },
]

export default function Wraps() {
  const { addToCart, openModal } = useCartContext()

  return (
    <section id="wraps" className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Wraps</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {wrapItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg transition"
            onClick={() => openModal(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-black">Rs {item.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(item)
                  }}
                  className="px-4 py-2 rounded-full text-sm bg-[#f2aa21] hover:bg-[#e29a1e] text-white transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* This modal component listens to openModal and shows item details */}
      <ProductModal />
    </section>
  )
}
