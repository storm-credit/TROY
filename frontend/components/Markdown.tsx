import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

/**
 * Server-rendered markdown view for harness / song brief / visual cut / bible.
 * Wrap in `.troy-prose` for typography.
 */
export function Markdown({ source }: { source: string }) {
  return (
    <div className="troy-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {source}
      </ReactMarkdown>
    </div>
  )
}

/**
 * Render manuscript as serif paragraphs split on blank lines.
 * Manuscript is plain prose, not markdown — keep it that way.
 */
export function Manuscript({ source }: { source: string }) {
  const paragraphs = source
    .split(/\n\s*\n+/)
    .map((p) => p.replace(/^\s+|\s+$/g, ''))
    .filter((p) => p.length > 0)

  return (
    <div className="troy-manuscript">
      {paragraphs.map((p, i) => (
        <p key={i}>
          {p.split('\n').map((line, j, arr) => (
            <span key={j}>
              {line}
              {j < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}
