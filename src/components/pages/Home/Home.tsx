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
      <>
        <TableCustom
          columns={UserColumns}
          rows={UsersData}
          actions
          onEditActionPressed={handleEdit}
          onDeleteActionPressed={handleRemove}
        />
      </>
    </DefaultTemplate>
  );
};

export default Home;
