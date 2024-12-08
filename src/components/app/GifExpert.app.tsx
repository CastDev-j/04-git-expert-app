import { useState } from "react";
import AddCategoryComponent from "./AddCategory.component";
import GifGridProps from "./GifGrid.component";


const GiftExpertApp = () => {
  const [categories, setcategories] = useState<string[]>([]);

  const onAddCategory = (category: string) => {
    setcategories([category, ...categories]);
  };

  return (
    <>
      <h1 className="text-2xl font-light text-slate-600 mb-2 w-full text-center">
        Gif Expert App with React
      </h1>

      <hr />

      {/* Input */}
      <AddCategoryComponent
        onNewCategory={onAddCategory}
        categories={categories}
      />

      {/* Listado de gif */}
      {categories.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <GifGridProps category={category} key={category} />
          ))}
        </section>
      )}

      {categories.length <= 0 && (
        <div className="flex flex-col items-center mt-4 min-h-32 justify-center">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          <p className="text-gray-500 mt-2">
            Create new categories to see GIFs
          </p>
        </div>
      )}

      {/* Gif Item */}
    </>
  );
};

export default GiftExpertApp;
