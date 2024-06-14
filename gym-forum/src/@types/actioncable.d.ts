// src/@types/actioncable.d.ts
declare module '@rails/actioncable' {
    export function createConsumer(url?: string): Consumer;
  
    export interface Consumer {
      subscriptions: Subscriptions;
    }
  
    export interface Subscriptions {
      create(channel: string | ChannelNameWithParams, mixin: Mixin): Subscription;
    }
  
    export interface Subscription {
      unsubscribe(): void;
    }
  
    export interface ChannelNameWithParams {
      channel: string;
      [key: string]: any;
    }
  
    export interface Mixin {
      connected?(): void;
      disconnected?(): void;
      received?(data: any): void;
      [key: string]: any;
    }
  }
  