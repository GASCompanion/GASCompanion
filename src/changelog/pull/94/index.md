---
title: "Pull Request #94"
description: "Added option to hide and filter GSCAttributeSet in attribute dropdowns"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_94
  title: "6.2.0 - PR #94"
  excerpt: "Added option to hide and filter GSCAttributeSet in attribute dropdowns"
layout: layouts/markdown
---

*[on December 2nd, 2024](https://github.com/GASCompanion/GASCompanion-Plugin/pull/94)*

## Added option to hide and filter GSCAttributeSet in attribute dropdowns

With a new DeveloperSettings category available under `Project Settings > GAS Companion > Attributes` category.

And `bShouldHideGSCAttributeSetInDetailsView` setting. When turned on, this will add (or remove when turned off, the default value) the `HideInDetailsView` metadata on the GSCAttributeSet UClass, which the engine details customization and slate widgets is checking to filter out attributes or attribute sets.

![image](./f2dd0f42-6083-41e4-9540-a86384f71e8f.png)

On editor start, the metadata will be added programatically if this setting is turned on.

#### Example with HideInDetailsView turned on

![image](./21340d7a-e610-4e73-907b-21ef44db57ca.png)

or with K2 Nodes that have an Attribute pin parameter:

![image](./81a7a506-f2b7-4e76-a94b-50e149aa2932.png)

#### Example with HideInDetailsView turned off (default value)

When turned off (the default behavior)

![image](./619ad950-20be-4cd6-8980-2f37662d641e.png)

![image](./fef35eb3-8502-4934-be3c-eb13ddc8358d.png)

![image](./3482830f-8673-41ef-a3ca-b1f1313a9b5c.png)

