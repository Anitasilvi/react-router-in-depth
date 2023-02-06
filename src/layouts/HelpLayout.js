import { NavLink, Outlet } from "react-router-dom";
export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat
        nihil saepe unde assumenda delectus rem quod a reprehenderit, nostrum
        temporibus vitae cum ut minima voluptatibus cupiditate reiciendis
        voluptates animi?
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
