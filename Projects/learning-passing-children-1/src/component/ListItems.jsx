import styles from "./ListItems.module.css";

function ListItems({ items }) {
  return (
    <ul className="list-group">
      <li className="list-group-item active" aria-current="true">
        Mess Menu
      </li>
      {items.map((fitems) => (
        <li key={fitems} className="list-group-item">
          {fitems}
          <button
            onClick={() => alert(`${fitems} bought`)}
            className={`${styles.listBtn} btn btn-info`}
          >
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
