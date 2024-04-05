import { useRecoilValue } from "recoil";
import "./list.screen.scss";
import { getManyList } from "recoil/recoil.store";

const ListScreen = () => {
  const lists = useRecoilValue(getManyList);

  return (
    <div className="list_screen_container">
      <div className="heading">Lists</div>
      <div className="list_wrapper">
        {lists &&
          lists.map((item: any, i: number) => {
            return <div>{`${i + 1}. ${item.name}`}</div>;
          })}
      </div>
    </div>
  );
};

export default ListScreen;
