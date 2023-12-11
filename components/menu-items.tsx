const menu: string[] = [
  "wealth",
  "social",
  "tech",
  "insider",
  "contact",
  "About",
];
const MenuItems = () => {
  return (
    <div className="lg:flex capitalize gap-8 items-center 2xl:gap-6 hidden">
      {menu.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default MenuItems;
