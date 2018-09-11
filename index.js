import { URL } from 'url'
import visit from 'unist-util-visit'

module.exports = ({ markdownAST }, options = { width: 540, height: 620 }) => {

    visit(markdownAST, `inlineCode`, node => {
        const { value } = node

        if (value.startsWith(`spotify:`)) {
            const spotify = value.substr(8)
            const uri = new URL(spotify)
            const path = uri.pathname.split('/').filter(String).join(':')

            if (isUrlValid(spotify)) {
                node.type = `html`
                node.value = `<div><iframe src="https://embed.spotify.com/?uri=spotify:${path}&view=coverart" width="${options.width}" height="${options.height}" frameborder="0" allowtransparency="true"></iframe></div>`
            }
        }

    })

    return markdownAST
}

function isUrlValid(url) {
    var res = url.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    )
    if (res != null) {
        return true
    } else {
        return false
    }
}
