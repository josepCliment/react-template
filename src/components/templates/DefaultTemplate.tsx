import SideBar from "../UI/organisms/Sidebar/SideBar";

const DefaultTemplate = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="d-flex flex-row vh-100 w-100">
      <SideBar />
      <div className="p-5 w-100 bg-secondary">
        {children}
      </div>
    </div>
  );
};

export default DefaultTemplate;
