import { GlowingBorderEffectSpan } from "./GlowingBorderEffectSpan"
import { GlowingBorderEffectSty } from "./style"

export const GlowingBorderEffect = ()=>{
    return(
        <GlowingBorderEffectSty width={300} height={400}>
            <GlowingBorderEffectSpan />

            <GlowingBorderEffectSty yPos={60} xPos={-50} width={500} height={150}>
                <GlowingBorderEffectSpan />
            </GlowingBorderEffectSty>

        </GlowingBorderEffectSty>
    )
}