import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { person, siteConfig } from '../content/site';

export const ogSize = { width: 1200, height: 630 };

function truncate(text, max) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(' ', max))}…`;
}

// Shared 1200×630 social card used by the generated opengraph-image routes.
export async function renderOgCard({ eyebrow, title, description }) {
  const avatar = await readFile(join(process.cwd(), 'public', 'images', 'adarsh-illustrated-256.jpg'), 'base64');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#ffffff',
          color: '#111111',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img src={`data:image/jpeg;base64,${avatar}`} width={72} height={72} style={{ borderRadius: '999px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 30, fontWeight: 600 }}>{person.name}</span>
            <span style={{ fontSize: 22, color: '#6c7179' }}>{person.jobTitle}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {eyebrow && (
            <span
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                fontSize: 22,
                padding: '8px 18px',
                borderRadius: '999px',
                background: '#bdee63',
              }}
            >
              {eyebrow}
            </span>
          )}
          <span style={{ fontSize: title.length > 60 ? 56 : 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em' }}>{title}</span>
          {description && (
            <span style={{ fontSize: 26, color: '#6c7179', lineHeight: 1.4 }}>
              {truncate(description, 140)}
            </span>
          )}
        </div>
        <span style={{ fontSize: 22, color: '#6c7179' }}>{new URL(siteConfig.url).host}</span>
      </div>
    ),
    ogSize,
  );
}
