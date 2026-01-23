# Hero Animation Options

You now have **10 different hero animations** to choose from! Each has a unique style and feel.

## How to Switch Animations

1. Open `app/components/Hero.tsx`
2. Comment out the current import (line 9)
3. Uncomment the animation you want to try
4. Update line 22 to match: `const HeroAnimation = YourChoice;`

## Available Animations

### Original Set

**1. AnimatedGradient**
- Simple, subtle gradient that shifts and scales
- Very performant, minimal motion
- Best for: Clean, professional look

**2. FloatingParticles** ⭐ (CURRENT)
- Animated particles with connecting network lines
- Medium complexity, dynamic movement
- Best for: Tech/data science vibe

**3. GeometricLines**
- Diagonal lines sliding across with pulsing accent circles
- Clean geometric aesthetic
- Best for: Modern, structured feel

**4. WavePattern**
- Layered SVG waves that gently undulate
- Organic, flowing movement
- Best for: Calm, professional atmosphere

**5. DotGrid**
- Dot grid pattern with floating accent dots
- Subtle, grid-based animation
- Best for: Structured, data-focused look

### New Set

**6. MorphingBlobs**
- Soft, organic blob shapes that morph and drift
- Very smooth, gentle motion
- Best for: Creative, approachable vibe

**7. RisingOrbs**
- Translucent bubbles/orbs rising from bottom to top
- Continuous upward movement
- Best for: "Ascent" theme (rising/climbing metaphor)

**8. DataStream**
- Matrix-style falling binary digits
- Retro-tech aesthetic
- Best for: Data/AI emphasis, tech-forward brand

**9. Constellation**
- Pulsing stars connected by constellation lines
- Elegant, space-inspired
- Best for: Premium, aspirational feel

**10. ParallaxLayers**
- Multiple layers of shapes moving at different speeds
- Depth and dimension
- Best for: Sophisticated, layered storytelling

## Recommendations

- **Most professional**: AnimatedGradient, ParallaxLayers
- **Most dynamic**: FloatingParticles, RisingOrbs, DataStream
- **Most elegant**: Constellation, MorphingBlobs
- **Best for "Ascent" branding**: RisingOrbs (literal rising), Constellation (reaching for stars)
- **Most unique**: DataStream, Constellation

## Performance Notes

- Canvas-based (FloatingParticles, DataStream, Constellation): Slightly more resource-intensive but very smooth
- CSS-based (all others): Lighter weight, great performance

Try them out and see which one feels right for your brand!
