export type Statistics = {
    name: string,
    icon: string,
    bottles: number,
    total: number,
    unique: number,
    languages: number
}

export enum CheckLocation {
    Glow = 0,
    AmazingFacts,
    HopeChannel,
    EGW,
    Youtube
}

export type Language = {
    text: string
    icon: string,
    primary: string,
    alternate: string | null,
    check: CheckLocation,
}

export interface Dictionary<T> {
    [key:string]: T
}

export type Contenent = {
    name: string,
    languages: Dictionary<Language>
}

export class MenuButton
{
    public HrefPrefix:  string = ""
    public ButtonClass: string = ""
}
