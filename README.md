# Generic DOM collaboration fixture

Minimal portable Browser Capsule used to verify ato.run Capsule Invite flows.
It exports a direct application presentation Port using the `ato.http@1`
protocol and records/applies canonical interaction through the
`ato.browser@1` Adapter. HTTP presentation is not a second Evolution stream.

The application intentionally contains no Activity, Experience, game, or
Tobu-specific protocol. Its DOM includes three Public Launch archetypes over
the same generic Browser Port:

- Play: a visually obvious 2048 winning move;
- Create: eight unfinished pixels on a self-owned canvas;
- Developer: exactly one failing UI assertion with a one-line repair.

The original click, keyboard, scroll, and drag probes remain below them. Every
state change is ordinary application DOM state driven through `ato.browser@1`.

## Verify

```sh
ato init .
ato stop .
ato encap .@main --materialize ato.replay@1 --output generic-dom.capsule
ato run generic-dom.capsule
```
