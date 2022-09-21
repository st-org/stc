import * as ston from 'ston/dist/parse';
import type { STDN, STDNLine, STDNUnit } from 'stdn';
import * as stdn from 'stdn/dist/parse';
import * as position from 'stdn/dist/position';
import * as base from './base';
import * as urls from './urls';
import * as dom from './dom';
import * as counter from './counter';
import * as extractor from './extractor';
import { compile } from './mod';
export declare const supportedHTMLTags: string[];
export declare const supportedHTMLTagsWithInlineChildren: string[];
export declare const supportedSVGTags: string[];
export declare function createErrorElement(err: string): HTMLSpanElement;
export declare class Compiler {
    readonly context: extractor.Context;
    stop: boolean;
    readonly ston: typeof ston;
    readonly stdn: typeof stdn;
    readonly position: typeof position;
    readonly base: typeof base;
    readonly urls: typeof urls;
    readonly dom: typeof dom;
    readonly counter: typeof counter;
    readonly extractor: typeof extractor;
    readonly compile: typeof compile;
    readonly supportedHTMLTags: string[];
    readonly supportedHTMLTagsWithInlineChildren: string[];
    readonly supportedSVGTags: string[];
    readonly createErrorElement: typeof createErrorElement;
    readonly elementToUnitOrLine: Map<HTMLElement | SVGElement, STDNUnit | STDNLine | undefined>;
    readonly unitOrLineToElements: Map<STDNUnit | STDNLine, (HTMLElement | SVGElement)[] | undefined>;
    readonly unitToCompiling: Map<STDNUnit, boolean | undefined>;
    constructor(context: extractor.Context);
    private registerElement;
    compileUnit(unit: STDNUnit): Promise<HTMLElement | SVGElement>;
    compileInline(inline: STDNUnit | string): Promise<HTMLElement | Text | SVGElement>;
    compileLine(line: STDNLine): Promise<DocumentFragment>;
    compileInlineSTDN(stdn: STDN): Promise<DocumentFragment>;
    compileSTDN(stdn: STDN): Promise<DocumentFragment>;
}
