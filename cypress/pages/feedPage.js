import { be } from "date-fns/locale"
import { existsSync } from "fs"
import { delay } from "lodash"

class FeedPage {
    selectorsList() {
        return {
            emptyList: ""



        }
    }

    checkPersonalFeedPage() {
        cy.location('pathname').should('equal', '/personal')
    }
    //checkEmptyList(){    }
}

export default FeedPage