/**
 * Flowtype definitions for WebBrowser
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.14.1
 */

declare module 'expo-web-browser' {
  import type {
    WebBrowserAuthSessionResult,
    WebBrowserCoolDownResult,
    WebBrowserCustomTabsResults,
    WebBrowserMayInitWithUrlResult,
    WebBrowserOpenOptions,
    WebBrowserRedirectResult,
    WebBrowserResult,
    WebBrowserResultType,
    WebBrowserWarmUpResult,
    WebBrowserWindowFeatures,
  } from 'expo-web-browser/build/WebBrowser.types';

  declare export * from './WebBrowser.types'
  declare export function getCustomTabsSupportingBrowsersAsync(): Promise<WebBrowserCustomTabsResults>;
  declare export function warmUpAsync(browserPackage?: string): Promise<WebBrowserWarmUpResult>;
  declare export function mayInitWithUrlAsync(
    url: string,
    browserPackage?: string,
  ): Promise<WebBrowserMayInitWithUrlResult>;
  declare export function coolDownAsync(browserPackage?: string): Promise<WebBrowserCoolDownResult>;
  declare export function openBrowserAsync(
    url: string,
    browserParams?: WebBrowserOpenOptions,
  ): Promise<WebBrowserResult>;
  declare export function dismissBrowser(): void;
  declare export function openAuthSessionAsync(
    url: string,
    redirectUrl: string,
    browserParams?: WebBrowserOpenOptions,
  ): Promise<WebBrowserAuthSessionResult>;
  declare export function dismissAuthSession(): void;

  /**
   * Attempts to complete an auth session in the browser.
   * @param options
   */
  declare export function maybeCompleteAuthSession(options?: {
    skipRedirectCheck?: boolean,
    ...
  }): {
    type: 'success' | 'failed',
    message: string,
    ...
  };
}

declare module 'expo-web-browser/build/WebBrowser.types' {
  declare export type RedirectEvent = {
    url: string,
    ...
  };
  declare export type WebBrowserWindowFeatures = {
    [key: string]: number | boolean | string,
    ...,
  };
  declare export type WebBrowserOpenOptions = {
    /**
     * Color of the toolbar in either #AARRGGBB or #RRGGBB format.
     */
    toolbarColor?: string,
    browserPackage?: string,

    /**
     * Whether the toolbar should be hiding when a user scrolls the website.
     */
    enableBarCollapsing?: boolean,

    /**
     * Android only
     */
    /**
     * Color of the secondary toolbar in either #AARRGGBB or #RRGGBB format.
     */
    secondaryToolbarColor?: string,

    /**
     * Whether the browser should show the title of website on the toolbar.
     */
    showTitle?: boolean,
    enableDefaultShareMenuItem?: boolean,

    /**
     * Whether browsed website should be shown as separate entry in Android recents/multitasking view.
     * Default: `false`
     */
    showInRecents?: boolean,

    /**
     * iOS only
     */
    controlsColor?: string,
    dismissButtonStyle?: 'done' | 'close' | 'cancel',
    readerMode?: boolean,

    /**
     * **Web:** name to assign to the popup window.
     */
    windowName?: string,

    /**
     * **Web:** features to use with `window.open()`
     */
    windowFeatures?: string | WebBrowserWindowFeatures,
    ...
  };
  declare export type WebBrowserAuthSessionResult = WebBrowserRedirectResult | WebBrowserResult;
  declare export type WebBrowserCustomTabsResults = {
    defaultBrowserPackage?: string,
    preferredBrowserPackage?: string,
    browserPackages: string[],
    servicePackages: string[],
    ...
  };
  declare export var WebBrowserResultType: {|
    +CANCEL: 'cancel', // "cancel"
    +DISMISS: 'dismiss', // "dismiss"
    +OPENED: 'opened', // "opened"
    +LOCKED: 'locked', // "locked"
  |};
  declare export type WebBrowserResult = {
    type: $Values<typeof WebBrowserResultType>,
    ...
  };
  declare export type WebBrowserRedirectResult = {
    type: 'success',
    url: string,
    ...
  };
  declare export type ServiceActionResult = {
    servicePackage?: string,
    ...
  };
  declare export type WebBrowserMayInitWithUrlResult = ServiceActionResult;
  declare export type WebBrowserWarmUpResult = ServiceActionResult;
  declare export type WebBrowserCoolDownResult = ServiceActionResult;
}
