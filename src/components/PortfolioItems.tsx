import { Vector3 } from "three";
import { TextDisplay } from './TextDisplay';
import { useScreenSize} from '../hooks/useScreenSize';

export interface PortfolioItemsProps {
    offset: number;
    rotation: number;
}

const items = [
    {
        'title': 'Ivyroot',
        'url': 'https://www.warpcast.com/ivyroot',
        'description': 'Portfolio of creative projects:'
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
    {
        'title': 'Burn Note',
        'url': 'https://thenextweb.com/news/privacy-isnt-an-issue-with-burn-note-because-all-messages-will-self-destruct',
        'description': "Ephemeral messaging app (inactive)."
    },
    {
        'title': 'Shuffler',
        'url': 'https://appadvice.com/app/shuffler-photo-browser/980966633',
        'description': "View your camera roll in random order (inactive)."
    },
    {
        'title': '@Ivyroot',
        'url': 'https://www.warpcast.com/ivyroot',
        'description': 'Follow me on Farcaster.'
    },
]


export const PortfolioItems = (props: PortfolioItemsProps) => {
    const {offset, rotation} = props;
    const screenSize = useScreenSize();
    const maxWidth = screenSize.width;
    const itemHeight = maxWidth && maxWidth < 500 ? 3 : 5;
    const pos = new Vector3(0, offset + 2, 0)
    return(
        <group position={pos}>
            {items.map((item, index) => {
                return(
                    <TextDisplay
                        key={index}
                        position={[0, itemHeight * index * -1, 0]}
                        rotation={[0, rotation, 0]}
                        maxWidth={maxWidth}
                        copy={item.title}
                        url={item.url}
                        description={item.description}
                    />
                )
            })}
        </group>
    )
}