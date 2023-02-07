import {
  EventForm,
  EventTable,
  MainLayout,
  ProfileCardComponent,
} from "../../components";
import classes from "./AdminPannelPage.module.css";

export const AdminPannelPage = () => {
  return (
    <MainLayout>
      <div className={classes.wrapper}>
        <ProfileCardComponent></ProfileCardComponent>
        <EventTable></EventTable>
      </div>
    </MainLayout>
  );
};
