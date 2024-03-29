/* eslint-disable no-unused-vars */
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

const filters = [
  {
    id: "valoraciones",
    name: "Valoraciones",
    options: [
      { value: "1", label: "1 estrella" },
      { value: "2", label: "2 estrellas" },
      { value: "3", label: "3 estrellas" },
      { value: "4", label: "4 estrellas" },
      { value: "5", label: "5 estrellas" },
    ],
  },
  {
    id: "categoria",
    name: "Categoria",
    options: [
      { value: "restaurante", label: "Restaurante" },
      { value: "bar", label: "Bar" },
    ],
  },
  {
    id: "precios",
    name: "Precios",
    options: [
      { value: "bajo", label: "Más bajo" },
      { value: "alto", label: "Más alto" },
    ],
  },
];

export default function Filters() {
  const [openFilters, setOpenFilters] = useState({
    valoraciones: false,
    categoria: false,
    precios: false,
  });

  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);

  const toggleFilter = (filterId) => {
    setOpenFilters((prevState) => ({
      ...prevState,
      [filterId]: !prevState[filterId],
    }));
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleLocalChange = (categoria) => {
    setSelectedLocal(categoria);
  };

  const handlePriceFilterChange = (priceFilter) => {
    setSelectedPriceFilter(priceFilter);
  };

  return (
    <div className="bg-pdark-grey bg-porange rounded-lg">
      <main className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8 ">
        <section
          aria-labelledby="products-heading"
          className="pb-21 pt-2 ml-14"
        >
          <form className="hidden lg:block w-full">
            <div className="flex flex-wrap w-full">
              {filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className=" py-4 flex-grow"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button
                          className="flex items-center justify-between  bg-porange py-3 text-lg text-gray-600 hover:text-gray-500 w-full"
                          onClick={() => toggleFilter(section.id)}
                        >
                          <span className="font-medium text-[#fff]">
                            {section.name}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        className="pt-6"
                        open={openFilters[section.id]}
                      >
                        <div className="space-y-4 text-[#fff]  ">
                          {section.id === "valoraciones" && (
                            <select
                              value={selectedRating}
                              onChange={handleRatingChange}
                              className="block w-40 py-2 px-1 border  text-black border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:text-lg"
                            >
                              {section.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          )}
                          {section.id === "categoria" && (
                            <div>
                              {section.options.map((option) => (
                                <div key={option.value}>
                                  <input
                                    className="mr-2 size-5 text-lg"
                                    type="checkbox"
                                    id={option.value}
                                    name="categoria-filter"
                                    checked={selectedLocal === option.value}
                                    onChange={() =>
                                      handleLocalChange(option.value)
                                    }
                                  />
                                  <label
                                    className="py-0"
                                    htmlFor={option.value}
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}
                          {section.id === "precios" && (
                            <div>
                              {section.options.map((option) => (
                                <div key={option.value}>
                                  <input
                                    className="mr-2 size-5 text-lg"
                                    type="checkbox"
                                    id={option.value}
                                    name="price-filter"
                                    checked={
                                      selectedPriceFilter === option.value
                                    }
                                    onChange={() =>
                                      handlePriceFilterChange(option.value)
                                    }
                                  />
                                  <label htmlFor={option.value}>
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
