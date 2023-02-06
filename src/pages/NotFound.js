import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        delectus, suscipit sapiente id recusandae dolor commodi laudantium
        perferendis nesciunt veniam cumque doloremque accusantium. Eligendi
        delectus quaerat corrupti culpa. Blanditiis, voluptatem!
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
