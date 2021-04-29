# Gameplay Ability System Companion

**Documentation repository**

---

Leveraging the power of the Gameplay Ability System, this plugin provides a starting point and a robust foundation to speed up the creation and development of GAS-based projects.

It includes the necessary C++ code and Blueprints to get started on a new project that aims to use Epic's GAS plugin (used namely in Fortnite and Paragon, and showcased in Action RPG project)

[**Marketplace link**](https://www.unrealengine.com/marketplace/en-US/product/gas-companion) / [**Documentation**](https://mklabs.github.io/GASCompanion/) / [**Playable Demo**](https://drive.google.com/file/d/18hlutBlXDPSYQHHSWwA6c40hMG4NJqOS/view) / [**Example Project**](https://drive.google.com/file/d/1Lv09MkQKk9egzFjI5DS6oO8ys9IsGCSd/view) / [**Issue Tracker**](https://github.com/mklabs/GASCompanion/issues)
 
## Features

- **Provided as a Plugin** to easily share code between projects
- **Blueprint Friendly**, no need to dive into the cpp side, you can implement Abilities right away
- **C++ Friendly too!** You can easily extend from the provided C++ class or modify the plugin source.
    - GAS Companion aims to be a general base for GAS powered projects without making any game design choices. The system is intended to be subclassed and customized per project needs.
- **Not Game specific** The plugin doesn't make assumptions about your game design and decisions, and was built to be generic enough to be used in any kind of game.
- **Ability Queueing System** Store failed abilities and re-trigger when the previous running ability ends, with a custom Debug Widget to visualize the state of the Queueing System
- **Ignore Ability Cost for activation** Possibility to "loosely" check cost for Abilities, only checking for positive resource value, letting abilities activate even if attributes goes into negative values - but still prevents activation when value is 0 or below 0
- **AttributeSet** setup with most commonly used Attributes (Health, Stamina, Mana)
- **ASC on PlayerState** (for Player characters) or on Pawns (for AI / NPC Characters)
- **AI Tasks** Activate Abilities by Tags or Class from Behavior Trees
- **Custom AbilitySystemComponent and GameplayAbility**
    - Activate abilities by Class / Tags and return the activated ability
    - Abilities with onAbilityEnded delegate (useful for Behavior Tree Tasks)
    - Abilities with Gameplay Effect Containers
- **Comprehensive Base Character**
    - Getters for AttributeSet values
    - Support for startup Attributes, Effects and Abilities
    - Ability, Attributes and Character lifecycle Events
        - OnAbilityActivated
        - OnAbilityEnded
        - OnAbilityFailed
        - OnRespawn
        - OnDamage
        - OnAttributeChange
        - OnHealthChange
        - OnStaminaChange
        - OnManaChange
    - Ability System helpers (Ability activation, Checking for GameplayTags, ...)
- **UI setup** and basic HUDs provided
