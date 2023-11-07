import { Vector3 } from "three";
import { TextDisplay } from './TextDisplay';
import { useScreenSize} from '../hooks/useScreenSize';

export interface PortfolioItemsProps {
    offset: number;
}

const items = [
    {
        'title': 'ivyroot',
        'url': 'https://www.warpcast.com/ivyroot',
        'description': 'I am a full stack developer.\n Here are some projects I have built.'
    },
    {
        'title': 'Exquisite Canvas',
        'url': 'https://www.exquisitecanvas.xyz',
        'description': 'Draw your own pixel art.'
    },
    {
        'title': 'Token Parade',
        'url': 'https://www.tokenparade.xyz',
        'description': "Parade the art for any Ethereum account."
    },
    {
        'title': 'Nonagon Cup',
        'url': 'https://nonagoncup.com/wrap/?tokenId=23',
        'description': "Wrap a 3D cup in your browser."
    },
    {
        'title': 'Saffene Phone Stand',
        'url': 'https://www.saffene.com',
        'description': "Robust minimal phone stand."
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
]


export const PortfolioItems = (props: PortfolioItemsProps) => {
    const screenSize = useScreenSize();
    const maxWidth = screenSize.width;
    const itemHeight = maxWidth && maxWidth < 500 ? 3 : 5;
    const pos = new Vector3(0, props.offset + 2, 0)
    return(
        <group position={pos}>
            {items.map((item, index) => {
                return(
                    <TextDisplay
                        key={index}
                        position={[0, itemHeight * index * -1, 0]}
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