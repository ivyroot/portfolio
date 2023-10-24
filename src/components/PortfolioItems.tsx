import { Vector3 } from "three";
import { TextDisplay } from './TextDisplay';

export interface PortfolioItemsProps {
    offset: number;
}

export const PortfolioItems = (props: PortfolioItemsProps) => {
    const pos = new Vector3(0, props.offset + 2, 0)
    return(
        <group position={pos}>
            <TextDisplay
                position={[0,0,0]}
                copy={'ivyroot'}
                url={'https://www.warpcast.com/ivyroot'}
                description={'I am a full stack developer.\nHere are some projects I have built.'}
            />
            <TextDisplay
                position={[0,-5,0]}
                url={'https://www.exquisitecanvas.xyz'}
                copy={'Exquisite Canvas'}
                description={'Draw your own pixel art.'}
            />
            <TextDisplay
                position={[0,-10,0]}
                url={'https://www.tokenparade.xyz'}
                copy={'Token Parade'}
                description={"Parade the art for any Ethereum account."}
            />
            <TextDisplay
                position={[0,-15,0]}
                url={'https://nonagoncup.com/wrap/?tokenId=200'}
                copy={'Nonagon Cup'}
                description={"Wrap a 3D cup in your browser."}
            />
            <TextDisplay
                position={[0,-20,0]}
                url={'https://www.saffene.com'}
                copy={'Saffene Phone Stand'}
                description={"Robust minimal phone stand."}
            />
            <TextDisplay
                position={[0,-25,0]}
                url={'https://thenextweb.com/news/privacy-isnt-an-issue-with-burn-note-because-all-messages-will-self-destruct'}
                copy={'Burn Note'}
                description={"Ephemeral messaging app (inactive)."}
            />
            <TextDisplay
                position={[0,-30,0]}
                url={'https://appadvice.com/app/shuffler-photo-browser/980966633'}
                copy={'Shuffler'}
                description={"View your camera roll in random order (inactive)."}
            />
        </group>
    )
}