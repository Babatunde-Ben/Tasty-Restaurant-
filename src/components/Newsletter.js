import React from "react";
import "../css/newsletter.css";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.match(pattern)) {
      // alert(`invalid email`);
      Swal.fire({
        icon: "error",
        title: "Invalid email",
      });
    } else {
      setEmail("");
      // alert(`form submitted`);
      Swal.fire({
        icon: "success",
        title: "Email Received",
      });
    }
  };
  return (
    <section className="newsletter-section">
      <h3>Stay in touch</h3>
      <p className="promo">
        Get 10% off your first purchase by joining our mailing list, and receive
        some of the best deals possible..
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="youremail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
