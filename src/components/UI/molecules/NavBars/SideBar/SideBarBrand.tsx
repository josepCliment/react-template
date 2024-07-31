import { Link } from "react-router-dom";

const SideBarBrand = () => {
  return (
    <>
     <Link
        to="/"
        className="text-decoration-none d-flex justify-content-center align-items-center mb-4"
      >
        <span className="fw-bold text-white display-6">Brand</span>
      </Link>
      <hr className="text-white opacity-100" />
    </>
  );
};

export default SideBarBrand;
