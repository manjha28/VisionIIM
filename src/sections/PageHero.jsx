export default function PageHero({ eyebrow, title, body }) {
  return (
    <section className="phero">
      <div className="container">
        <span className="pill pill--light"><i />{eyebrow}</span>
        <h1 className="phero__h1">{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  );
}