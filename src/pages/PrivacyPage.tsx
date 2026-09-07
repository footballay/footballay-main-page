import { privacyPolicy } from '@src/config/Privacy';
import './PrivacyPage.scss';

function PrivacyPage() {
  return (
    <main className="privacy-page">
      <article className="privacy-document">
        <header className="privacy-header">
          <p className="privacy-label">PRIVACY POLICY</p>
          <h1>{privacyPolicy.title}</h1>
          <p className="privacy-effective-date">시행일: {privacyPolicy.effectiveDate}</p>
          <p className="privacy-introduction">{privacyPolicy.introduction}</p>
        </header>

        {privacyPolicy.sections.map((section) => (
          <section className="privacy-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.groups.map((group, index) => (
              <div className="privacy-group" key={group.title ?? index}>
                {group.title && <h3>{group.title}</h3>}
                {group.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {group.itemIntro && <p>{group.itemIntro}</p>}
                {group.items && (
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {group.contact && (
                  <address>
                    웹사이트: <a href={group.contact.website}>{group.contact.website}</a>
                    <br />
                    이메일: <a href={`mailto:${group.contact.email}`}>{group.contact.email}</a>
                  </address>
                )}
              </div>
            ))}
          </section>
        ))}

        <p className="privacy-notice">{privacyPolicy.notice}</p>
      </article>
    </main>
  );
}

export default PrivacyPage;
