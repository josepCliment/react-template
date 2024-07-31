const SideBarFooter = () => {
  return (
    <div className="dropdown open">
      <a
        className="text-white text-decoration-none dropdown-toggle p-3"
        type="button"
        id="triggerId"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        href=""
      >
        <i className="bi bi-person-circle"></i>
        <span className="ms-2">Josep</span>
      </a>
      <div className="dropdown-menu" aria-labelledby="triggerId">
        <a className="dropdown-item" href="/">
          Profile
        </a>
        <a className="dropdown-item" href="/">
          Settings
        </a>
      </div>
    </div>
  );
};

export default SideBarFooter;
