import type { App } from "vue";
import { HelloWorld, MyButton, MyInput } from "@/components";

export default {
  install: (app: App) => {
    app.component("HelloWorld", HelloWorld);
    app.component("MyButton", MyButton);
    app.component("MyInput", MyInput);
  },
};

export { HelloWorld, MyButton, MyInput };
