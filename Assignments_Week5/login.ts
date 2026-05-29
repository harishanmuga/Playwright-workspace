import { Page } from "@playwright/test";

export class LoginPage{
    page:Page

    constructor(LocalPage:Page){
        this.page=LocalPage
    }

    async loadUrl(url:string){
        await this.page.goto(url)
    }

    async enterUsername(uname:string){
        await this.page.locator('#username').fill(uname)
    }

    async enterPassword(pwd:string){
        await this.page.locator('#password').fill(pwd)
    }

    async clickLogin(){
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }
}