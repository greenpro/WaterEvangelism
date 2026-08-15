export class Utilities
{
    public static sleep = (milliseconds:number) => new Promise(resolve => setTimeout(resolve, milliseconds));
}
