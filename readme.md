# gatsby-remark-spotify
Embed a Spotify Track or Album to in your Markdown

![npm](https://img.shields.io/npm/v/gatsby-remark-spotify.svg?style=flat-square)


## Install 
1. Install plugin to your site:

```bash
yarn add gatsby-remark-spotify
```

2. Add following to your `gatsby-config.js`:
```js
    plugins: [      
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-spotify",
            options: {
              width: 800,
              height: 400, 
            }
          }
          ]
        }
      },
```


1. Restart gatsby.

## Usage

```markdown 

`spotify:https://open.spotify.com/track/5K2ZAJ7GezwevGYBuh9rct`
`spotify: https://open.spotify.com/album/2Fb37JsRMVPASJcl3wwDOa` 

```


## License

MIT