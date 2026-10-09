"use strict";
//import { Utilities } from "./utilities"
//import {Dictionary, Statistics} from "./typeDefs"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class Events {
    constructor() {
        this.distributions = {
            "total": {
                name: "",
                icon: "",
                bottles: 12696,
                total: 566,
                unique: 410,
                languages: 5,
            },
            "pathfinder": {
                name: "Pathfinder Service Day 2026",
                icon: "pathfinder.png",
                bottles: 100,
                total: 24,
                unique: 24,
                languages: 1,
            },
            "art": {
                name: "57th Annual Artist Alley, Chanute 2026",
                icon: "art.png",
                bottles: 675,
                total: 11,
                unique: 5,
                languages: 1,
            },
            "fair": {
                name: "Johnson County Fair 2026",
                icon: "fair.jpg",
                bottles: 1921,
                total: 70,
                unique: 52,
                languages: 2,
            },
            "soccer": {
                name: "Soccer Tournament 2026",
                icon: "soccer.bmp",
                bottles: 10000,
                total: 407,
                unique: 304,
                languages: 5
            },
        };
    }
    distributionPopulate() {
        var container = document.getElementById("events");
        if (container == null) {
            return;
        }
        for (let distributionKey in this.distributions) {
            if (distributionKey == "total") {
                continue;
            }
            container.innerHTML += "<div class='flex-item section event'>\
                                        <div class='section-title'>\
                                            <div class='img-box'>\
                                            <img src='events/" + this.distributions[distributionKey].icon + "' class='event-icon'>\
                                            </div>\
                                            <br />" +
                this.distributions[distributionKey].name +
                "</div>\
                                        Number of bottles: <span id='" + distributionKey + "-bottles'>0</span><br />\
                                        Total scans: <span id='" + distributionKey + "-total'>0</span><br />\
                                        Unique scans: <span id='" + distributionKey + "-unique'>0</span><br />\
                                        languages: <span id='" + distributionKey + "-languages'>0</span><br />\
                                    </div>";
        }
    }
    async updateItemNumber(elementId, total) {
        var element = document.getElementById(elementId);
        if (!element) {
            return;
        }
        var i = 0;
        for (; i <= total - 10; i += 5) {
            element.innerText = i.toString();
            await Utilities.sleep(1);
        }
        for (; i <= total; i++) {
            element.innerText = i.toString();
            await Utilities.sleep(100);
        }
    }
    async updateNumbers() {
        for (let distributionKey in this.distributions) {
            this.updateItemNumber(distributionKey + "-bottles", this.distributions[distributionKey].bottles);
            this.updateItemNumber(distributionKey + "-total", this.distributions[distributionKey].total);
            this.updateItemNumber(distributionKey + "-unique", this.distributions[distributionKey].unique);
            this.updateItemNumber(distributionKey + "-languages", this.distributions[distributionKey].languages);
        }
    }
    async runPopulate() {
        await Utilities.DocumentReady();
        this.distributionPopulate();
        this.updateNumbers();
    }
}
exports.Events = Events;
var events = new Events();
events.runPopulate();
