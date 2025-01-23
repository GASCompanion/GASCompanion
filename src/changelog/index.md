---
title: Changelog
description: GAS Companion Changelog
eleventyNavigation:
parent: More
key: Changelog
layout: layouts/markdown
---

<div class="border rounded-1 mb-4 p-3 color-border-accent-emphasis color-bg-accent f5">

Note that from the 6.0.0 release of this changelog, you can now click on Pull Request links (identified by a number prefixed by a `#`) to get further information about the related changes (new features / bugfix, etc.).

With each PR, I tend to put a little bit of documentation and some screenshots about the added features, what it does etc.

They can often serve as the basics of documentation before the website is updated to reflect the changes.

</div>


## [6.1.1](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/6.1.1) - Oct 10, 2024

<!-- Release notes generated using configuration in .github/release.yml at ue5-main -->

*   Fixing compilation error and deprecation warnings for 5.5 preview 1 in [#92](./pull/92)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/6.1.0...6.1.1>


  
## [6.1.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/6.1.0) - Jun 26, 2024

##### New Features 🎉

*   Added GetBoundInputActionForAbilityClass() method for `UGSCAbilityInputBindingComponent` in [#84](./pull/84)

##### Bug Fixes

*   Fixing linux compile errors on 5.4.2 in [#85](./pull/85)
*   Fix ability sets input binding for PlayerState owned ASC in case of respawns or possession switch in [#86](./pull/86)
*   Adding failsafe checks on effect delegates before registering listeners in [#87](./pull/87)

##### Other Changes

*   Adding ObjectInitializer default value for all gameplay actors in [#89](./pull/89)
*   Fixed Health, MaxHealth (and stamina / mana) getters in [#90](./pull/90)
*   Fixed UGSCUserWidget::GetAttributeValue() usage with invalid attribute preventing crash from happening in [#90](./pull/90)
*   Tweaked and fix comment for `UGSCUserWidget::GetAttributeValue()` in [#90](./pull/90)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/6.0.2...6.1>


  
## [6.0.2](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/6.0.2) - Jun 7, 2024

<!-- Release notes generated using configuration in .github/release.yml at ue5-main -->

##### Bug Fixes

*   Ensure enhanced input ability binds are cleared on repossession in [#82](./pull/82)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/6.0.1...6.0.2>


  
## [6.0.1](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/6.0.1) - Sep 5, 2023

<!-- Release notes generated using configuration in .github/release.yml at dev-ue5 -->

##### Other Changes

Note: GameplayEffect went through some major refactoring with the introduction of GEComponents in 5.3, have to check GameplayEffects created via Context Menu and GSC Gameplay Effect Template are still working properly in 5.3

*   Changes for 5.3-preview in [#81](./pull/81)
    *   [CI: windows change matrix to 5.1, 5.2, 5.3](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81/commits/afe33e9aceea657e080db4ef6d46c468bafd90a3)
    *   [GSCTemplate\_GameplayEffectDefinition: Disable deprecation warnings with PRAGMA\_DISABLE\_DEPRECATION\_WARNINGS](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81/commits/82e523a4165e85835a4c777986606851a5c8ba15)
    *   [Specs: Add missing include for UWorld in 5.3](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81/commits/25aeaf01de11311f7f9f11737065485b021b3160)
    *   [Fixes for 5.3 around DataValidation in GameFeature actions and GSCNativeAnimInstance](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81/commits/e6b2165ac3a6b62eeb7de90d4869816e52d42de0)
    *   [Fix 5.3 GSCNativeAnimInstance missing declaration of FDataValidationContext and WITH\_EDITOR wrapper in header](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81/commits/f71ae55e098b2fdaef1c095b4cd8304a8df42549)
    *   [GameplayEffects: Handle upgrade of pre-5.3 GE Template definitions to post-5.3 and the GEComponents introduced](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81/commits/d646548ea7736d97f3faeac5e566d67569e8d953)
    *   [GameplayEffects: Make sure to reset all deprecated properties that were copied from GSC Template, to avoid GE components being re-created on further compiles.](https://github.com/GASCompanion/GASCompanion-Plugin/pull/81/commits/eb85bdf4c70f53a3e961f1171657928a0256b054)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/6.0.0...6.0.1>


  
## [6.0.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/6.0.0) - Jun 29, 2023

<!-- Release notes generated using configuration in .github/release.yml at ue5-main -->

##### Breaking Changes 🛠

*   Adding IGameplayTagAssetInterface to modular gameplay actors in [#65](./pull/65)
*   Remove deprecated GSCTemplate definitions and get rid of class viewer warning in output log in [#68](./pull/68)

These two could be considered breaking changes. Check [#65](./pull/65) for potential required changes with IGameplayTagAssetInterface addition, if your custom C++ classes inheriting from one of the Actors provided by GSC was implementing the interface.

Deprecated GSCTemplate assets were obsolete for a very long time, it would only impact you if you were still using them directly as Parent class of your Gameplay Effects.

##### New Features 🎉

*   Added Ability Sets in [#62](./pull/62)
*   Ability Sets further improvements in [#73](./pull/73)
*   Tweaks to Ability Sets BP exposed API in [#79](./pull/79)
*   Tweaks to GSCNativeAnimInstance by adding Data validation and NativeInitializeAnimation() implementation in [#76](./pull/76)
*   Add ThirdPerson project templates (BP/CPP) in [#77](./pull/77)
*   Add GiveAbilityWithInput() method to GSCAbilityInputBindingComponent / Add GetCompanionAbilitySystemComponent() to the Blueprint library in [#78](./pull/78)

##### Bug Fixes

*   Fix few includes for 5.2 rocket build in [#74](./pull/74)
*   Fix implementation of AGSCModularPlayerState::CopyProperties() that was causing issues during travels between maps in [#75](./pull/75)

##### Other Changes

*   refactor: Convert all UPROPERTY native pointers to TObjectPtr in [#69](./pull/69)
*   Refactored Project Settings to have GAS Companion exposed settings appear within their own category, and not below the "Game" category anymore. in [#70](./pull/70)
*   Fixes for non unity build in [#80](./pull/80)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.3.2...6.0.0>


  
## [5.3.2+5.2](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.3.2+5.2) - May 23, 2023

<!-- Release notes generated using configuration in .github/release.yml at ue5-main -->

##### Other Changes

*   Fix few includes for 5.2 rocket build in [#74](./pull/74)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.3.2...5.3.2+5.2>


  
## [5.3.2](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.3.2) - Nov 27, 2022

<!-- Release notes generated using configuration in .github/release.yml at ue5-main -->

Patch version to fix an issue with selection of a new datatable for attributes initialization (in ASC class default Granted Attributes).

RequiredAssetDataTags metadata specifier needs to use the long form script name in 5.1, eg.

![image](https://user-images.githubusercontent.com/113832/204157316-669eabff-d142-4a8a-8e9d-784466ece0fe.png)

Also added the filter in GameFeature action (was not an issue, but wasn't filtering datatables on AttributeMetaData row structure)

*   Fix InitializationData RequiredAssetDataTags for 5.1 in [#61](./pull/61)

##### New Features

*   Filter initialization Datatable in GameFeature Action to only display AttributeMetaData ([90ccfce7](https://github.com/GASCompanion/GASCompanion-Plugin/commit/90ccfce7bc4fb94381fc80efc9b98237a4e715ab))

##### Bug Fixes

*   Adjust RequiredAssetDataTags Rowstructure for 5.1 ([fc6358be](https://github.com/GASCompanion/GASCompanion-Plugin/commit/fc6358becc83bace9b1c2e01e227e0b7e336c601))

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.3.1...5.3.2>


  
## [5.3.1](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.3.1) - Nov 17, 2022

<!-- Release notes generated using configuration in .github/release.yml at ue5-main -->

Patch for Unreal 5.1 release. Includes fixes for compilation / warnings happening on 5.1.

##### Other Changes

*   Fix compilation errors / warnings for 5.1 in [#60](./pull/60)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.3.0...5.3.1>


  
## [5.3.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.3.0) - Aug 16, 2022

This release includes improvements to the HUD widget, a new BP exposed OnInitAbilityActorInfo event in GSCAbilitySystemComponent / GSCCoreComponent to help in initialization of aforedmentioned HUD, and tweaks to GameFeature AddAbilities action that is now able to Apply / Remove Gameplay Effects on feature activation / deactivation along fixes for Ability Input binding via Game Feature and respawn of Player State characters.

##### New Features 🎉

*   HUD Lazy ASC init and Addition of OnInitAbilityActorInfo event on ASC & Core Component in [#57](./pull/57)
*   Game Feature - Adding Effects and Player State input binding fix in [#58](./pull/58)

##### Other Changes

*   Include automated tests in main plugin  in [#56](./pull/56)
*   Rework repository to include GASCompanion (main plugin) and GASCompanionTests in [#59](./pull/59)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.2.3...5.3.0>

##### New Features

*   Add ability to grant GameplayEffects from Game Features ([89610a3c](https://github.com/GASCompanion/GASCompanion-Plugin/commit/89610a3c165ae1df712608aa5c3c8412dc60f21e))
*   Addition of `OnInitAbilityActorInfo` event for both ASC and Core Component ([4d939735](https://github.com/GASCompanion/GASCompanion-Plugin/commit/4d9397350dc09b3b3e16b8cef70522163a3ee87a))
*   HUD now support lazy initialization ([56f8e396](https://github.com/GASCompanion/GASCompanion-Plugin/commit/56f8e39697b2066eeed149265c57b7729993d192))

##### Bug Fixes

*   Ensure Game Feature Action ability input binding works across respawns for Player State ASC ([7a0e543b](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7a0e543bf74d57a6e4ad5d8adf8a45e7121fad71))
*   Ensure InputBindingComponent is added to Pawn Avatar in Game Feature Action ([110f2042](https://github.com/GASCompanion/GASCompanion-Plugin/commit/110f2042ffb9c080d9229d4443f848e202c58cd1))
*   Fixed FGSCGameplayEffectExecuteData default value for DeltaValue / ClampMinimumValue ([e86afb72](https://github.com/GASCompanion/GASCompanion-Plugin/commit/e86afb72ece8229ee6afe1e0c8eb6282366b7112))
*   Make sure to register delegates only once for Core Component ([a961ceea](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a961ceea82bf2da2cfc313daff14adedb3994704))

##### Other Changes

*   Update Game Feature functional test to check ability input after respawn ([f85a2dda](https://github.com/GASCompanion/GASCompanion-Plugin/commit/f85a2dda2860a323876f89c24b4e10dfcee6557a))
*   AddInfo method in test blueprint library ([ba697c9d](https://github.com/GASCompanion/GASCompanion-Plugin/commit/ba697c9d8d713bdfcb64f1f751e8c49aa88205a9))
*   Add Blueprint library with helper to programmatically apply an enhanced input action ([db11adeb](https://github.com/GASCompanion/GASCompanion-Plugin/commit/db11adeb4bd33321723e50b6369313a03e485445))
*   Add test suite for core component, now checking only OnAttributeChanged behavior ([a5643a26](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a5643a260f2ec851cf81884aea4b3d5b28bce54a))
*   Convert modular characters suite to spec flavor ([01c58516](https://github.com/GASCompanion/GASCompanion-Plugin/commit/01c5851686f7bf31efcfea51952807c68a6a8c0f))
*   Convert ability input binding suite to spec flavor ([a1e2f82f](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a1e2f82fe62b66cb88408e234de2b6ed4cf96e54))
*   Add FGASCompanionTestsUtils helper class ([7ad35c77](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7ad35c77982d6c06510d967602a28ef470793cf2))

##### Refactors

*   Add `HasAbility` helper to UGSCGameFeatureAction\_AddAbilities ([66575104](https://github.com/GASCompanion/GASCompanion-Plugin/commit/66575104505373519d5d56ebbf78fe181083041b))
*   Add note on requirement AGSCModularPlayerController for Game Feature AddInputMappingContext action ([e3d783fe](https://github.com/GASCompanion/GASCompanion-Plugin/commit/e3d783fe24ba892b3e0f44961ff579d97263ef79))
*   Remove GetBoolText helper ([c79a81cd](https://github.com/GASCompanion/GASCompanion-Plugin/commit/c79a81cdcc056b66576c4d313a0daca291bc2eae))


  
## [5.2.3](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.2.3) - Jul 17, 2022

<!-- Release notes generated using configuration in .github/release.yml at ue5-main -->

##### Bug Fixes

*   fix: Make sure parent class of the created BP is the correct one in [#53](./pull/53)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.2.2...5.2.3>


  
## [5.2.2](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.2.2) - Jul 10, 2022

*   OSx support in [#50](./pull/50)
    *   Fix for OSx ambiguous return value in GSCCreationMenu.h
    *   Fix for NetCore module dependency (specific to OSx)
    *   Adding `Mac` in PlatformAllowList
*   Linux support & Remove all LaunchPad related code in [#51](./pull/51)
    *   Fixup loop variable Wrange-loop-construct compilation errors on 4.27
    *   Add Linux to .uplugin PlatformAllowList
    *   Removed all LaunchPad related code
        *   LaunchPad if re-added back will be done in a standalone plugin or module.

Internal: Setting up CI/CD process on github to check package build is successful on each supported platform (CI on Windows / Linux for now)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.2.1...5.2.2>


  
## [5.2.1](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.2.1) - Jun 5, 2022

##### Bug Fixes

*   **Effect Templates:**  Ensure FInheritedTagContainer (containers with Combined Tags) are properly updated when templates are edited ([7e97c2e9](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7e97c2e9e31ba37def17bb334f7f7672f872fde7)) - [#47](./pull/47)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.2.0...5.2.1>


  
## [5.2.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.2.0) - Jun 4, 2022

*   feat(AbilitySystemComponent): Make it possible to persist attributes or abilities across respawns or possessions. in [#43](./pull/43)
*   feat(Animations): Add Gameplay Tag Blueprint Property Mapping support… in [#42](./pull/42)

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.1.0...5.2.0>


  
## [5.1.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.1.0) - Apr 14, 2022

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/5.0.0...5.1.0>


  
## [3.4.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.4.0) - Apr 7, 2022

##### New Features

*   Add TargetInputConfirm / TargetInputCancel input action properties in MGCAbilityInputBindingComponent to handle input confirm / cancel binding for Target Actors ([610fca8c](https://github.com/GASCompanion/GASCompanion-Plugin/commit/610fca8c58a67392584807248fe84587de9f4568))

##### Other Changes

*   Disable launch pad button in dropdown menu. It'll be reworked and added back in a future release. ([a1163f3a](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a1163f3a28398b1d925bfbb54606c3436ab5f0e6))
*   Mark AGSCHUD as deprecated. Setup DeprecationMessage to display warnings in Blueprints. ([cb77a53a](https://github.com/GASCompanion/GASCompanion-Plugin/commit/cb77a53a8d97ca12b27fdf8b374b0bbc3ec8d06c))
*   Make `UGSCAttributeSetBase` Abstract ([a3c0d38e](https://github.com/GASCompanion/GASCompanion-Plugin/commit/a3c0d38eac5527d3041fbb0209b3785421e4a8f2))
*   Hiding it in both dropdowns and details view. Base class meant to be inherited and not used directly, prevents issue when trying to grant it from Blueprints details panel.

##### Refactors

*   Filter initialization Datatable in `MGCAbilitySystemComponent` to only display AttributeMetaData ([d023c967](https://github.com/GASCompanion/GASCompanion-Plugin/commit/d023c967e1cc9b633e5f968d5a54f2408f72b21e))


  
## [5.0.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/5.0.0) - Apr 6, 2022

**Full Changelog**: <https://github.com/GASCompanion/GASCompanion-Plugin/compare/3.4.0...5.0.0>


  
## [3.3.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.3.0) - Apr 4, 2022

##### Bug Fixes

*   **Attribute Set:**
    *   Simplify and fix formula used in AdjustAttributeForMaxChange (PreAttributeChange) ([798aa1c9](https://github.com/GASCompanion/GASCompanion-Plugin/commit/798aa1c9dc4dddf9b239692e38bfbce2a351ee5e))
    *   Remove clamping in pre attribute change, should happen solely in PostGameplayEffectExecute ([18e0650c](https://github.com/GASCompanion/GASCompanion-Plugin/commit/18e0650c01c35f803726db9f003f95a717d24f7c))
*   **HUD:**
    *   Use final attribute value instead of base for bound widgets ([f47973a3](https://github.com/GASCompanion/GASCompanion-Plugin/commit/f47973a30643d349b8ec3eed5ade5ba8bee73eca))
    *   Fix `OnCooldownEnd` event not being triggered in HUD User Widget ([ad7773d8](https://github.com/GASCompanion/GASCompanion-Plugin/commit/ad7773d8219837e2511e196f872ccea315fa17f6))
*   **MGCAbilitySystemComponent:**  Prevent granting of attributes twice for Player State ASC on remote clients ([9fe2def9](https://github.com/GASCompanion/GASCompanion-Plugin/commit/9fe2def99e02a7ffc33bad1399cf3d7526274f8c))
*   **Game Features:**  Add Abilities action now properly supporting Player State as a target actor for the game feature action ([df61c650](https://github.com/GASCompanion/GASCompanion-Plugin/commit/df61c6503a040e654b707267e7686fd7a60f3726))

##### Other Changes

*   Add deprecated notice to all GSC prefixed actors from 2.0 ([7cc756cc](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7cc756cc692817e5e476f721d30272926428adb6))
*   Move `InitGlobalData()` to PostEngineInit. This is a failsafe measure to ensure `InitGlobalData()` happens late enough even when not using an Asset Manager subclass to handle it. ([1cdf7743](https://github.com/GASCompanion/GASCompanion-Plugin/commit/1cdf774316c8bb3a965175900bf8db88b7913da7))
*   Change runtime modules loading phase from `Default` to `PreDefault` / Change `ModularGASCompanionEditor` loading phase from `Default` to `PostEngineInit` ([7f7818b0](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7f7818b090dfceb796d195b432f6fc0d1f9295ad))
*   Store custom class layout class names so as to avoid issue in shutdown with -stompmalloc ([beb840c5](https://github.com/GASCompanion/GASCompanion-Plugin/commit/beb840c5b189abcfaa3782c540ffa28fa94c0e3d))

##### Refactors

*   change default pawn class in both `AModularGameMode` and `AModularGameModeBase` to be `AModularPlayerStateCharacter` ([5b7e25e8](https://github.com/GASCompanion/GASCompanion-Plugin/commit/5b7e25e88bb244ff189953435559f6a25788ebf8))
*   **Game Features:**  Split `AddActorAbilities()` into sub-methods ([c35d4b12](https://github.com/GASCompanion/GASCompanion-Plugin/commit/c35d4b1280d2ef547c12ee435b7a75503d9298f5))


  
## [3.2.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.2.0) - Dec 30, 2021

##### New Features

*   **AbilityInputBinding:**
    *   UMGCAbilityInputBindingComponent now provides a way to get back the InputAction that is bound to a given Gameplay Ability ([91f26fc8](https://github.com/mklabs/GASCompanion-Plugin/commit/91f26fc8345d692597c50924ce569b9fb96365c1))
        *   Added `UMGCAbilityInputBindingComponent::GetBoundInputActionForAbility()` Blueprint exposed method
        *   Designed to be called from within a Gameplay Ability event graph, passing self reference for the Gameplay Ability parameter.
    *   Add `GetAbilityInputBindingComponent` helper in Blueprint Function Library ([6ca63b6e](https://github.com/mklabs/GASCompanion-Plugin/commit/6ca63b6e562df5804e6f66e917c303ff9a07c479))
    *   Expose property to specify the input trigger event for ability activation ([b3fed7d6](https://github.com/mklabs/GASCompanion-Plugin/commit/b3fed7d640d6d55f6864387c41e459ae12e32184))
        *   Added TriggerEvent property on Granted Abilities structure for MGCAbilitySystemComponent and Game Feature Action (AddAbilities). TriggerEvent property only appear when InputAction is defined
        *   Added TriggerEvent param to Blueprint exposed `UMGCAbilityInputBindingComponent::SetInputBinding`

> The most common trigger types are likely to be Started for actions that happen once, immediately upon pressing a button, and Triggered for continuous actions that happen every frame while holding an input.

> ***Warning**: The Triggered value should only be used for Input Actions that you know only trigger once. If your action triggered event happens on every tick, this might lead to issues with ability activation (since you'll be trying to activate abilities every frame). When in doubt, use the default Started value.*

*   Add `UGSCAssetManager` to handle InitGlobalData and expose a setting to prevent GlobalData initialization from GAS Companion StartupModule ([b09208de](https://github.com/mklabs/GASCompanion-Plugin/commit/b09208de02be0454c0d369d916766ed5896d3caa))
    *   New Plugin Setting: `Project Settings > Game > GAS Companion > Prevent Ability System Global Data Initialization in Startup Module`
    *   Turning on this option will disable the initialisation from happening in companion runtime module to let you handle it in either your AssetManager class or GameInstance. Also adding in UGSCAssetManager to handle that (the editor should prompt you if you'd like to use it when you turn on bPreventGlobalDataInitialization, notif should only appear if the Asset Manager Class Name is set to engine's default)

##### Bug Fixes

*   **GSCTargetTypeUseEventData:**  Extract hit results from EventData's target data ([ad9345db](https://github.com/mklabs/GASCompanion-Plugin/commit/ad9345db96ad13578282945108c734c8a34faabd))
*   **Core Component:**  Pass down bAllowRemoteActivation in ActivateAbilityByClass to ASC's TryActivateAbilityByClass method ([68bf8e4e](https://github.com/mklabs/GASCompanion-Plugin/commit/68bf8e4e9f070d5112b69801ec70a324e089071d))

##### Other Changes

*   Make GrantDefaultAbilitiesAndAttributes public and virtual ([deeb26c1](https://github.com/mklabs/GASCompanion-Plugin/commit/deeb26c1c2c015d88ec043d40b3f6bf38811b3a8))
*   Move AttributeSets plugin settings to AdvancedDisplay to clearly indicate it is deprcated ([000d9dee](https://github.com/mklabs/GASCompanion-Plugin/commit/000d9dee11279a7cc1eae750622d6c6f5824dd24))


  
## [3.1.1](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.1.1) - Dec 9, 2021

#### 3.1.1 (2021-12-09)

##### Bug Fixes

*   Fix Gameplay Cue related methods in UGSCBlueprintFunctionLibrary to not rely on UGSCAbilitySystemComponent (was failing for 3.x versions due to not using this ASC anymore) ([9bc19910](https://github.com/mklabs/GASCompanion-Plugin/commit/9bc199103fb21f71c5b8076b698a22622e6985fb))
*   Fixes both Behavior Tree Tasks to activate ability (via class or tags), now using GSCCoreComponent to activate abilities, instead of old GSCAbilitySystemComponent ([2221d640](https://github.com/mklabs/GASCompanion-Plugin/commit/2221d640b0b19cf80bcea8db5017cd4026e4f49b))
*   fix various structs initialization warnings ([51782905](https://github.com/mklabs/GASCompanion-Plugin/commit/51782905086d8037420894730e0d56773fcf4334))
*   Remove WB\_HUD\_AttributesDebug umg widget (no longer used) and fix warning ([d3c05c0d](https://github.com/mklabs/GASCompanion-Plugin/commit/d3c05c0d4d0e65a9d9e7e395cb2cd7998d9cd400))

##### Other Changes

*   Deprecated `UGSCAbilitySystemComponent` ([6ac32f14](https://github.com/mklabs/GASCompanion-Plugin/commit/6ac32f14a418f7d571bc87183a769f911d19456d))
*   Deprecated `GetAbilitySystemComponentFromActor` in UGSCBlueprintFunctionLibrary ([73fe4eee](https://github.com/mklabs/GASCompanion-Plugin/commit/73fe4eee1395504e16d067f0d0ef7397f8277517))
*   Update class template file to remove reference to GSCCharacterBase and tweak generated PostGameplayEffectExecute method content ([24263e43](https://github.com/mklabs/GASCompanion-Plugin/commit/24263e43a845e446f5845ddd4ee0d95732537813))
*   Deprecated GetCharactersFromContext() in UGSCAttributeSetBase. Use GetExecutionDataFromMod() instead and read SourceActor / TargetActor from returned structure (FGSCAttributeSetExecutionData). ([7479b1ab](https://github.com/mklabs/GASCompanion-Plugin/commit/7479b1aba5417525102eebdff89391529e03c942))
*   Move file templates out of Content/Templates directory to Templates/ClassTemplates ([9c664e16](https://github.com/mklabs/GASCompanion-Plugin/commit/9c664e168c2e31fd35922160a920f81593b07947))


  
## [3.1.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.1.0) - Nov 7, 2021

*   Change Modular Characters constructor to use ObjectInitializer and allow child classes to override default subobject classes (VaultIt Integration) ([a5607ad2](https://github.com/mklabs/GASCompanion-Plugin/commit/a5607ad20f675d2d5e5296967adc2537dd2db3cb))


  
## [3.0.2](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.0.2) - Sep 16, 2021

##### Bug Fixes

*   Make sure OnAttributeChange doesn't trigger twice for Health/Stamina/Mana ([fde7db42](https://github.com/mklabs/GASCompanion-Plugin/commit/fde7db42c6c1a72fb0c606b738919ec3e00723c5))


  
## [3.0.1](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.0.1) - Sep 16, 2021

##### Bug Fixes

*   **CoreComponent:**  Fix triggering of events for ASC delegates, only those triggered from AttributeSet were active ([62fb4457](https://github.com/mklabs/GASCompanion-Plugin/commit/62fb4457ce8962b4315ca93cd39121e8050f850d))
*   **Packaging:**
    *   change commented out section in console manager subsystem (-Werror, -Wcomment) ([330ad091](https://github.com/mklabs/GASCompanion-Plugin/commit/330ad0914f90141226cbd26bf6b5169fcd52d4cd))
    *   Adding whitelist platforms to ModularGASCompanionEditor in .uplugin ([3cb75a0a](https://github.com/mklabs/GASCompanion-Plugin/commit/3cb75a0afa91b9f6a6075a3ae4be135888a27b8e))
    *   Fix packaging for Mac in AddInputMappingContext Action (-Werror… …,-Wlogical-not-parentheses) ([e2113dee](https://github.com/mklabs/GASCompanion-Plugin/commit/e2113dee903376c9cf219daa10c9f13e8e980d2a))
    *   Fix packaging for Mac in AddAbilities Action (-Werror,-Wlogical-not-parentheses) ([6629f3f2](https://github.com/mklabs/GASCompanion-Plugin/commit/6629f3f27ae271933b02ab53c06774d9c881f4d5))

##### Other Changes

*   Remove Win32 from WhitelistPlatforms ([e065b8c9](https://github.com/mklabs/GASCompanion-Plugin/commit/e065b8c9e3fb465de7c6281f4a52fea8634f7228))


  
## [3.0.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/3.0.0) - Sep 9, 2021



  
## [2.1.1](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/2.1.1) - Jul 28, 2021



  
## [2.1.0](https://github.com/GASCompanion/GASCompanion-Plugin/releases/tag/2.1.0) - Jul 7, 2021



  
---

Updated Jan 23, 2025
