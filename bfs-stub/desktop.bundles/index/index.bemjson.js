({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    mix: [{block: 'sssr', js: true}],
    content: [
      {
        block: 'header',
        content: [
          {
            block: 'logo',
            mix: [{block: 'header', elem: 'logo'}],
            content: 'Social Services Search Robot'
          },
          {
            block: 'form',
            mix: [{block: 'header', elem: 'form'}],
            content: [
              {
                elem: 'search',
                content: [
                  {
                    block: 'input',
                    mods: { theme: 'normal', size: 'm', 'has-clear' : true },
                    name: 'query',
                    placeholder: 'try me, baby!'
                  },
                  {
                    block : 'button',
                    mods: { theme: 'normal', size: 'm' },
                    type: 'submit',
                    text: 'Найти'
                  },
                  {
                    block: 'spin',
                    mods: {theme: 'simple'}
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        block: 'content',
        content: [
          {
            block: 'island',
            content: [
              {
                elem: 'header',
                content: [
                  {
                    block: 'user',
                    content: [
                      {
                        block: 'link',
                        mix: [{block: 'user', elem: 'name'}],
                        js: true,
                        url: 'https://twitter.com/tadatuta',
                        content: 'Владимир Гриненко @tadatuta'
                      },
                      {
                        elem: 'post-time',
                        content: '18 hours ago'
                      },
                      {
                        block: 'image',
                        mix: [{block: 'user', elem: 'icon'}],
                        url: 'https://pbs.twimg.com/profile_images/1384848690/image_400x400.jpg',
                        alt: 'Владимир Гриненко'
                      }
                    ]
                  }
                ]
              },
              {
                elem: 'text',
                content: 'Твит про БЭМ #b_'
              },
              {
                elem: 'footer',
                content: [
                  {
                    block: 'service',
                    mods: {'type_twitter': true}
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
})
