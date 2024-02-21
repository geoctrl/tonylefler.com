import { ParentProps, mergeProps } from "solid-js";
import { Button, Float } from "@stem/components";

type Props = ParentProps<{}>;

const defaultProps: Partial<Props> = {};

export const FloatPage = (_props: Props) => {
  const props = mergeProps(defaultProps, _props);
  return (
    <div>
      <h1>Float</h1>
      <p>
        Low-level dropdown component using{" "}
        <a href="https://floating-ui.com/" target="_blank" rel="noopener">
          floating-ui
        </a>
        .
      </p>

      <div class="mb-8">
        <Float
          renderTrigger={(floatProps) => (
            <Button {...floatProps}>Open me</Button>
          )}
          renderContent={() => <div class="p-4">I'm the content</div>}
        />
      </div>

      <div class="mb-8">
        <h3>
          allowContentClicks <code>bool</code>
        </h3>
        <p>
          default <code>false</code>
        </p>
        <p>Clicking inside the content will not close it.</p>
      </div>

      <div class="mb-8">
        <h3>
          backdrop <code>bool</code>
        </h3>
        <p>
          default <code>false</code>
        </p>
        <p>
          On content open, creates a backdrop behind it that blocks all other
          elements on the screen (like a modal).
        </p>
      </div>

      <div class="mb-8">
        <div>
          <code>coverTrigger</code>
        </div>
        <div>
          <code>placement</code>
        </div>
        <div>
          <code>onClose</code>
        </div>
        <div>
          <code>onImperativeHandle</code>
        </div>
        <div>
          <code>onKeyDown</code>
        </div>
        <div>
          <code>onOpen</code>
        </div>
        <div>
          <code>onToggle</code>
        </div>
        <div>
          <code>renderContent</code>
        </div>
        <div>
          <code>renderTrigger</code>
        </div>
        <div>
          <code>triggerHover</code>
        </div>
      </div>
    </div>
  );
};
