// Renders schema.org structured data. `<` is escaped to prevent script injection.
export default function JsonLd({ data }) {
  const payload = Array.isArray(data)
    ? { '@context': 'https://schema.org', '@graph': data }
    : { '@context': 'https://schema.org', ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, '\\u003c') }}
    />
  );
}
