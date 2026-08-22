# Generic DOM collaboration fixture

Minimal portable Browser Capsule used to verify ato.run Capsule Invite flows.
It exports a direct application presentation Port using the `ato.http@1`
protocol and records/applies canonical interaction through the
`ato.browser@1` Adapter. HTTP presentation is not a second Evolution stream.

The application intentionally contains no Activity, Experience, game, or
Tobu-specific protocol. Its DOM includes a click counter, keyboard input,
scrollable content, and a draggable element.

## Verify

```sh
ato init .
ato stop .
ato encap main --output generic-dom.capsule
ato run generic-dom.capsule
```
