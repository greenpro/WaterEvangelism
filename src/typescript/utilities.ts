export class Utilities
{
    public static sleep = (milliseconds:number) => new Promise(resolve => setTimeout(resolve, milliseconds));

    public static async DocumentReady()
    {
        // check that the document is ready
        while (!document.getElementById("menu-div")) 
        {
            await Utilities.sleep(10)
        }
    }
}