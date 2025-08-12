export interface Item {
    title: string;
    url: string;
    description: string;
}

export const items: Item[] = [
    {
        'title': '@ivyroot',
        'url': 'https://www.warpcast.com/ivyroot',
        'description': 'Follow me on Farcaster.'
    },
    {
        'title': '@ivyroot_zk',
        'url': 'https://www.x.com/ivyroot_zk',
        'description': 'Follow me on X.'
    },
    {
        'title': 'StickerChain',
        'url': 'https://www.stickerchain.xyz',
        'description': 'Slap stickers anywhere on the planet.'
    },
    {
        'title': 'Exquisite Canvas',
        'url': 'https://www.exquisitecanvas.xyz',
        'description': 'Minimal tool to draw your own pixel art.'
    },
    {
        'title': 'Token Parade',
        'url': 'https://www.tokenparade.xyz',
        'description': "Animated visualization of the NFTs in an Ethereum account."
    },
    {
        'title': 'Nonagon Cup',
        'url': 'https://nonagoncup.com/wrap/?tokenId=23',
        'description': "Wrap a 3D cup in your browser."
    },
]
export const PortfolioItems = () => null;