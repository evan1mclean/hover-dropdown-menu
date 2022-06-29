function initalStyle(element) {
  const dropdownElement = element;
  dropdownElement.style.height = "0";
  dropdownElement.style.padding = "0";
  dropdownElement.style.overflow = "hidden";
  dropdownElement.style.transition = "all 300ms ease-in-out";
  return dropdownElement;
}

function dropdownStyle(element) {
    const dropdownElement = element;
    dropdownElement.style.height = "100%";
}

export default function hoverDropDown(item, dropdown) {
  const element = document.querySelector(`.${item}`);
  const dropdownElement = document.querySelector(`.${dropdown}`);

  initalStyle(dropdownElement);

  element.addEventListener("mouseover", () => {
    dropdownStyle(dropdownElement);
  });

  dropdownElement.addEventListener("mouseover", () => {
    dropdownStyle(dropdownElement);
  });

  element.addEventListener("mouseout", () => {
    initalStyle(dropdownElement);
  });

  dropdownElement.addEventListener("mouseout", () => {
    initalStyle(dropdownElement);
  });
}
