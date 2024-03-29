/* eslint-disable no-unused-vars */
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import Star from "./Star";

const filters = [
  {
    id: "valoraciones",
    name: "Valoraciones",
    options: [
      { value: "1", label: "1 Star", checked: false },
      { value: "2", label: "2 Star", checked: false },
      { value: "3", label: "3 Star", checked: true },
      { value: "4", label: "4 Star", checked: false },
      { value: "5", label: "5 Star", checked: false },
    ],
  },
  {
    id: "local",
    name: "Local",
    options: [
      { value: "restaurante", label: "Restaurante", checked: false },
      { value: "pub", label: "Pub", checked: false },
    ],
  },
  {
    id: "precios",
    name: "Precios",
    options: [
      { value: "bajo", label: "Más bajo", checked: false },
      { value: "alto", label: "Más alto", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Filters() {
  const [openFilters, setOpenFilters] = useState({
    valoraciones: false,
    local: false,
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

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleLocalChange = (local) => {
    setSelectedLocal(local);
  };

  const handlePriceFilterChange = (priceFilter) => {
    setSelectedPriceFilter(priceFilter);
  };

  return (
    <div className="bg-pdark-grey">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section
          aria-labelledby="products-heading"
          className="pb-23 pt-2 ml-15"
        >
          <form className="hidden lg:block w-full">
            <div className="flex flex-wrap w-full">
              {filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b py-6 flex-grow"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button
                          className="flex items-center justify-between bg-porange py-3 text-lg text-gray-600 hover:text-gray-500 w-full"
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
                        <div className="space-y-4 text-[#fff]">
                          {section.id === "valoraciones" && (
                            <Star onChange={handleRatingChange} />
                          )}
                          {section.id === "local" && (
                            <div>
                              {section.options.map((option) => (
                                <div key={option.value}>
                                  <input
                                    className="mr-1 size-5 text-lg"
                                    type="checkbox"
                                    id={option.value}
                                    name="local-filter"
                                    checked={selectedLocal === option.value}
                                    onChange={() =>
                                      handleLocalChange(option.value)
                                    }
                                  />
                                  <label htmlFor={option.value}>
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
                                    className="mr-1 size-5 text-lg"
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
