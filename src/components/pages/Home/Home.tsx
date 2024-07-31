import { UsersData } from "../../../api/users/usersList";
import { UserColumns } from "../../../utils/columns/Users/UserColumns";
import DefaultTemplate from "../../templates/DefaultTemplate";
import TableCustom from "../../UI/molecules/Table/TableCustom";

const Home = () => {
  return (
    <DefaultTemplate>
      <>
        <TableCustom columns={UserColumns} rows={UsersData} actions />
      </>
    </DefaultTemplate>
  );
};

export default Home;
