import { SecondaryButton } from "./Button";

export const Container = () => {
  return (
    <main className="px-7 py-5">
      <div className="flex justify-between">
        <SecondaryButton
          id="dropdownDefaultButton"
          className="text-white bg-black hover:bg-white hover:text-black dark:bg-black dark:hover:bg-white dark:text-white dark:hover:text-black dark:border-2 dark:border-black"
          dataDropdownToggle="dropdown"
          svg={
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          }
        >
          Show
        </SecondaryButton>
        <SecondaryButton
          id="dropdownCheckboxButton"
          className="text-black bg-white border-2 border-black hover:bg-black hover:text-white"
          dataDropdownToggle="dropdownCheckboxButton"
          svg={
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          }
        >
          Classify
        </SecondaryButton>
      </div>
      <div>Emails</div>
    </main>
  );
};
