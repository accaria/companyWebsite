import { Document } from "@contentful/rich-text-types"
import { StaticImageData } from "next/image"

export interface IBlog{
    sys:{
        id:string;
    }
    fields:{
    title:string,
    slug:string,
    article:Document | undefined,
    publicationDate:string,
    editorName:string,
    articleThumbnail:{
        fields:{
            file:{
                url:string
            }
        }
    }}
}