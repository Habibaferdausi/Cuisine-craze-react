import React from "react";

const Blogs = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-transparent relative rounded flex items-center"
        style={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1681401646535-f148373d5ef3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)`,
          height: "300px",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

        <div className="text-center rounded absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-2xl lg:text-5xl lg:p-4 font-semibold">
            Blog Page
          </h1>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-yellow-500 text-center mt-8">
              Explore Cuisine Craze
            </h1>

            <div className="p-6">
              <p className="text-lg text-gray-700 mb-4">
                Cuisine Craze is renowned for its diverse flavors, aromatic
                spices, and vibrant dishes. It is a culinary journey that
                encompasses various regional styles and centuries of culinary
                tradition.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From the bold and spicy flavors of Sichuan cuisine to the
                delicate dim sum of Cantonese cuisine, Chinese food offers a
                wide range of options to tantalize your taste buds.
              </p>
              <blockquote className="bg-green-100 border-l-4 border-yellow-500 text-yellow-900 p-4 my-6">
                "Cuisine Craze is not just about the taste; it's an art form
                that balances color, texture, and aroma to create harmonious
                dishes."
              </blockquote>
              <p className="text-lg text-gray-700 mb-4">
                The key components of Chinese cuisine include rice, noodles,
                fresh vegetables, tofu, and a variety of meats and seafood. The
                art of stir-frying, steaming, and braising techniques brings out
                the unique flavors and textures in each dish.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Chinese cuisine is also known for its use of aromatic spices and
                seasonings such as soy sauce, ginger, garlic, and five-spice
                powder. These ingredients add depth and complexity to the
                dishes.
              </p>
              <h2 className="text-2xl font-bold mb-4">
                Popular Chinese Dishes
              </h2>
              <ul className="list-disc ml-6">
                <li className="text-lg text-gray-700 mb-2">
                  Kung Pao Chicken: A spicy stir-fry dish with tender chicken,
                  peanuts, and vegetables, flavored with a savory sauce.
                </li>
                <li className="text-lg text-gray-700 mb-2">
                  Peking Duck: A famous dish featuring crispy roasted duck
                  served with thin pancakes, scallions, and hoisin sauce.
                </li>
                <li className="text-lg text-gray-700 mb-2">
                  Mapo Tofu: A flavorful dish made with soft tofu, minced pork,
                  and a spicy Sichuan pepper sauce.
                </li>
                <li className="text-lg text-gray-700 mb-2">
                  Dim Sum: Bite-sized steamed or fried dumplings filled with
                  various ingredients such as shrimp, pork, or vegetables.
                </li>
                <li className="text-lg text-gray-700 mb-2">
                  Hot and Sour Soup: A hearty soup with a balance of spicy and
                  sour flavors, typically made with mushrooms, tofu, and bamboo
                  shoots.
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-4">
                Chinese cuisine offers an incredible variety of dishes, from
                comforting noodles to elaborate banquet-style meals. Each region
                has its specialties and unique culinary traditions, making
                Chinese food a fascinating and delicious experience.
              </p>
              <div className="flex items-center justify-center mt-6">
                <a
                  href="/more-articles"
                  className="bg-yellow-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg"
                >
                  Read More Articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
