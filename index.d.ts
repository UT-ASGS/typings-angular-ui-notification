// Support for AMD require and CommonJS
declare module 'angular-ui-notification' {
  export type INotificationProvider = angular.uiNotification.INotificationProvider;
  export type IOptions = angular.uiNotification.IOptions;
  export type IConfig = angular.uiNotification.IConfig;
  export type INotificationScope = angular.uiNotification.INotificationScope;
  export type INotificationService = angular.uiNotification.INotificationService;
}

declare namespace angular.uiNotification {
  /** The notification service that is injected into the appliation */
  export interface INotificationService {
  /** Show the message with bootstrap's primary class */
  (msg: string): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's primary class */
  (msg: IOptions): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's primary class */
  primary(msg: string): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's primary class */
  primary(msg: IOptions): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's info class */
  info(msg: string): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's info class */
  info(msg: IOptions): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's success class */
  success(msg: string): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's success class */
  success(msg: IOptions): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's warn class */
  warning(msg: string): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's warn class */
  warning(msg: IOptions): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's danger class */
  error(msg: string): PromiseLike<INotificationScope>;
  /** Show the message with bootstrap's danger class */
  error(msg: IOptions): PromiseLike<INotificationScope>;
  /** Remove all shown messages */
  clearAll(): void;
}

/** The notification options object */
export interface IOptions {
  /** Title to appear at the top of the notification */
  title?: string;
  /** Message to appear in the notification */
  message: string;
  /** URL of template to be used for notification */
  templateUrl?: string;
  /** Number of ms before notification fades out. If not an integer, notification will persist until killed. */
  delay?: string | number;
  /**  Bootstrap flavoring */
  type?: "primary"| "info" | "success" | "warning" | "error";
/** "right", "left", "center" 	"right" 	Horizontal position of the message */
positionX ?: "right" | "left" | "center";
/** "top", "bottom" 	"top" 	Vertical position of the message */
positionY ?: "top" | "botton";
/** If true this message will replace old(er) message(s) */
replaceMessage ?: boolean;
/** If true, the message is closed on click */
closeOnClick ?: boolean;
}

/** The scope object returned from showing a notification */
export interface INotificationScope {
  kill: (isHard?: boolean) => void;
}

/** The provider object for configuring the servicer */
export interface INotificationProvider extends angular.IServiceProvider {
  setOptions(options: IConfig): void;
}

/** Configuration options that can be passed to the provider */
export interface IConfig {
  /** Any integer value 	5000 	The time in ms the message is showing before start fading out */
  delay?: number;
  /** Any integer value 	10 	Vertical padding between messages and vertical border of the browser */
  startTop?: number;
  /** Any integer value 	10 	Horizontal padding between messages and horizontal border of the browser */
  startRight?: number;
  /** Any integer value 	10 	Vertical spacing between messages */
  verticalSpacing?: number;
  /** Any integer value 	10 	Horizontal spacing between messages */
  horizontalSpacing?: number;
  /** "right", "left", "center" 	"right" 	Horizontal position of the message */
  positionX?: "right"| "left" | "center";
/** "top", "bottom" 	"top" 	Vertical position of the message */
positionY ?: "top" | "botton";
/** true, false 	false 	If true every next appearing message replace old messages */
replaceMessage ?: boolean;
/** Any string 	"angular-ui-notification.html" 	Custom template filename (URL) */
templateUrl ?: string;
/** Any function 	undefined 	Callback to execute when a notification element is closed. Callback receives the element as its argument. */
onClose ?: Function;
/** true, false 	true 	If true, messages are closed on click */
closeOnClick ?: boolean;
/** Any integer 	0 	Show only [maxCount] last messages. Old messages will be killed. 0 - do not kill */
maxCount ?: number;
  }
}
