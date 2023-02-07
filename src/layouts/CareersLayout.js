import { Outlet } from "react-router-dom";
export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        nulla consectetur dolore dicta explicabo quis repellat quae dignissimos
        corporis possimus ad obcaecati, minus voluptatum praesentium.
        Accusantium ipsam porro in natus?
      </p>
      <Outlet />
    </div>
  );
}
