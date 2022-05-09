import React from "react";
import "../css/testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="custom-title">
        Testimonials <span></span>
      </h2>
      <div className="testimonies">
        <div className="testimony">
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, ex!"
          </p>
          <h3 className="author">Prisca David</h3>
        </div>
        <div className="testimony">
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, ex!"
          </p>
          <h3 className="author">Phillip Thomas</h3>
        </div>
        <div className="testimony">
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, ex!"
          </p>
          <h3 className="author">Becca Willams</h3>
        </div>
        <div className="testimony">
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, ex!"
          </p>
          <h3 className="author">Ali Soodiq</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
