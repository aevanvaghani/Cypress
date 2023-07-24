import demo2 from"../pageObjects1/demo2"

it.only('demo',()=>{
    cy.visit("https://magento.softwaretestingboard.com/")

    const shop=new demo2()
    shop.clickonshopbutton()
    shop.clickonmens()
    shop.clickonproduct()
    shop.sizeof()
    shop.setcolor()
    shop.setqty()
    shop.addtocart()
})