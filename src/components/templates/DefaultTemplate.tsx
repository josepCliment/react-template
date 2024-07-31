import SideBar from "../UI/organisms/Sidebar/SideBar";

const DefaultTemplate = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="d-flex flex-row">
      {/* <TopBar /> */}
      <SideBar />
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

export default DefaultTemplate;
