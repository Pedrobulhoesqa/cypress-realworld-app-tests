class DashboardPage {

    selectorsList() {
        const selectorsDashboard ={
            dashboardTransactionTabs: '[data-test="nav-transaction-tabs"]',
            profileNav: '[data-test="sidenav-username"]',
        }

        return selectorsDashboard

    }
    checkDashboardPage(username) {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().dashboardTransactionTabs).should('exist')
        cy.get(this.selectorsList().profileNav).contains(username)
    }
}

export default DashboardPage