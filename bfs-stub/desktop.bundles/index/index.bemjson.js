({
    block: 'page',
    title: 'Title of the page',
    mix: [{block: 'sssr', js: true}],
    js: true,
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    mix: { block: 'header', elem: 'logo' },
                    content: 'Social Services Search Robot'
                },
                {
                    block: 'form',
                    tag: 'form',
                    js: true,
                    mix: { block: 'header', elem: 'form' },
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
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'island',
                    tag: 'form',
                    js: true,
                    mix: { block: 'header', elem: 'form' },
                    content: [
                        {
                            elem: 'header',
                            content: [
                                {
                                    block: 'user',
                                    content: [
                                        {
                                            block: 'link',
                                            url: 'https://twitter.com/tadatuta',
                                            content: 'Владимир Гриненко',
                                            mix: {block: 'user', elem: 'name'}
                                        },
                                        {
                                            elem: 'post-time',
                                            content: '18 hours ago',
                                        },
                                        {
                                            block: 'image',
                                            url: 'https://pbs.twimg.com/profile_images/1384848690/image_400x400.jpg',
                                            alt: 'Владимир Гриненко',
                                            mix: {block: 'user', elem: 'icon'}
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: 'text'
                        },
                        {
                            elem: 'footer',
                            content: [
                                {
                                    block: 'service',
                                    mix: {block: 'service_type_twitter'},
                                    content: 'Search'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
