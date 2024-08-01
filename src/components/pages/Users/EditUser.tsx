import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersData } from "../../../api/users/usersList";
import { User } from "../../../utils/typos/User";
import DefaultTemplate from "../../templates/DefaultTemplate";
import ItemNotFound from "../../UI/atoms/NotFound/ItemNotFound";

const EditUser = () => {
  const [user, setUser] = useState<User>();
  const [loaded, setLoaded] = useState<boolean>(false);

  const params = useParams();

  const fetchUser = () => {
    if (params.id) {
      const id: number = +params?.id;
      const userFetched = UsersData.filter((item) => item.id === id)[0];
      setUser(userFetched);
      setLoaded(true)
    }
  };

  useEffect(fetchUser, []);

  return (
    <DefaultTemplate loaded={loaded}>
      {!user ? <ItemNotFound title="User not found" /> :<div>

      </div>}
    </DefaultTemplate>
  );
};

export default EditUser;
