import { Input } from "../library/input/input";

export const InputPage = () => {
  return (
    <div class="mb-8">
      <h1>Input</h1>
      <h3>Size</h3>
      <div class="mb-4 flex items-center gap-2">
        <Input size="sm" placeholder="sm" />
        <Input size="md" placeholder="md" />
        <Input size="lg" placeholder="lg" />
      </div>

      <h3>Label</h3>
      <p>
        Adds a label that is connected to the input via a <code>for</code> prop
        using a <code>ulid</code> id.
        <br /> You can override this by passing in your own <code>id</code>{" "}
        prop.
      </p>
      <div class="mb-4">
        <Input label="Email" id="custom" />
      </div>
    </div>
  );
};
