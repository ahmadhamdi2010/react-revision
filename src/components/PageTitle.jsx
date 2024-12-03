import React from "react";

const PageTitle = ({title, subtitle}) => {
  return (
    <section className="bg-blue py-[70px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h2 className="mb-2 text-2xl font-semibold text-dark dark:text-black">
            {title}
          </h2>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;