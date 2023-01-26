const { Builder, By, until, Browser} = require('selenium-webdriver')
const { expect, assert} = require('chai')


describe('end to end testing', ()=>{
    const driver = new Builder().forBrowser('firefox').build();

    it('should launch url', () =>{
        driver.get('http://the-internet.herokuapp.com/')
    })
    it('should login user', async ()=>{
        try{
        await driver.findElement(By.xpath("//a[normalize-space()='Form Authentication']")).click();
        await driver.findElement(By.id('username')).sendKeys('thomas'); 
        await driver.findElement(By.id('password')).sendKeys('SecretPassword'); 
        await driver.findElement(By.className("fa fa-2x fa-sign-in")).click();
        await driver.findElement(By.id("flash")).getText().then(text =>{
            let result = text.split('\n')[0]
            assert.deepEqual(result,'Your username is invalid!')
           })

        }catch (error) {
        console.log(error);
      }
    })

})