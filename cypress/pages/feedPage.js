import { be } from "date-fns/locale"
import { existsSync } from "fs"
import { delay } from "lodash"

class FeedPage {
    selectorsList() {
        return {
            emptyList: "[data-test='empty-list-header']",
            emptyButtonCreateTransaction: "[data-test='transaction-list-empty-create-transaction-button']",
            



        }
    }

    checkPersonalFeedPage() {
        cy.location('pathname').should('equal', '/personal')
    }
    //checkEmptyList(){    }
}

export default FeedPage