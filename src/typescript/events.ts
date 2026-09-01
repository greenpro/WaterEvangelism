//import { Utilities } from "./utilities"
import {Dictionary, Statistics} from "./typeDefs"

export class Events
{
    private distributions: Dictionary<Statistics> = {
        "total": { // May 15 - Aug 21, 2026 
            name: "",
            icon: "",
            bottles:   11921,
            total:     527,
            unique:    375,
            languages: 5,
        },
        "fair": {
            name:      "Johnson County Fair 2026",
            icon:      "fair.jpg",
            bottles:   1921, 
            total:     70, 
            unique:    52, 
            languages: 2,
        },
        "soccer": {
            name:      "Soccer Tournament 2026",
            icon:      "soccer.bmp",
            bottles:   10000, 
            total:     407, 
            unique:    304, 
            languages: 5
        },
    }

    private distributionPopulate()
    {
        var container = document.getElementById("events")

        if (container == null)
        {
            return
        }

        for (let distributionKey in this.distributions)
        {
            if (distributionKey == "total")
            {
                continue
            }

            container.innerHTML += "<div class='flex-item section event'>\
                                        <div class='section-title'>\
                                            <img src='events/" + this.distributions[distributionKey].icon + "' class='event-icon'>\
                                            <br />" +
                                            this.distributions[distributionKey].name +
                                        "</div>\
                                        Number of bottles: <span id='" + distributionKey + "-bottles'>0</span><br />\
                                        Total scans: <span id='" + distributionKey + "-total'>0</span><br />\
                                        Unique scans: <span id='" + distributionKey + "-unique'>0</span><br />\
                                        languages: <span id='" + distributionKey + "-languages'>0</span><br />\
                                    </div>"
        }
    }

    private async updateItemNumber(elementId:string, total:number)
    {
        var element = document.getElementById(elementId)
    
        if (!element)
        {
            return
        }
    
        var i=0;
        for (; i<=total-10; i+=5)
        {
            element.innerText = i.toString()
            await Utilities.sleep(1)
        }
    
        for (; i<=total; i++)
        {
            element.innerText = i.toString()
            await Utilities.sleep(100)
        }
    }

    private async updateNumbers()
    {
        for (let distributionKey in this.distributions)
        {
            this.updateItemNumber(distributionKey + "-bottles",   this.distributions[distributionKey].bottles)
            this.updateItemNumber(distributionKey + "-total",     this.distributions[distributionKey].total)
            this.updateItemNumber(distributionKey + "-unique",    this.distributions[distributionKey].unique)
            this.updateItemNumber(distributionKey + "-languages", this.distributions[distributionKey].languages)
        }
    }

    public async runPopulate()
    {
        await Utilities.DocumentReady()

        this.distributionPopulate()
        this.updateNumbers()
    }
}

var events: Events = new Events()
events.runPopulate()