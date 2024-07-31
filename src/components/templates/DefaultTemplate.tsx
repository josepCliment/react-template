import SideBar from "../UI/organisms/Sidebar/SideBar";
import TopBar from "../UI/organisms/Sidebar/TopBar";

const DefaultTemplate = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div className="d-flex flex-column position-realtive">
      <TopBar />
      <div className="bg-light d-flex">
        <div
          style={{
            top: 75,
            bottom: 0,
            transition: ".3s",
            zIndex: 1000,

            left: "-100vw",
          }}
        >
          <SideBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DefaultTemplate;
