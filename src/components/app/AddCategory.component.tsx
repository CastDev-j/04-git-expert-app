import { useState } from "react";

interface AddCategoryComponentProps {
  onNewCategory: (category: string) => void;
  categories: string[];
}

const AddCategoryComponent = ({ onNewCategory, categories }: AddCategoryComponentProps) => {
  const [InputValue, setInputValue] = useState("");
  const [errorState, setErrorState] = useState(false);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
    setErrorState(false);
  };

  const handleAddCategory = (event: React.FormEvent) => {
    event.preventDefault();
    if (InputValue.trim().length <= 0 || categories.includes(InputValue)) {
      setErrorState(true);
      return;
    }

    onNewCategory(InputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <section className="flex w-full justify-center">
        <form
          onSubmit={handleAddCategory}
          className="flex flex-grow justify-between items-center mb-2 gap-2 max-w-3xl p-4 rounded-md"
        >
          <p
            className={`text-red-400 absolute  text-sm -mb-20 ml-3  ${
              errorState ? "error active" : "error"
            }
              `}
          >
            Please enter a valid category...
          </p>

          <input
            type="text"
            placeholder="Gift Category..."
            value={InputValue}
            onChange={onInputChange}
            className="p-2 flex-grow border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <button
            type="submit"
            className="p-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            Add New
          </button>
        </form>
      </section>

      <hr />
    </>
  );
};

export default AddCategoryComponent;
