/*doc
---
title: Tile Layout
name: tile_layout_react
categories:
- react_utilities_tile-layout
- react_all
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-tile-layout pui-react-panels --save
</code>

## Props

TODO

## Basic usage

Import the subcomponents:

```
import {TileLayout, TileLayoutItem} from 'pui-react-tile-layout';

// for the example
import {ClickableAltPanel} from 'pui-react-panels';
```

```react_example
<TileLayout columns={3}>
  <TileLayoutItem>
    <ClickableAltPanel>Hey</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>What</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>Hello</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>What</ClickableAltPanel>
  </TileLayoutItem>
</TileLayout>
```

## Responsive Breakpoints

You can also pass an object setting the number of columns for responsive
breakpoints to the columns prop. You can set separate column values
(from 1 - 12 columns) for some or all of xs, sm, md, lg, and xl screen sizes.

```react_example
<TileLayout columns={{xs: 1, sm: 2, md: 3}}>
  <TileLayoutItem>
    <ClickableAltPanel>Hey</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>What</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>Hello</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>What</ClickableAltPanel>
  </TileLayoutItem>
</TileLayout>
```

## Gutters

You can make a TileLayout without gutters by passing noGutter as a prop.

```react_example
<TileLayout noGutter columns={3}>
  <TileLayoutItem>
    <ClickableAltPanel>Hey</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>What</ClickableAltPanel>
  </TileLayoutItem>
  <TileLayoutItem>
    <ClickableAltPanel>Hello</ClickableAltPanel>
  </TileLayoutItem>
</TileLayout>
```

*/
