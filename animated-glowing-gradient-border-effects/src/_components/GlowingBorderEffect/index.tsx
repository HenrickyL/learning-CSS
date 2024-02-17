import { GlowingBorderEffectSpan } from "./GlowingBorderEffectSpan"
import { GlowingBorderEffectSty } from "./style"

export const GlowingBorderEffect = ()=>{
    return(
        <GlowingBorderEffectSty width={400} height={300}>
            <GlowingBorderEffectSpan />

        </GlowingBorderEffectSty>
    )
}