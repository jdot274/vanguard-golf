# Vanguard Golf

Neon SDF golf game + Ball Lab shader engine (r3f / GLSL).

## Live

- Game: https://vanguard-golf-game-v2.vercel.app
- Ball Lab: https://vanguard-golf-game-v2.vercel.app/creator/

## Structure

| Path | What |
|---|---|
| `game/` | Playable WebGL2 raymarched golf (v2) |
| `ball-lab/` | Vite + React Three Fiber ball creator (16+ shader presets, Tweakpane engine) |
| `public/` | Deploy root — game at `/`, Ball Lab at `/creator/` |

## Develop

```bash
# Ball Lab
cd ball-lab && npm install && npm run dev

# Game only (static)
node game/serve.mjs
```

## Build & deploy

```bash
npm run build          # builds Ball Lab → syncs into public/
vercel deploy --prod   # deploys public/ via vercel.json
```

Ball selection persists in `localStorage` key `vanguardGolf.ball.v1` (shared origin with the game).
