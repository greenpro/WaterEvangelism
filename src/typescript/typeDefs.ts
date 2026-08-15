export type Statistics = {
    name: string,
    icon: string,
    bottles: number,
    total: number,
    unique: number,
    languages: number
}

export type Language = {
    check: string,
    primary: string,
    alternate: string | null,
    icon: string,
    text: string
}

export interface Dictionary<T> {
    [key:string]: T
}

export type Contenent = {
    name: string,
    languages: Dictionary<Language>
}
