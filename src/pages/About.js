import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("Anita");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fuga soluta
        aliquid quaerat ab, non, facere optio, a quas aspernatur ex explicabo?
        Culpa unde impedit magnam laboriosam omnis numquam earum?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fuga soluta
        aliquid quaerat ab, non, facere optio, a quas aspernatur ex explicabo?
        Culpa unde impedit magnam laboriosam omnis numquam earum?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea fuga soluta
        aliquid quaerat ab, non, facere optio, a quas aspernatur ex explicabo?
        Culpa unde impedit magnam laboriosam omnis numquam earum?
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
