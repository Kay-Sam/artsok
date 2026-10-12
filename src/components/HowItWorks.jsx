import { steps } from "../data.js";

export default function HowItWorks() {
  return (
    <section id="works" className="works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.number}>
              <span className="step-number">{s.number}</span>
              <i className={`fa-solid ${s.icon}`}></i>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
