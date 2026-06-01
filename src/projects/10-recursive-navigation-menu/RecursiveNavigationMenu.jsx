import MenuList from "./MenuList";

function RecursiveNavigationMenu({ menus = [] }) {
  return (
    <>
      <div className="tree-view-conatiner">
        <MenuList list={menus} />
      </div>
    </>
  );
}

export default RecursiveNavigationMenu;
