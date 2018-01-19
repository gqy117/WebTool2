import * as React from "react";
import ContactForm from "../../../components/Contacts/ContactForm";
import connectBase from "./base";

export default connectBase(ContactForm) as typeof ContactForm;
