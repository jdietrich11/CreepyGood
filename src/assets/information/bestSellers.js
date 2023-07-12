const bestSellers = [
  {
    id: 1,
    name: "The Vitruvian Scarecrow",
    type: "Extra Soft",
    price: "24.95",
    img: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/CreepyGood/products/1685448/shirt-1600051280-875cd6ae834c7108ed77607bbbe35ac7.png?v=3&d=eyJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyMDAuMCwgMTM3MS40Mjg1NzE0Mjg1NzEzXSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4NThdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvZTQ2NzUzMGRiNGQ3ZjM4ZTEyMTk2ZTcyYjFiMjBkYmQvZnJvbnQtMTUzNTQ3NDY1NS01MjFiNTBkZGQ4ZWEyYjk4ZDU5MjcwMmYxYWQzN2FiMS5wbmciXSwgeyJ5IjogNDk2LCAieCI6IDU4MywgImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDUwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dLCAiZm9yY2UiOiBmYWxzZSwgIm9ubHlfbWV0YSI6IGZhbHNlfQ==",
  },
  {
    id: 2,
    name: "Spooky",
    type: "Ringer T-Shirt",
    price: "27.95",
    img: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/CreepyGood/products/1784980/shirt-1604172847-ed7aa6fad8ee0ad6f4bcdb16b068c142.png?v=3&d=eyJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyMDAuMCwgMTM3MS40Mjg1NzE0Mjg1NzEzXSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3MDRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvZTFmNDNlNTYwZDk4YWU0NzFkZGZiNWI2YzVkY2Y1NmYvZnJvbnQtMTU4NTI0MDIxMC0yYmMzNzU3ZWUxMzg3OGQ3MzI4YTFhYjU5ZTg1ZDhiYy5wbmciXSwgeyJ5IjogNDgzLCAieCI6IDYzMywgImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDUwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dLCAiZm9yY2UiOiBmYWxzZSwgIm9ubHlfbWV0YSI6IGZhbHNlfQ==",
  },
  {
    id: 3,
    name: "Pride of Frankenstein",
    type: "Extra Soft",
    price: "24.95",
    img: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/CreepyGood/products/1740864/shirt-1602213792-281015856cf461e55643fcb0354c5b97.png?v=3&d=eyJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyMDAuMCwgMTM3MS40Mjg1NzE0Mjg1NzEzXSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4NThdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvZTQ2NzUzMGRiNGQ3ZjM4ZTEyMTk2ZTcyYjFiMjBkYmQvZnJvbnQtMTUzNTQ3NDY1NS01MjFiNTBkZGQ4ZWEyYjk4ZDU5MjcwMmYxYWQzN2FiMS5wbmciXSwgeyJ5IjogNDk2LCAieCI6IDU4MywgImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDUwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dLCAiZm9yY2UiOiBmYWxzZSwgIm9ubHlfbWV0YSI6IGZhbHNlfQ==",
  },
  {
    id: 4,
    name: "Faded",
    type: "Classic",
    price: "22.95",
    img: "https://cdn-images.threadless.com/threadless-media/artist_shops/shops/CreepyGood/products/1785351/shirt-1604191276-123e892b8409defe29097fb6fd8da333.png?v=3&d=eyJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyMDAuMCwgMTM3MS40Mjg1NzE0Mjg1NzEzXSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs3MDRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvZTFmNDNlNTYwZDk4YWU0NzFkZGZiNWI2YzVkY2Y1NmYvZnJvbnQtMTU4NTI0MDIxMC0yYmMzNzU3ZWUxMzg3OGQ3MzI4YTFhYjU5ZTg1ZDhiYy5wbmciXSwgeyJ5IjogNDgzLCAieCI6IDYzMywgImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInRyaW0iLCBbXSwge31dLCBbImNhbnZhc19jZW50ZXJlZCIsIFs1MDAsIDUwMCwgIiNGRkZGRkYiXSwge31dLCBbImVuY29kZSIsIFsianBnIiwgODVdLCB7fV1dLCAiZm9yY2UiOiBmYWxzZSwgIm9ubHlfbWV0YSI6IGZhbHNlfQ==",
  },
];

export default bestSellers;
