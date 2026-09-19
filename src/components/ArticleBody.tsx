import type { ArticleSection } from '../data/articles'
import { AlertIcon } from './Icons'

/** Renders the lightweight markup used in article data:
 *  "- " bullet, "# " numbered step, "### " sub-heading, "> " callout,
 *  "! " warning list item, "| " table row (cells split by " | ") */
export default function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="article-body">
      {sections.map((section, si) => (
        <section key={si}>
          <h2>{section.heading}</h2>
          <RenderBlocks lines={section.body} />
        </section>
      ))}
    </div>
  )
}

function RenderBlocks({ lines }: { lines: string[] }) {
  const out: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('### ')) {
      out.push(<h3 key={key++}>{line.slice(4)}</h3>)
      i++
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      out.push(
        <ul key={key++}>
          {items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>,
      )
    } else if (line.startsWith('# ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('# ')) {
        items.push(lines[i].slice(2))
        i++
      }
      out.push(
        <ol key={key++} className="space-y-3 !list-none !ml-0">
          {items.map((it, j) => (
            <li key={j} className="flex gap-3.5">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-forest text-parch text-sm font-bold flex items-center justify-center mt-0.5">
                {j + 1}
              </span>
              <span className="flex-1">{it}</span>
            </li>
          ))}
        </ol>,
      )
    } else if (line.startsWith('! ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('! ')) {
        items.push(lines[i].slice(2))
        i++
      }
      out.push(
        <div key={key++} className="my-5 rounded-xl bg-[#f9e8e1] border border-terracotta/25 p-5">
          <div className="flex items-center gap-2 mb-3 text-terracotta-dark font-semibold text-sm uppercase tracking-wider">
            <AlertIcon className="w-4.5 h-4.5" /> Watch for these signs
          </div>
          <ul className="!m-0 space-y-2">
            {items.map((it, j) => (
              <li key={j} className="!pl-6 before:!bg-terracotta">{it}</li>
            ))}
          </ul>
        </div>,
      )
    } else if (line.startsWith('> ')) {
      out.push(
        <div key={key++} className="my-5 rounded-xl bg-secondary border-l-4 border-tangerine p-4 pl-5 text-forest font-medium">
          {line.slice(2)}
        </div>,
      )
      i++
    } else if (line.startsWith('| ')) {
      const rows: string[][] = []
      while (i < lines.length && lines[i].startsWith('| ')) {
        rows.push(lines[i].slice(2).split(' | '))
        i++
      }
      const [head, ...body] = rows
      out.push(
        <div key={key++} className="my-6 overflow-x-auto rounded-xl border border-[#e8ddc9]">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-forest text-parch text-left">
                {head.map((cell, j) => (
                  <th key={j} className="px-4 py-3 font-semibold">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, j) => (
                <tr key={j} className={j % 2 ? 'bg-white' : 'bg-[#faf5ea]'}>
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-3 align-top">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
    } else {
      out.push(<p key={key++}>{line}</p>)
      i++
    }
  }

  return <>{out}</>
}
