import { Injectable } from "@angular/core";


@Injectable()
export class LanguageBundle {
    language: Object = {
        "navbar": {
            "brandName": "brand",
            "navTabs": [
                { "tab": 'home' },
                { "tab": 'features' },
                { "tab": 'setting' }
            ],
            "sideTabs": [
                { "tab": 'user' },
                { "tab": 'service' },
                { "tab": 'client' },
                { "tab": 'contact' }
            ]
        },
        "user": {
            "heading": "User",
            "nameLabel": "Name",
            "nameReqMsg": "Name is required",
            "emailLabel": "Email address",
            "emailReqMsg": "Email is required",
            "emailInvalidMsg": "Email is invalid",
            "passLabel": "Password",
            "passReqMsg": "Password is required",
        }
    };
    constructor() {
    }
}