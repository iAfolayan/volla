import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

const SidebarComponent = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar transitionDuration={1000} className="h-screen">
      <div className="flex justify-between p-4 my-2 h-10 border-b-gray-700">
        <p className="text-xl font-bold">Admin</p>
        <p className="text-lg cursor-pointer" onClick={() => collapseSidebar()}>
          =
        </p>
      </div>
      <div className="divider"></div>
      <div className="w-20 h-20 rounded-full bg-slate-500 mx-auto my-4"></div>
      <Menu
        renderExpandIcon={({ open }) => <span className="font-bold">{open ? "-" : "+"}</span>}
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "#000000",
                backgroundColor: active ? "#eecef9" : undefined,
              };
          },
        }}
      >
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem active> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
