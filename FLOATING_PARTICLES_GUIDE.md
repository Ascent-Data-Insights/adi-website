# Floating Particles Animation - Customization Guide

All tweakable parameters are at the top of `app/components/hero-animations/FloatingParticles.tsx` (lines 18-34).

## Parameters Explained

### Particle Settings

**PARTICLE_COUNT** (Currently: 50)
- Controls how many particles appear on screen
- **Lower (30-40)**: Minimal, spacious feel
- **Current (50)**: Balanced
- **Higher (70-100)**: Dense, busy network effect

**PARTICLE_SPEED** (Currently: 0.5)
- How fast particles move
- **Slower (0.3)**: Calm, gentle drift
- **Current (0.5)**: Moderate movement
- **Faster (0.8-1.0)**: Dynamic, energetic

**PARTICLE_SIZE_MIN / PARTICLE_SIZE_MAX** (Currently: 2-6px)
- Size range for particles
- **Smaller (1-4px)**: Subtle, delicate
- **Current (2-6px)**: Visible but not overwhelming
- **Larger (3-8px)**: Bold, prominent

**PARTICLE_OPACITY** (Currently: 'CC' = 80%)
- How solid the particles appear (hex values)
- **'66'** (40%): Very subtle, ghost-like
- **'99'** (60%): Translucent
- **'CC'** (80%): Current - clearly visible
- **'FF'** (100%): Fully solid

**PARTICLE_COLORS**
- Array of hex colors for particles
- Current: White, Orange accent, Light blue
- You can add/remove colors or change them entirely

### Connection Line Settings

**CONNECTION_DISTANCE** (Currently: 150px)
- Maximum distance between particles to draw a connection line
- **Shorter (100-120)**: Fewer, tighter connections
- **Current (150)**: Moderate network density
- **Longer (180-200)**: More lines, denser web

**CONNECTION_OPACITY** (Currently: 0.4 = 40%)
- Base opacity for connection lines
- **Lower (0.2-0.3)**: Subtle connections
- **Current (0.4)**: Balanced visibility
- **Higher (0.5-0.6)**: Prominent connections

**CONNECTION_WIDTH** (Currently: 1.5px)
- Thickness of connection lines
- **Thinner (1)**: Delicate lines
- **Current (1.5)**: Clearly visible
- **Thicker (2-3)**: Bold, graphic look

---

## Suggested Presets

### 1. "Minimal Elegance"
```typescript
PARTICLE_COUNT = 35
PARTICLE_SPEED = 0.3
PARTICLE_SIZE_MIN = 1
PARTICLE_SIZE_MAX = 4
PARTICLE_OPACITY = '99'
CONNECTION_DISTANCE = 120
CONNECTION_OPACITY = 0.25
CONNECTION_WIDTH = 1
```
Fewer, slower, more subtle particles with delicate connections.

### 2. "Tech Network" (Current-ish)
```typescript
PARTICLE_COUNT = 50
PARTICLE_SPEED = 0.5
PARTICLE_SIZE_MIN = 2
PARTICLE_SIZE_MAX = 6
PARTICLE_OPACITY = 'CC'
CONNECTION_DISTANCE = 150
CONNECTION_OPACITY = 0.4
CONNECTION_WIDTH = 1.5
```
Balanced, professional tech vibe.

### 3. "Dynamic Energy"
```typescript
PARTICLE_COUNT = 70
PARTICLE_SPEED = 0.8
PARTICLE_SIZE_MIN = 2
PARTICLE_SIZE_MAX = 7
PARTICLE_OPACITY = 'FF'
CONNECTION_DISTANCE = 180
CONNECTION_OPACITY = 0.5
CONNECTION_WIDTH = 2
```
More particles, faster movement, bolder connections.

### 4. "Starfield"
```typescript
PARTICLE_COUNT = 80
PARTICLE_SPEED = 0.2
PARTICLE_SIZE_MIN = 1
PARTICLE_SIZE_MAX = 3
PARTICLE_OPACITY = 'FF'
CONNECTION_DISTANCE = 100
CONNECTION_OPACITY = 0.2
CONNECTION_WIDTH = 0.5
PARTICLE_COLORS = ['#FFFFFF']  // Only white
```
Many small, slow-moving points with minimal connections - like stars.

### 5. "Data Constellation"
```typescript
PARTICLE_COUNT = 40
PARTICLE_SPEED = 0.4
PARTICLE_SIZE_MIN = 3
PARTICLE_SIZE_MAX = 7
PARTICLE_OPACITY = 'E6'
CONNECTION_DISTANCE = 160
CONNECTION_OPACITY = 0.45
CONNECTION_WIDTH = 2
PARTICLE_COLORS = ['#FB8500', '#4785BF']  // Just orange and blue
```
Fewer but larger particles, prominent connections, brand colors only.

---

## Quick Tweaks to Try

**Want it calmer?**
- Reduce `PARTICLE_SPEED` to 0.3
- Reduce `PARTICLE_COUNT` to 35-40
- Lower `CONNECTION_OPACITY` to 0.25

**Want it more energetic?**
- Increase `PARTICLE_SPEED` to 0.7-0.8
- Increase `PARTICLE_COUNT` to 60-70
- Increase `CONNECTION_OPACITY` to 0.5

**Want stronger brand presence?**
- Remove white from `PARTICLE_COLORS`, keep only `#FB8500` and `#4785BF`
- Increase `PARTICLE_OPACITY` to 'FF'
- Make particles bigger

**Want it more subtle?**
- Lower `PARTICLE_OPACITY` to '99'
- Reduce `CONNECTION_WIDTH` to 1
- Reduce `CONNECTION_DISTANCE` to 120

---

Just edit the values at the top of the file and refresh - changes take effect immediately!
