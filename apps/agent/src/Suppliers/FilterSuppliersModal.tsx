import { useState } from "react";
import { useRouter } from "next/router";
import { HiOutlineFunnel, HiFunnel, HiXMark } from "react-icons/hi2";
import { formatCategoryName } from "@sahil/lib/strings";

const FilterSuppliersModal = () => {
  const [category, setCategory] = useState<string>("");
  const router = useRouter();

  const handleSubmit = () => {
    if (category) {
      router.push({ pathname: router.pathname, query: { category: category } });
    } else {
      router.push({ pathname: router.pathname });
    }
  };

  const handleCategoryClick = (cat: string) => {
    category === cat ? setCategory("") : setCategory(cat);
  };

  const categories = [
    "agricultural_supplies",
    "construction_materials",
    "electronics_appliances",
    "transportation_solutions",
    "educational_materials",
    "energy_solutions",
    "clothing_and_textiles",
    "health_and_safety",
    "home_and_living",
    "beauty_and_care",
    "office_supplies",
    "food_and_beverages",
    "waste_and_recycling",
    "water_and_sanitation",
  ];
  return (
    <>
      <button
        className="btn btn-sm normal-case"
        onClick={() => {
          // @ts-expect-error
          return document.getElementById("filter_suppliers_modal")?.showModal();
          }
        }
      >
        {category ? (
          <>
            <HiFunnel className="text-lg text-primary" />
            <span>{formatCategoryName(category)}</span>
          </>
        ) : (
          <>
            <HiOutlineFunnel className="text-lg" />
            <span>Filter</span>
          </>
        )}
      </button>
      <dialog id="filter_suppliers_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <HiXMark />
            </button>
          </form>
          <h3 className="font-bold text-lg">Filter Suppliers</h3>
          <div className="my-4 flex flex-col items-end gap-4">
            <div className="space-y-2">
              <span>Select a category</span>
              <div className="bg-gray-100 py-4 px-2 rounded-xl text-sm flex flex-wrap gap-2">
                {categories.map((cat) => {
                  return (
                    <button key={cat} onClick={() => handleCategoryClick(cat)}>
                      <span
                        className={`badge badge-sm lg:badge-md ${
                          cat === category ? "badge-primary" : "badge-outline"
                        }`}
                      >
                        {formatCategoryName(cat)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form method="dialog">
              <button onClick={handleSubmit} className="btn btn-sm btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default FilterSuppliersModal;
