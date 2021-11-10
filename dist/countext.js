import { urlsToAbsURLs } from './urls';
import { Counter } from './counter';
export function unitToPlainString(unit) {
    return stdnToPlainString(unit.children);
}
export function stdnToPlainString(stdn) {
    const array = [];
    for (const line of stdn) {
        let string = '';
        for (const inline of line) {
            if (typeof inline === 'string') {
                string += inline;
                continue;
            }
            string += unitToPlainString(inline);
        }
        array.push(string);
    }
    return array.join('\n');
}
export function unitToInlinePlainString(unit) {
    return stdnToInlinePlainString(unit.children);
}
export function stdnToInlinePlainString(stdn) {
    if (stdn.length === 0) {
        return '';
    }
    let string = '';
    for (const inline of stdn[0]) {
        if (typeof inline === 'string') {
            string += inline;
            continue;
        }
        string += unitToInlinePlainString(inline);
    }
    return string;
}
export function stringToId(string) {
    return string.replace(/[^\s\w-]/g, '').toLowerCase().trim().split(/[\s_-]+/).join('-');
}
export function getGlobalOptionArray(option, tag, tagToGlobalOptions) {
    const options = tagToGlobalOptions[tag];
    if (options === undefined) {
        return [];
    }
    return options[option] ?? [];
}
export function getLastGlobalOption(option, tag, tagToGlobalOptions) {
    const array = getGlobalOptionArray(option, tag, tagToGlobalOptions);
    if (array.length === 0) {
        return undefined;
    }
    return array[array.length - 1];
}
export function getGlobalChildren(tag, tagToGlobalOptions) {
    const options = tagToGlobalOptions[tag];
    if (options === undefined) {
        return [];
    }
    const array = options.__;
    if (array === undefined) {
        return [];
    }
    return array.flat();
}
export function getGlobalStrings(option, tag, tagToGlobalOptions) {
    const array = getGlobalOptionArray(option, tag, tagToGlobalOptions);
    const strings = [];
    for (const val of array) {
        if (typeof val === 'string') {
            strings.push(val);
        }
    }
    return strings;
}
export async function getGlobalURLs(option, tag, tagToGlobalOptions, dir) {
    return await urlsToAbsURLs(getGlobalStrings(option, tag, tagToGlobalOptions), dir);
}
export async function extractContext(doc, dir, options = {}) {
    if (dir.length === 0) {
        dir = location.href;
    }
    const tagToGlobalOptions = {};
    const tagToUnitCompiler = {};
    if (options.builtInTagToUnitCompiler !== undefined) {
        Object.assign(tagToUnitCompiler, options.builtInTagToUnitCompiler);
    }
    const cssURLs = [];
    const tagToUnitCompilerURLs = [];
    for (const line of doc) {
        if (line.length === 0) {
            continue;
        }
        const unit = line[0];
        if (typeof unit === 'string') {
            continue;
        }
        if (unit.tag === 'global') {
            const mod = unit.options['mod'];
            if (typeof mod === 'string') {
                cssURLs.push(`https://cdn.jsdelivr.net/gh/st-mod/${mod}/main.css`);
                tagToUnitCompilerURLs.push(`https://cdn.jsdelivr.net/gh/st-mod/${mod}/main.js`);
            }
            const css = unit.options['css'];
            if (typeof css === 'string') {
                cssURLs.push(`https://cdn.jsdelivr.net/gh/st-mod/${css}/main.css`);
            }
            const ucs = unit.options['ucs'];
            if (typeof ucs === 'string') {
                tagToUnitCompilerURLs.push(`https://cdn.jsdelivr.net/gh/st-mod/${ucs}/main.js`);
            }
            {
                const gh = unit.options['mod-gh'];
                if (typeof gh === 'string') {
                    cssURLs.push(`https://cdn.jsdelivr.net/gh/${gh}/main.css`);
                    tagToUnitCompilerURLs.push(`https://cdn.jsdelivr.net/gh/${gh}/main.js`);
                }
            }
            {
                const gh = unit.options['css-gh'];
                if (typeof gh === 'string') {
                    cssURLs.push(`https://cdn.jsdelivr.net/gh/${gh}/main.css`);
                }
            }
            {
                const gh = unit.options['ucs-gh'];
                if (typeof gh === 'string') {
                    tagToUnitCompilerURLs.push(`https://cdn.jsdelivr.net/gh/${gh}/main.js`);
                }
            }
            {
                const src = unit.options['css-src'];
                if (typeof src === 'string') {
                    cssURLs.push(src);
                }
            }
            {
                const src = unit.options['ucs-src'];
                if (typeof src === 'string') {
                    tagToUnitCompilerURLs.push(src);
                }
            }
            continue;
        }
        if (unit.options.global === true) {
            let globalOptions = tagToGlobalOptions[unit.tag];
            if (globalOptions === undefined) {
                tagToGlobalOptions[unit.tag] = globalOptions = {};
            }
            if (globalOptions.__ === undefined) {
                globalOptions.__ = [unit.children];
            }
            else {
                globalOptions.__.push(unit.children);
            }
            for (const key of Object.keys(unit.options)) {
                if (key === 'global' || key === '__') {
                    continue;
                }
                const val = unit.options[key];
                if (val === undefined) {
                    continue;
                }
                const vals = globalOptions[key];
                if (vals === undefined) {
                    globalOptions[key] = [val];
                }
                else {
                    vals.push(val);
                }
            }
        }
    }
    const css = (await urlsToAbsURLs(cssURLs, dir))
        .map(val => `@import ${JSON.stringify(val)};`).join('');
    for (const url of await urlsToAbsURLs(tagToUnitCompilerURLs, dir)) {
        try {
            Object.assign(tagToUnitCompiler, await (new Function(`return import(${JSON.stringify(url)})`)()));
        }
        catch (err) {
            console.log(err);
        }
    }
    const counter = new Counter(tagToGlobalOptions);
    counter.countSTDN(doc);
    return {
        css,
        dir,
        indexInfoArray: counter.indexInfoArray,
        idToIndexInfo: counter.idToIndexInfo,
        tagToGlobalOptions,
        tagToUnitCompiler,
        title: counter.title,
        unitToId: counter.unitToId,
    };
}
