import SideBar from "../UI/organisms/Sidebar/SideBar";

const DefaultTemplate = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="d-flex flex-row bg-info">
      {/* <TopBar /> */}
      <SideBar />
      <div className="bg-danger">{children}</div>
    </div>
  );
};

export default DefaultTemplate;
