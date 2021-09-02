import { urlsToAbsURLs } from './urls'
import {STDN, STDNUnit} from 'stdn'
import { Compiler } from './compiler'
import { Counter, IndexInfo, IdToIndexInfo } from './counter'
export type UnitCompiler=(unit:STDNUnit,compiler:Compiler)=>Promise<HTMLElement>
export type TagToUnitCompiler={
    [key:string]:UnitCompiler|undefined
}
export type STDNUnitGlobalOptions={
    __?:STDN[]
    [key: string]:(STDN|string|number|boolean)[]|undefined
}
export type TagToGlobalOptions={
    [key:string]:STDNUnitGlobalOptions|undefined
}
export interface Context{
    css:string
    dir:string
    indexInfoArray:IndexInfo[]
    idToIndexInfo:IdToIndexInfo
    tagToUnitCompiler:TagToUnitCompiler
    tagToGlobalOptions:TagToGlobalOptions
    title:string
}
export function unitToPlainString(unit:STDNUnit){
    return stdnToPlainString(unit.children)
}
export function stdnToPlainString(stdn:STDN){
    const array:string[]=[]
    for(let i=0;i<stdn.length;i++){
        const line=stdn[i]
        let string=''
        for(let i=0;i<line.length;i++){
            const inline=line[i]
            if(typeof inline==='string'){
                string+=inline
                continue
            }
            string+=unitToPlainString(inline)
        }
        array.push(string)
    }
    return array.join('\n')
}
export interface ExtractContextOptions{
    dftTagToUnitCompiler?:TagToUnitCompiler
    dftTagToGlobalOptions?:TagToGlobalOptions
}
export async function extractContext(
    doc:STDN,
    dir:string,
    options:ExtractContextOptions={}
){
    if(dir===''){
        dir=document.location.href
    }
    const context:Context={
        css:'',
        dir,
        indexInfoArray:[],
        idToIndexInfo:{},
        tagToUnitCompiler:options.dftTagToUnitCompiler??{},
        tagToGlobalOptions:options.dftTagToGlobalOptions??{},
        title:'',
    }
    const cssURLs:string[]=[]
    const tagToUnitCompilerURLs:string[]=[]
    for(let i=0;i<doc.length;i++){
        const line=doc[i]
        if(line.length===0){
            continue
        }
        const unit=line[0]
        if(typeof unit==='string'){
            continue
        }
        if(unit.tag==='title'){
            context.title=unitToPlainString(unit)
            continue
        }
        if(unit.tag==='global'){
            let src=unit.options['css-src']
            if(typeof src==='string'&&src!==''){
                cssURLs.push(src)
            }
            src=unit.options['ucs-src']
            if(typeof src==='string'&&src!==''){
                tagToUnitCompilerURLs.push(src)
            }
            continue
        }
        if(unit.options.global===true){
            let globalOptions=context.tagToGlobalOptions[unit.tag]
            if(globalOptions===undefined){
                context.tagToGlobalOptions[unit.tag]=globalOptions={}
            }
            if(globalOptions.__===undefined){
                globalOptions.__=[unit.children]
            }else{
                globalOptions.__.push(unit.children)
            }
            const keys=Object.keys(unit.options)
            for(const key of keys){
                if(key==='global'||key==='__'){
                    continue
                }
                const val=unit.options[key]
                if(val===undefined){
                    continue
                }
                const vals=globalOptions[key]
                if(vals===undefined){
                    globalOptions[key]=[val]
                }else{
                    vals.push(val)
                }
            }
        }
    }
    context.css+=(await urlsToAbsURLs(cssURLs,dir))
    .map(val=>`@import ${JSON.stringify(val)};`).join('')
    for(const url of await urlsToAbsURLs(tagToUnitCompilerURLs,dir)){
        try{
            const result=await(new Function(`return import(${JSON.stringify(url)})`)())
            context.tagToUnitCompiler=Object.assign({},context.tagToUnitCompiler,result)
        }catch(err){
            console.log(err)
        }
    }
    const counter=new Counter(context.tagToGlobalOptions)
    counter.countSTDN(doc)
    context.indexInfoArray=counter.indexInfoArray
    context.idToIndexInfo=counter.idToIndexInfo
    return context
}