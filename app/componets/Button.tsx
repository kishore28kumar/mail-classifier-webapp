import React, { Children } from "react";

type SecondaryButtonProps = {
  id: string;
  onClick?: () => void;
  dataDropdownToggle?: string;
  className?: string;
  svg?: React.ReactNode;
  children: React.ReactNode;
};

export const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black dark:border-2 dark:border-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({
  id,
  onClick,
  dataDropdownToggle,
  className = "",
  svg,
  children,
}: SecondaryButtonProps) => {
  return (
    <button
      id={id}
      className={`focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${className}`}
      onClick={onClick}
      type="button"
      data-dropdown-toggle={dataDropdownToggle}
    >
      {children}
      {svg}
    </button>
  );
};
