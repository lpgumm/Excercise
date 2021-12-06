/// <reference types="cypress" />


describe("IE smoke tests",() => {
    const motor_gear = (' Motocross Gear ')
    const clothes = (' Motocross Clothing ')
    const model = ('Answer Syncron Voyd MX Clothing Kit Black-Grey-Steel Grey')
    const size = ('Choose Size Of Jersey:')

    beforeEach(() =>{

        cy.viewport(1280,720)
        cy.visit(Cypress.env('urlIE'))
        cy.get('*[class^=" NostoOverlayClose  NostoCloseButton"]').click()
        cy.get('*[class^= "m-button m-button--navigation m-button--xs qa-consent-agree-btn ng-tns-c88-9"]').click()
    })

    it("I am on right page", () => {

        cy.url().should('include','24mx.ie')

    })

    it("Seacrh product", () => {

        cy.get('[id="search-desktop"]').type('24MX All-In-One Gear Bag 150L{enter}')
        cy.wait(15000)
        cy.xpath('/html/body/app-root/div[1]/div/p-search-result/div[1]/div/div/p-search-products/div/div[2]/div[1]/p-productcard/a/div/div/div[2]/div/div[3]/span').should('be.visible');
        cy.url().should('include','/search/result')
    })

    it( "Remove motorcycle", () => {

        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/div/div/div[3]/div[2]/div[2]/div[2]').click()
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[1]/div/div[1]').click()
        cy.contains(' Beta ').click()
        cy.wait(4000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[2]/div').click()
        cy.contains('2019').click()
        cy.wait(4000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[3]/div').click()
        cy.contains(' Beta RR 125 2T 2019 ').click()
        cy.wait(3000)
        cy.contains(' Beta RR 125 2T 2019 ')

        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[1]/div[2]/div/ul/li/div[2]/p-button[2]/button').click()

        cy.contains('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[1]/div[2]/div/ul/li/div[2]/p-button[2]/button')
            .should('not.exist','/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[1]/div[2]/div/ul/li/div[2]/p-button[2]/button')


    })


    it("Add motorcycle", () => {

        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/div/div/div[3]/div[2]/div[2]/div[2]').click()
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[1]/div/div[1]').click()
        cy.contains(' Beta ').click()
        cy.wait(3000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[2]/div').click()
        cy.contains('2019').click()
        cy.wait(3000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[3]/div').click()
        cy.contains(' Beta RR 125 2T 2019 ').click()
        cy.contains(' Beta RR 125 2T 2019 ')
    })



    it("Adding product to basket and proceed to checkout", () => {

        cy.contains(motor_gear).click()
        cy.contains(clothes).click()
        cy.wait(4000)
        cy.contains(model).click()
        cy.wait(3000)
        cy.contains(size).click()
        cy.get('.a-product-variation__title').eq(2).click()
        cy.scrollTo(0,200)
        cy.xpath('/html/body/app-root/div[1]/div/p-product-page/div/div/div[1]/div/div[3]/div/div/div/div/div/p-product-variations/div/div[2]/div/p-select/div/div[1]/span').click()
        cy.xpath('/html/body/app-root/div[1]/div/p-product-page/div/div/div[1]/div/div[3]/div/div/div/div/div/p-product-variations/div/div[2]/div/p-select/div/div[2]/div[2]/ul/li[2]/p-select-product-variation/div/div/div').click()
        cy.get('*[class^="m-button m-button--purchase qa-pdp-add-to-cart-btn m-button--md"]').click()
        cy.wait(6000)
        cy.get('*[class="a-textlink a-textlink--blue d-inline-block textsize-small qa-proceed-to-checkout"]').click()
        cy.url().should('include','/checkout')
    })


})

describe ("PL smoke tests", () =>{

    const motor_gear = (' Wyposażenie MX ')
    const clothes = (' Odzież MX ')
    const model = ('Komplet Cross Raven Rival Czarny')
    const size = ('Wybierz rozmiar bluzy:')

    beforeEach(() =>{

        cy.viewport(1280,720)
        cy.visit(Cypress.env('urlPL'))
        cy.get('*[class^=" NostoOverlayClose  NostoCloseButton"]').click()
        cy.get('*[class^= "m-button m-button--navigation m-button--xs qa-consent-agree-btn ng-tns-c88-9"]').click()
    })

    it("I am on right page", () => {

        cy.url().should('include','24mx.pl')

    })

    it("Seacrh product", () => {

        cy.get('[id="search-desktop"]').type('24MX All-In-One Gear Bag 150L{enter}')
        cy.wait(15000)
        cy.xpath('/html/body/app-root/div[1]/div/p-search-result/div[1]/div/div/p-search-products/div/div[2]/div[1]/p-productcard/a/div/div/div[2]/div/div[3]/span').should('be.visible');
        cy.url().should('include','/search/result')
    })

    it( "Remove motorcycle", () => {

        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/div/div/div[3]/div[2]/div[2]/div[2]').click()
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[1]/div/div[1]').click()
        cy.contains(' Beta ').click()
        cy.wait(4000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[2]/div').click()
        cy.contains('2019').click()
        cy.wait(4000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[3]/div').click()
        cy.contains(' Beta RR 125 2T 2019 ').click()
        cy.wait(3000)
        cy.contains(' Beta RR 125 2T 2019 ')

        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[1]/div[2]/div/ul/li/div[2]/p-button[2]/button').click()

        cy.contains('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[1]/div[2]/div/ul/li/div[2]/p-button[2]/button')
            .should('not.exist','/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[1]/div[2]/div/ul/li/div[2]/p-button[2]/button')


    })


    it("Add motorcycle", () => {

        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/div/div/div[3]/div[2]/div[2]/div[2]').click()
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[1]/div/div[1]').click()
        cy.contains(' Beta ').click()
        cy.wait(3000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[2]/div').click()
        cy.contains('2019').click()
        cy.wait(3000)
        cy.xpath('/html/body/app-root/p-header/header/div[1]/div[2]/p-fmb-drawer/div/div/div[2]/p-fmb-select-vehicle/div/div/p-fmb-select/p-select[3]/div').click()
        cy.contains(' Beta RR 125 2T 2019 ').click()
        cy.contains(' Beta RR 125 2T 2019 ')
    })


    it("Adding product to basket and proceed to checkout", () => {

        cy.contains(motor_gear).click()
        cy.contains(clothes).click()
        cy.wait(4000)
        cy.contains(model).click()
        cy.wait(3000)
        cy.contains(size).click()
        cy.get('.a-product-variation__title').eq(2).click()
        cy.scrollTo(0,200)
        cy.xpath('/html/body/app-root/div[1]/div/p-product-page/div/div/div[1]/div/div[3]/div/div/div/div/div/p-product-variations/div/div[2]/div/p-select/div/div[1]/span').click()
        cy.xpath('/html/body/app-root/div[1]/div/p-product-page/div/div/div[1]/div/div[3]/div/div/div/div/div/p-product-variations/div/div[2]/div/p-select/div/div[2]/div[2]/ul/li[2]/p-select-product-variation/div/div/div').click()
        cy.get('*[class^="m-button m-button--purchase qa-pdp-add-to-cart-btn m-button--md"]').click()
        cy.wait(8000)
        cy.get('*[class="a-textlink a-textlink--blue d-inline-block textsize-small qa-proceed-to-checkout"]').click()
        cy.url().should('include','/checkout')
    })


})