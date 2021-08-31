import { Div, Span } from 'stce';
import { isRelURL, relURLToAbsURL } from './urls';
export class Compiler {
    constructor(context) {
        this.context = context;
        this.unitToCompiling = new Map();
    }
    async compileUnit(unit) {
        if (this.unitToCompiling.get(unit) === true) {
            return Compiler.createErrorElement('Loop');
        }
        if (unit.tag === 'global'
            || unit.options.global === true) {
            return new Div(['unit', 'global']).element;
        }
        this.unitToCompiling.set(unit, true);
        let element;
        const unitCompiler = this.context.tagToUnitCompiler[unit.tag];
        if (unitCompiler !== undefined) {
            try {
                element = await unitCompiler(unit, this);
            }
            catch (err) {
                console.log(err);
                element = Compiler.createErrorElement('Broken');
            }
            if (element.classList.contains('warn')) {
                element.classList.add('unit');
                this.unitToCompiling.set(unit, false);
                return element;
            }
        }
        else {
            let df;
            if (Compiler.supportedHTMLTags.includes(unit.tag)) {
                element = document.createElement(unit.tag);
                if (Compiler.supportedHTMLTagsWithInlineChildren.includes(unit.tag)) {
                    df = await this.compileInlineSTDN(unit.children);
                }
                else {
                    df = await this.compileSTDN(unit.children);
                }
            }
            else if (Compiler.supportedSVGTags.includes(unit.tag)) {
                element = document.createElementNS("http://www.w3.org/2000/svg", unit.tag);
                df = await this.compileInlineSTDN(unit.children);
            }
            else {
                element = document.createElement('div');
                df = await this.compileSTDN(unit.children);
            }
            element.append(df);
        }
        const { label } = unit.options;
        if (typeof label === 'string' && label !== '') {
            const indexInfo = this.context.labelToIndexInfo[label];
            if (indexInfo !== undefined) {
                element.dataset.orbit = indexInfo.orbit;
                element.dataset.level = indexInfo.index.length.toString();
                element.classList.add('level' + indexInfo.index.length);
                element.dataset.index = indexInfo.index.join('.');
                element.dataset.label = label;
                if (unit.tag === 'ref') {
                    element.dataset.refTag = indexInfo.unit.tag;
                }
            }
        }
        const keys = Object.keys(unit.options);
        for (const key of keys) {
            if (!key.startsWith('data-')
                && !Compiler.supportedHTMLAttributes.includes(key)) {
                continue;
            }
            let val = unit.options[key];
            if (val === true) {
                val = '';
            }
            if (typeof val !== 'string') {
                continue;
            }
            if (this.context.dir !== ''
                && (key === 'src' || key === 'href')
                && isRelURL(val)) {
                val = relURLToAbsURL(val, this.context.dir);
            }
            if (key === 'class') {
                val = element.className + ' ' + val;
            }
            try {
                element.setAttribute(key, val);
            }
            catch (err) {
                console.log(err);
            }
        }
        element.classList.add('unit');
        try {
            element.classList.add(unit.tag);
        }
        catch (err) {
            console.log(err);
        }
        element.dataset.tag = unit.tag;
        this.unitToCompiling.set(unit, false);
        return element;
    }
    async compileInline(inline) {
        if (typeof inline !== 'string') {
            return await this.compileUnit(inline);
        }
        if (inline !== ' ') {
            return new Text(inline);
        }
        const span = document.createElement('span');
        span.textContent = ' ';
        return span;
    }
    async compileLine(line) {
        const df = new DocumentFragment();
        for (let i = 0; i < line.length; i++) {
            df.append(await this.compileInline(line[i]));
        }
        return df;
    }
    async compileInlineSTDN(stdn) {
        const df = new DocumentFragment();
        for (let i = 0; i < stdn.length; i++) {
            df.append(await this.compileLine(stdn[i]));
            if (i !== stdn.length - 1) {
                df.append(new Text('\n'));
            }
        }
        return df;
    }
    async compileSTDN(stdn) {
        const df = new DocumentFragment();
        for (let i = 0; i < stdn.length; i++) {
            df.append(new Div(['st-line'])
                .append(await this.compileLine(stdn[i]))
                .element);
        }
        return df;
    }
    static createErrorElement(err) {
        return new Span(['unit', 'warn']).setText(err).element;
    }
}
Compiler.supportedHTMLTags = [
    'article',
    'aside',
    'footer',
    'header',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'main',
    'nav',
    'section',
    'blockquote',
    'dd',
    'div',
    'dl',
    'dt',
    'figcaption',
    'figure',
    'hr',
    'li',
    'ol',
    'p',
    'pre',
    'ul',
    'a',
    'abbr',
    'b',
    'bdi',
    'bdo',
    'br',
    'cite',
    'code',
    'data',
    'dfn',
    'em',
    'i',
    'kbd',
    'mark',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'time',
    'u',
    'var',
    'wbr',
    'img',
    'del',
    'ins',
    'caption',
    'col',
    'colgroup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
];
Compiler.supportedHTMLTagsWithInlineChildren = [
    'a',
    'abbr',
    'b',
    'bdi',
    'bdo',
    'br',
    'cite',
    'code',
    'data',
    'dfn',
    'em',
    'i',
    'kbd',
    'mark',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'time',
    'u',
    'var',
    'wbr',
    'del',
    'ins',
    'col',
    'colgroup',
    'table',
    'tbody',
    'tfoot',
    'thead',
    'tr',
];
Compiler.supportedSVGTags = [
    'animate',
    'animateMotion',
    'circle',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'path',
    'rect',
    'svg',
    'text',
    'textPath',
    'tspan',
];
Compiler.supportedHTMLAttributes = [
    'align',
    'alt',
    'cite',
    'class',
    'cols',
    'colspan',
    'decoding',
    'dir',
    'download',
    'headers',
    'hidden',
    'href',
    'id',
    'lang',
    'open',
    'rel',
    'reversed',
    'rows',
    'rowspan',
    'scope',
    'span',
    'spellcheck',
    'src',
    'start',
    'style',
    'target',
    'value',
    'attributeName',
    'begin',
    'd',
    'dur',
    'fill',
    'keyPoints',
    'keyTimes',
    'path',
    'preserveAspectRatio',
    'repeatCount',
    'rotate',
    'textLength',
    'values',
    'viewBox',
    'x',
    'y',
];
