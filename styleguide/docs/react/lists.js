/*doc
---
title: Lists
name: list_react
categories:
- react_base_lists
- react_all
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-lists --save
</code>

*/

/*doc
---
title: Breadcrumb
name: 02_list_breadcrumb_react
parent: list_react
---

Require the subcomponents:

```
const {BreadcrumbList} = require('pui-react-lists');
const {ListItem} = require('pui-react-lists');
```

```react_example
<BreadcrumbList>
  <ListItem><a href="/">Home</a></ListItem>
  <ListItem><a href="/react.html">React</a></ListItem>
  <ListItem className="current"><span>Lists</span></ListItem>
</BreadcrumbList>
```
*/

/*doc
---
title: Group
name: 06_list_group_react
parent: list_react
---

Require the subcomponents:

```
const {GroupList} = require('pui-react-lists');
const {ListItem} = require('pui-react-lists');
```

```react_example
<GroupList>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</GroupList>
```
*/

/*doc
---
title: Group Inverse
name: 07_list_group_inverse_react
parent: list_react
---

Require the subcomponents:

```
const {GroupListInverse} = require('pui-react-lists');
const {ListItem} = require('pui-react-lists');
```

```react_example
<GroupListInverse>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</GroupListInverse>
```

*/

/*doc
---
title: Inline
name: 08_list_inline_react
parent: list_react
---

Require the subcomponents:

```
const {InlineList} = require('pui-react-lists');
const {ListItem} = require('pui-react-lists');
```

```react_example_table
<InlineList>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</InlineList>
```

```react_example_table
<InlineList divider>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</InlineList>
```

*/

/*doc
---
title: Ordered
name: 10_list_ordered_react
parent: list_react
---

Require the subcomponents:

```
const {OrderedList} = require('pui-react-lists');
const {ListItem} = require('pui-react-lists');
```

```react_example_table
<OrderedList>
 <ListItem>Item 1</ListItem>
 <ListItem>Item 2</ListItem>
 <ListItem>Item 3</ListItem>
</OrderedList>
```

```react_example_table
<OrderedList unstyled>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</OrderedList>
```
*/

/*doc
---
title: Steps
name: 11_list_steps_react
parent: list_react
---

Require the subcomponent:

```
const {StepList} = require('pui-react-lists');
const {ListItem} = require('pui-react-lists');
```

```react_example
<StepList>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem className="current">Item 3</ListItem>
</StepList>
```
*/

/*doc
---
title: Unordered
name: 13_list_unordered_react
parent: list_react
---

Require the subcomponents:

```
const {UnorderedList} = require('pui-react-lists');
const {ListItem} = require('pui-react-lists');
```

```react_example_table
<UnorderedList>
  <ListItem>feep</ListItem>
  <ListItem>fop</ListItem>
  <ListItem>meep</ListItem>
</UnorderedList>
```

```react_example_table
<UnorderedList unstyled>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</UnorderedList>
```

*/

/*doc
---
title: Configuring Spacing
name: 14_list_spacing_react
parent: list_react
---

List Spacing can be changed setting the size of the spacing property.

|Options|Values       | Pixels
|-------|-------------|-------
|`n`    |none         |0px
|`s`    |small        |5px
|`m`    |medium       |7px
|`l`    |large        |10px
|`xl`   |extra large  |21px

```react_example
<StepList spacing="n">
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem className="current">Item 3</ListItem>
</StepList>
```

```react_example
<UnorderedList spacing="xl">
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem className="current">Item 3</ListItem>
</UnorderedList>
```
 */
