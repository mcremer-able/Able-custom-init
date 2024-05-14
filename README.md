# able-custom

all my events

## Install

You can either clone the repo locally and link it as package or you can just copy the files and add the 2 dependencies

## add events

You can add events by merging with the `CustomEvent interface`

```ts
declare module 'able-custom' {
  interface CustomEvents {
    inquiry_started2: (
      inquiryId: string,
      payload: {
        dmsId: string;
      }
    ) => void;
  }
}
```

or

```ts
declare module './src/types/events.ts' {
  interface CustomEvents {
    inquiry_started2: (
      inquiryId: string,
      payload: {
        dmsId: string;
      }
    ) => void;
  }
}
```
