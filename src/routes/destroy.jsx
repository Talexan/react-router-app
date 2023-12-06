import { redirect } from "react-router-dom";
import { deleteContact } from "../contact";

export const action = async ({ params }) => {
  //throw Error("This is direct throw error ");
  await deleteContact(params.contactId);
  return redirect("/");
};
