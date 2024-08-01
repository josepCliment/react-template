import { useNavigate } from "react-router-dom";
import { UsersData } from "../../../api/users/usersList";
import { UserColumns } from "../../../utils/columns/Users/UserColumns";
import DefaultTemplate from "../../templates/DefaultTemplate";
import TableCustom from "../../UI/molecules/Table/TableCustom";

const Home = () => {

  const navigate = useNavigate();

  const handleEdit = (id: string | number) => {
      navigate(`/user/${id}`);
  };
  const handleRemove = (id: string | number) => {
    console.log("Delete" + id);
  };

  return (
    <DefaultTemplate>
      <div className="w-100 h-100 p-3">
        <TableCustom
          columns={UserColumns}
          rows={UsersData}
          actions
          itemsCount={3}
          itemsPerPage={1}
          onEditActionPressed={handleEdit}
          onDeleteActionPressed={handleRemove}
        />
      </div>
    </DefaultTemplate>
  );
};

export default Home;
