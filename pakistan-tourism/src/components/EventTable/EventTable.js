import classes from "./EventTable.module.css";

export const EventTable = () => {
  return (
    <div>
      <ul className={classes.responsive_table}>
        <li className={classes.table_header}>
          <div className={(classes.col, classes.col_1)}>Job Id</div>
          <div className={(classes.col, classes.col_2)}>Customer Name</div>
          <div className={(classes.col, classes.col_3)}>Amount Due</div>
          <div className={(classes.col, classes.col_4)}>Payment Status</div>
        </li>
        <li className={classes.table_row}>
          <div className={(classes.col, classes.col_1)} data-label='Job Id'>
            42235
          </div>
          <div
            className={(classes.col, classes.col_2)}
            data-label='Customer Name'
          >
            John Doe
          </div>
          <div className={(classes.col, classes.col_3)} data-label='Amount'>
            $350
          </div>
          <div
            className={(classes.col, classes.col_4)}
            data-label='Payment Status'
          >
            Pending
          </div>
        </li>
      </ul>
    </div>
  );
};
