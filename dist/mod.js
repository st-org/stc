import { fixURLInSTDN } from "@ddu6/urls";
import { parse } from "stdn";
import { Compiler } from "./compiler";
import { extractContext } from "./countext";
export * from './compiler';
export * from './counter';
export * from './countext';
export async function compile(string, dir = '', options = {}) {
    const doc = parse(string);
    if (doc === undefined) {
        return undefined;
    }
    const context = await extractContext(doc, dir, options);
    const compiler = new Compiler(context);
    return {
        documentFragment: await compiler.compileSTDN(doc),
        context,
    };
}
export async function multiCompile(parts, options = {}) {
    const doc = [];
    for (let i = 0; i < parts.length; i++) {
        const { string, dir } = parts[i];
        const stdn = parse(string);
        if (stdn === undefined) {
            continue;
        }
        fixURLInSTDN(stdn, dir);
        doc.push(...stdn);
    }
    const context = await extractContext(doc, '', options);
    const compiler = new Compiler(context);
    return {
        documentFragment: await compiler.compileSTDN(doc),
        context,
    };
}
