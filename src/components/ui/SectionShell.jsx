/**
 * SectionShell — temporary scaffolding wrapper for not-yet-built
 * sections. Renders a semantic <section> with a stable id, an
 * accessible heading and a visible development label.
 *
 * Detailed visual design is intentionally deferred; this only
 * establishes structure, IDs and landmarks.
 */

function SectionShell({ id, devLabel, title, children }) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="container">
        <div className="section-shell">
          <div className="section-shell__inner">
            <span className="dev-label">
              <span className="dev-label__dot" aria-hidden="true" />
              DEV · {devLabel}
            </span>
            <h2 id={headingId}>{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionShell;
