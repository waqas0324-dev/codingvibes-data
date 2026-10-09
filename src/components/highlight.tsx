// W3Schools-style syntax highlighter — multi-color code display.
// Parses code into tokens and wraps them in colored spans.
// Colors: HTML tags blue, attributes orange, values green, comments gray, etc.
import React from 'react';

let keyCounter = 0;
const k = () => 'hl-' + (keyCounter++);

function esc(s: string): string { return s; } // React handles escaping

type Tok = { t: string; c: string }; // text, className

const CLS = {
  tag: 'tok-tag',       // <html> brackets + tag name — blue
  attr: 'tok-attr',     // attribute names — orange
  val: 'tok-val',       // attribute values — green
  txt: 'tok-txt',       // plain text — light
  com: 'tok-com',       // comments — gray italic
  sel: 'tok-sel',       // CSS selector — yellow
  prop: 'tok-prop',     // CSS property — blue
  cval: 'tok-cval',     // CSS value — green
  kw: 'tok-kw',         // JS keyword — purple
  str: 'tok-str',       // JS string — green
  fn: 'tok-fn',         // JS function — blue
  num: 'tok-num',       // numbers — orange
  plain: 'tok-plain',
};

function highlightHTML(code: string): Tok[] {
  const toks: Tok[] = [];
  // Split into: comments, tags, text
  const re = /(<!--[\s\S]*?-->)|(<\/?[a-zA-Z][^>]*?>|<!DOCTYPE[^>]*>)/gi;
  let last = 0, m: RegExpExecArray | null;
  while ((m = re.exec(code))) {
    if (m.index > last) toks.push({ t: code.slice(last, m.index), c: CLS.txt });
    const chunk = m[0];
    if (chunk.startsWith('<!--')) {
      toks.push({ t: chunk, c: CLS.com });
    } else {
      // Parse tag: <name attr="val" attr2='v2'>
      const inner = chunk.replace(/^<\/?/, '').replace(/\/?>$/, '');
      const nameM = /^[a-zA-Z][a-zA-Z0-9-]*/.exec(inner);
      toks.push({ t: chunk.startsWith('</') ? '</' : '<', c: CLS.tag });
      if (nameM) {
        toks.push({ t: nameM[0], c: CLS.tag });
        let rest = inner.slice(nameM[0].length);
        // attributes
        const are = /([a-zA-Z_:][a-zA-Z0-9_:.-]*)(=("[^"]*"|'[^']*'|[^\s>]+))?/g;
        let am: RegExpExecArray | null; let alast = 0;
        while ((am = are.exec(rest))) {
          if (am.index > alast) toks.push({ t: rest.slice(alast, am.index), c: CLS.plain });
          toks.push({ t: am[1], c: CLS.attr });
          if (am[2]) {
            toks.push({ t: '=', c: CLS.plain });
            toks.push({ t: am[3], c: CLS.val });
          }
          alast = am.index + am[0].length;
        }
        if (alast < rest.length) toks.push({ t: rest.slice(alast), c: CLS.plain });
      }
      toks.push({ t: chunk.endsWith('/>') ? '/>' : '>', c: CLS.tag });
    }
    last = m.index + chunk.length;
  }
  if (last < code.length) toks.push({ t: code.slice(last), c: CLS.txt });
  return toks;
}

function highlightCSS(code: string): Tok[] {
  const toks: Tok[] = [];
  const re = /(\/\*[\s\S]*?\*\/)|([^{}/]+)(\{)/g;
  let last = 0, m: RegExpExecArray | null;
  const pushDecl = (block: string) => {
    // property: value;
    const dre = /([a-zA-Z-]+)(\s*:\s*)([^;{}]+)(;?)/g;
    let dm: RegExpExecArray | null; let dlast = 0;
    while ((dm = dre.exec(block))) {
      if (dm.index > dlast) toks.push({ t: block.slice(dlast, dm.index), c: CLS.plain });
      toks.push({ t: dm[1], c: CLS.prop });
      toks.push({ t: dm[2], c: CLS.plain });
      toks.push({ t: dm[3], c: CLS.cval });
      if (dm[4]) toks.push({ t: dm[4], c: CLS.plain });
      dlast = dm.index + dm[0].length;
    }
    if (dlast < block.length) toks.push({ t: block.slice(dlast), c: CLS.plain });
  };
  while ((m = re.exec(code))) {
    const [full, comment, selector] = m;
    if (m.index > last) {
      // could be declarations inside a rule — handle simply
      pushDecl(code.slice(last, m.index));
    }
    if (comment) {
      toks.push({ t: comment, c: CLS.com });
    } else {
      toks.push({ t: selector, c: CLS.sel });
      toks.push({ t: '{', c: CLS.plain });
      // find matching close
      let depth = 1, i = re.lastIndex;
      while (i < code.length && depth > 0) {
        if (code[i] === '{') depth++;
        else if (code[i] === '}') depth--;
        i++;
      }
      const body = code.slice(re.lastIndex, i - 1);
      pushDecl(body);
      toks.push({ t: '}', c: CLS.plain });
      re.lastIndex = i;
      last = i;
      continue;
    }
    last = m.index + full.length;
  }
  if (last < code.length) pushDecl(code.slice(last));
  return toks;
}

const JS_KW = new Set(('break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield async await static get set of from as').split(' '));

function highlightJS(code: string): Tok[] {
  const toks: Tok[] = [];
  const re = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|\b(\d+(?:\.\d+)?)\b|([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/g;
  let last = 0, m: RegExpExecArray | null;
  while ((m = re.exec(code))) {
    if (m.index > last) {
      // check for keywords in the gap
      const gap = code.slice(last, m.index);
      const kre = /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g;
      let km: RegExpExecArray | null; let klast = 0;
      while ((km = kre.exec(gap))) {
        if (km.index > klast) toks.push({ t: gap.slice(klast, km.index), c: CLS.plain });
        toks.push({ t: km[0], c: JS_KW.has(km[0]) ? CLS.kw : CLS.plain });
        klast = km.index + km[0].length;
      }
      if (klast < gap.length) toks.push({ t: gap.slice(klast), c: CLS.plain });
    }
    const [full, comment, str, num, fn] = m;
    if (comment) toks.push({ t: comment, c: CLS.com });
    else if (str) toks.push({ t: str, c: CLS.str });
    else if (num) toks.push({ t: num, c: CLS.num });
    else if (fn) toks.push({ t: fn, c: JS_KW.has(fn) ? CLS.kw : CLS.fn });
    else toks.push({ t: full, c: CLS.plain });
    last = m.index + full.length;
  }
  if (last < code.length) {
    const gap = code.slice(last);
    const kre = /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/g;
    let km: RegExpExecArray | null; let klast = 0;
    while ((km = kre.exec(gap))) {
      if (km.index > klast) toks.push({ t: gap.slice(klast, km.index), c: CLS.plain });
      toks.push({ t: km[0], c: JS_KW.has(km[0]) ? CLS.kw : CLS.plain });
      klast = km.index + km[0].length;
    }
    if (klast < gap.length) toks.push({ t: gap.slice(klast), c: CLS.plain });
  }
  return toks;
}

export function highlightCode(code: string, language: string): Tok[] {
  const lang = (language || '').toLowerCase();
  if (lang.includes('html')) return highlightHTML(code);
  if (lang.includes('css')) return highlightCSS(code);
  if (lang.includes('javascript') || lang.includes('js') || lang.includes('react') || lang.includes('node') || lang.includes('full')) return highlightJS(code);
  return [{ t: code, c: CLS.plain }];
}

export function HighlightedCode({ code, language }: { code: string; language: string }) {
  const toks = highlightCode(code, language);
  return <>{toks.map((t) => <span key={k()} className={t.c}>{esc(t.t)}</span>)}</>;
}
